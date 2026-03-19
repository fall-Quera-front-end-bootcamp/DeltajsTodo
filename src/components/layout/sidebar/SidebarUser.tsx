'use client'

import { User, LogOut, LogIn } from 'lucide-react'
import { useAuth } from '@/features/auth/authProvider'
import { useNavigate } from 'react-router-dom'
import { useModal } from '@/context/UseModalContext'

type Props = {
  collapsed: boolean
}

export default function wSidebarUser({ collapsed }: Props) {
  const modal = useModal()
  const { user } = useAuth()
  const navigate = useNavigate()

  if (!user) {
    return (
      <button
        type="button"
        onClick={() => navigate('/auth/login')}
        className="flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--surface-strong)] px-3 py-2 text-sm text-slate-100 hover:border-amber-300"
      >
        <LogIn className="h-4 w-4 text-amber-200" />
        {!collapsed && <span>ورود</span>}
      </button>
    )
  }

  return (
    <div className="flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--surface-strong)] px-3 py-2 text-sm text-slate-100">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-400/20 text-amber-100">
        {user.username?.slice(0, 1)?.toUpperCase() ?? (
          <User className="h-4 w-4" />
        )}
      </div>
      {!collapsed && (
        <>
          <div className="flex-1">
            <p className="text-sm font-semibold">{user.username}</p>
            {/* <p className="text-[11px] text-slate-400">
            {user.email ?? user.provider}
          </p> */}
          </div>
          <button
            type="button"
            onClick={() => modal.open()}
            aria-label="خروج"
            className="rounded-lg border border-amber-300/60 bg-amber-400/10 p-2 text-amber-100 hover:border-amber-200"
          >
            <LogOut className="h-4 w-4" />
          </button>
        </>
      )}{' '}
    </div>
  )
}
