// Components Auth : >>  Home Redirect

import { useEffect } from 'react'

import { useAuth } from '@/features/auth/authProvider'
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom'

export default function HomeRedirect() {
  const { user, loading } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    if (!loading && user) {
      navigate('/dashboard')
    }
  }, [loading, navigate, user])

  if (user) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center text-slate-300">
        در حال انتقال به فضای کار...
      </div>
    )
  }
  return user ? (
    <Outlet />
  ) : (
    <div className="mx-auto flex min-h-[70vh] max-w-3xl flex-col items-center justify-center gap-6 text-center">
      <p className="rounded-full border border-amber-300/40 bg-amber-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-amber-200">
        رابط کاربری دایو تایم
      </p>
      <h1 className="text-4xl font-bold text-slate-50 sm:text-5xl">
        زمان‌سنج، برنامه‌ریز، پومودورو، چت و صوت در یک رابط.
      </h1>
      <p className="max-w-2xl text-base text-slate-400">
        این فرانت‌اند Next.js به بک‌اند دایو تایم متصل است: ورود OAuth، داشبورد،
        برنامه‌ریز، پومودورو، تایمرها، چت تیمی و اتاق صوتی WebRTC. برای شروع
        وارد شوید.
      </p>
      <div className="flex flex-col items-center gap-3 sm:flex-row">
        <Link
          to="/auth/login"
          className="text-sm text-amber-200 underline-offset-4 hover:underline"
          state={{ location }}
          replace
        >
          ورود با شماره همراه
        </Link>
      </div>
    </div>
  )
}
