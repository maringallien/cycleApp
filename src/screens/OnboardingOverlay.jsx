import { useState, useEffect, useCallback } from 'react'

const STORAGE_PREFIX = 'cycleapp_onboarding_'

function OnboardingOverlay({ screenKey, steps, onComplete, containerId = 'home-screen-container' }) {
  const [currentStep, setCurrentStep] = useState(0)
  const [visible, setVisible] = useState(false)
  const [animatingOut, setAnimatingOut] = useState(false)
  const [tooltipAnim, setTooltipAnim] = useState(false)

  useEffect(() => {
    const seen = localStorage.getItem(STORAGE_PREFIX + screenKey)
    if (!seen && steps && steps.length > 0) {
      setVisible(true)
      setTimeout(() => setTooltipAnim(true), 300)
    }
  }, [screenKey, steps])

  const finish = useCallback(() => {
    setAnimatingOut(true)
    setTooltipAnim(false)
    setTimeout(() => {
      localStorage.setItem(STORAGE_PREFIX + screenKey, 'true')
      setVisible(false)
      setAnimatingOut(false)
      onComplete?.()
    }, 400)
  }, [screenKey, onComplete])

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setTooltipAnim(false)
      setTimeout(() => {
        setCurrentStep(prev => prev + 1)
        setTimeout(() => setTooltipAnim(true), 50)
      }, 200)
    } else {
      finish()
    }
  }

  const handleSkip = () => {
    finish()
  }

  if (!visible || !steps || steps.length === 0) return null
  const step = steps[currentStep]
  if (!step) return null

  const getTargetBounds = (id) => {
    const el = document.getElementById(id)
    const parent = document.getElementById(containerId)
    
    if (!el || !parent) return { top: '0px', left: '0px', width: '0px', height: '0px', borderRadius: '12px' }
    
    const rect = el.getBoundingClientRect()
    const parentRect = parent.getBoundingClientRect()
    return {
      top: `${rect.top - parentRect.top - 4}px`, 
      left: `${rect.left - parentRect.left - 4}px`,
      width: `${rect.width + 8}px`,
      height: `${rect.height + 8}px`,
      borderRadius: '12px'
    }
  }

  const target = getTargetBounds(step.targetId)

  const getTooltipStyle = () => {
    const base = {
      left: '16px',
      right: '16px',
      margin: '0 auto',
      maxWidth: '340px',
      width: 'auto'
    }
    
    const topVal = parseFloat(target.top) || 0
    const parentHeight = document.getElementById(containerId)?.clientHeight || window.innerHeight

    if (topVal > parentHeight / 2) {
      base.bottom = `calc(100% - ${target.top} + 16px)`
    } else {
      base.top = `calc(${target.top} + ${target.height} + 16px)`
    }

    return base
  }

  const progress = ((currentStep + 1) / steps.length) * 100

  return (
    <div className="absolute inset-0 z-50 overflow-hidden" style={{ opacity: animatingOut ? 0 : 1, transition: 'opacity 0.4s ease' }}>
      <div 
        className="absolute border-2 border-blue-400 shadow-lg"
        style={{
          top: target.top,
          left: target.left,
          width: target.width,
          height: target.height,
          borderRadius: target.borderRadius || '12px',
          boxShadow: '0 0 0 4000px rgba(229, 231, 235, 0.85), 0 0 20px 4px rgba(0,0,0,0.05)',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          zIndex: 51,
        }}
      >
        <div className="absolute inset-0 border-2 border-blue-500 animate-ping" style={{ borderRadius: target.borderRadius || '12px', opacity: 0.3 }} />
      </div>

      <div 
        className="absolute z-52"
        style={{
          ...getTooltipStyle(),
          transform: tooltipAnim ? 'translateY(0) scale(1)' : 'translateY(8px) scale(0.95)',
          opacity: tooltipAnim ? 1 : 0,
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          zIndex: 52,
        }}
      >
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
          <div className="h-1 bg-gray-100">
            <div className="h-full bg-blue-500 transition-all duration-500 ease-out" style={{ width: `${progress}%` }} />
          </div>
          <div className="p-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-xl shrink-0">{step.icon}</div>
              <div>
                <h3 className="font-bold text-gray-900 text-sm leading-tight">{step.title}</h3>
                <span className="text-[10px] text-gray-400 font-medium">{currentStep + 1} of {steps.length}</span>
              </div>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed mb-4 pl-1">{step.description}</p>
            <div className="flex items-center justify-between">
              <button onClick={handleSkip} className="text-xs text-gray-400 font-medium hover:text-gray-600 transition-colors px-2 py-1">Skip tour</button>
              <button onClick={handleNext} className="bg-blue-600 text-white text-xs font-bold px-5 py-2.5 rounded-xl shadow-sm active:scale-95 transition-transform">
                {currentStep < steps.length - 1 ? 'Next →' : 'Got it! ✓'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OnboardingOverlay

export function resetOnboarding(screenKey) {
  localStorage.removeItem(STORAGE_PREFIX + screenKey)
}

export function resetAllOnboarding() {
  Object.keys(localStorage).filter(k => k.startsWith(STORAGE_PREFIX)).forEach(k => localStorage.removeItem(k))
}