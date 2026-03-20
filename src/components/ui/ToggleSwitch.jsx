export default function ToggleSwitch({ checked, activeColor = 'bg-blue-600', size = 'sm' }) {
  if (size === 'lg') {
    return (
      <div className={`w-12 h-7 rounded-full transition-colors flex items-center px-1 ${checked ? activeColor : 'bg-gray-300'}`}>
        <div className={`w-5 h-5 bg-white rounded-full shadow transform transition-transform ${checked ? 'translate-x-5' : ''}`}></div>
      </div>
    )
  }
  return (
    <div className={`w-8 h-4 rounded-full transition-colors relative ${checked ? activeColor : 'bg-gray-300'}`}>
      <div className={`absolute top-0.5 left-0.5 w-3 h-3 bg-white rounded-full transition-transform ${checked ? 'translate-x-4' : ''}`}></div>
    </div>
  )
}
