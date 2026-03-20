import { useState, useEffect } from 'react'

export default function useTourReady(delay = 150, condition = true) {
  const [ready, setReady] = useState(false)
  useEffect(() => {
    if (!condition) {
      setReady(false)
      return
    }
    const timer = setTimeout(() => setReady(true), delay)
    return () => clearTimeout(timer)
  }, [condition, delay])
  return ready
}
