'use client'

import { useEffect, useState, type ReactNode } from 'react'
import Sidebar from './sidebar'
import Topbar from './Topbar'
import type { NavLink } from '@/config/nav'
import { useLocation } from 'react-router-dom'
import Modal from '../ui/Modal'
import { useModal } from '@/context/UseModalContext'
import { useLogout } from '@/features/auth/api'

type Props = {
  navPrimary: NavLink[]
  navSecondary?: NavLink[]
  children: ReactNode
}

export default function AppShell({
  navPrimary,
  navSecondary,
  children
}: Props) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [desktopCollapsed, setDesktopCollapsed] = useState(true)
  const pathname = useLocation().pathname || '/'
  const modal = useModal()

  useEffect(() => {
    const handler = () => {
      if (window.innerWidth >= 1024) setMobileOpen(false)
    }
    window.addEventListener('resize', handler)
    return () => window.removeEventListener('resize', handler)
  }, [])

  return (
    <div className="flex min-h-screen bg-[var(--bg)] text-slate-100" dir="rtl">
      <Sidebar
        primary={navPrimary}
        secondary={navSecondary}
        mobileOpen={mobileOpen}
        onCloseMobile={() => setMobileOpen(false)}
        desktopCollapsed={desktopCollapsed}
        onToggleDesktop={() => setDesktopCollapsed((p) => !p)}
      />

      <div className="flex min-h-screen flex-1 flex-col">
        <Topbar onToggleNav={() => setMobileOpen(true)} />

        <nav className="flex gap-2 overflow-x-auto border-b border-[var(--border)] bg-[var(--surface)] px-3 py-3 lg:hidden">
          {navPrimary.map((item) => {
            const active =
              pathname === item.href ||
              (item.href !== '/' && pathname.startsWith(`${item.href}/`))
            return (
              <a
                key={item.href}
                href={item.href}
                className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold transition ${
                  active
                    ? 'bg-amber-500/15 text-amber-100'
                    : 'bg-[var(--surface-strong)] text-slate-200'
                }`}
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </a>
            )
          })}
        </nav>

        <main className="flex-1 overflow-y-auto bg-[var(--bg-accent)] px-4 py-6 sm:px-6 lg:px-8">
          <div className="mx-auto w-full max-w-6xl lg:max-w-7xl 2xl:max-w-[110rem] space-y-4">
            {children}
          </div>
        </main>
      </div>
      <Modal
        isOpen={modal.isOpen}
        onClose={modal.close}
        title="خروج از حساب کاربری"
        description="آیا مطمئن به خروج از حساب کاربری خود هستید؟!"
        buttons={[
          { label: 'نه', onClick: modal.close, variant: 'secondary' },
          {
            label: 'بله',
            onClick: useLogout().mutate,
            variant: 'primary'
          }
        ]}
      />
    </div>
  )
}
