import { useEffect, useMemo, useState } from 'react'
import { formatClock, type TimeShape } from '../utilities/time'

type UseClockOptions = {
  initialShape?: TimeShape
  tickMs?: number
}

export const useClock = ({
  initialShape = '24',
  tickMs = 1000
}: UseClockOptions = {}) => {
  const [shape, setShape] = useState<TimeShape>(initialShape)
  const [now, setNow] = useState<Date>(new Date())

  useEffect(() => {
    const id = window.setInterval(() => setNow(new Date()), tickMs)
    return () => window.clearInterval(id)
  }, [tickMs])

  const formatted = useMemo(() => formatClock(now, shape), [now, shape])

  const toggleMode = () => setShape((m) => (m === '24' ? '12' : '24'))

  return { now, shape, setShape, formatted, toggleMode }
}
