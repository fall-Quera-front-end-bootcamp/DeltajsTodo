import { Navigate } from 'react-router-dom'
import { useAuth } from './authProvider'
import { useEffect, useState } from 'react'

export const AuthGuard = ({ children }: { children: JSX.Element }) => {
  const { authenticated, loading } = useAuth()

  const [funLoading, setFunLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  const jokes = [
    'یه لحظه صبر کن... دارم بررسی می‌کنم ببینم تو خوبی یا نه! 😎',
    'آروم باش... سیستم داره اطلاعاتت رو از کهکشان راه شیری دانلود می‌کنه 🌌😂',
    'یه ثانیه صبر... دارم می‌فهمم از کدوم طرفی وارد شدی 🤔😂',
    'مراقب باش... دارم میزان باحال بودنت رو اندازه می‌گیرم 😏📊',
    'در حال احراز هویت... ببینم راست میگی تو خودتی یا نه 😜',
    'داری خوب پیش میری... فقط دارم می‌سنجم چقدر گشنه‌ای 🍕😂'
  ]

  const [randomText] = useState(
    () => jokes[Math.floor(Math.random() * jokes.length)]
  )

  useEffect(() => {
    const start = Date.now()

    const interval = setInterval(() => {
      const elapsed = Date.now() - start
      const percent = Math.min((elapsed / 5000) * 100, 100)
      setProgress(percent)

      if (percent >= 100) {
        clearInterval(interval)
        setFunLoading(false)
      }
    }, 50)

    return () => clearInterval(interval)
  }, [])

  if (loading || funLoading)
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <div className="flex flex-col items-center gap-4 rounded-2xl border border-amber-500/30 bg-white/70 dark:bg-slate-900/60 backdrop-blur-md p-8 shadow-2xl w-[280px]">
          <div className="text-4xl animate-bounce">🤖</div>

          <p className="text-center text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            {randomText}
          </p>

          <div className="flex space-x-2 rtl:space-x-reverse">
            <span className="w-3 h-3 rounded-full bg-amber-500 animate-bounce [animation-delay:-0.3s]" />
            <span className="w-3 h-3 rounded-full bg-amber-500 animate-bounce [animation-delay:-0.15s]" />
            <span className="w-3 h-3 rounded-full bg-amber-500 animate-bounce" />
          </div>

          <div className="w-full h-1.5 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-amber-500 transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>

          <p className="text-[11px] text-slate-500 dark:text-slate-400 italic">
            دارم بررسی می‌کنم... اصلاً دخالت نمی‌کنم! 😅
          </p>
        </div>
      </div>
    )

  if (!authenticated) return <Navigate to="/auth/login" replace />

  return children
}
