import { useEffect, useMemo, useState } from 'react'
import { formatClock, type TimeMode } from '../utilities/time'

type UseClockOptions = {
  initialMode?: TimeMode
  tickMs?: number
}

export const useClock = ({
  initialMode = '24',
  tickMs = 1000
}: UseClockOptions = {}) => {
  const [mode, setMode] = useState<TimeMode>(initialMode)
  const [now, setNow] = useState<Date>(new Date())

  useEffect(() => {
    const id = window.setInterval(() => setNow(new Date()), tickMs)
    return () => window.clearInterval(id)
  }, [tickMs])

  const formatted = useMemo(() => formatClock(now, mode), [now, mode])

  const toggleMode = () => setMode((m) => (m === '24' ? '12' : '24'))

  return { now, mode, setMode, formatted, toggleMode }
}
