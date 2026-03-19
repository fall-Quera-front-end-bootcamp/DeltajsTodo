'use client'

import { useMemo, useCallback } from 'react'
import Card from '@/components/ui/Card2'
import Button from '@/components/ui/Button'
import { useAuth } from '@/features/auth/authProvider'
import { useLogout } from '@/features/auth/api'
import { useThemeMode } from '@/components/others/floatingBall'
import { Monitor, Moon, Sun } from 'lucide-react'
import { useModal } from '@/context/UseModalContext'
import Modal, { ModalButton } from '@/components/ui/Modal'

export default function SettingsPage() {
  const { user } = useAuth()
  const logout = useLogout()
  const modal = useModal()

  const { mode, setMode } = useThemeMode()

  const setLight = useCallback(() => setMode('light'), [setMode])
  const setDark = useCallback(() => setMode('dark'), [setMode])
  const setSystem = useCallback(() => setMode('system'), [setMode])

  const iconMap = {
    system: <Monitor size={16} />,
    dark: <Moon size={16} />,
    light: <Sun size={16} />
  }

  const modalButtons = useMemo<ModalButton[]>(
    () => [
      { label: 'نه', onClick: modal.close, variant: 'secondary' },
      {
        label: 'بله',
        onClick: () => logout.mutate(),
        variant: 'primary'
      }
    ],
    [modal.close, logout]
  )

  return (
    <div className="space-y-6 max-w-3xl">
      <div>
        <p className="text-xs uppercase tracking-[0.25em] text-amber-200">
          تنظیمات
        </p>

        <h1 className="text-3xl font-semibold text-slate-50">
          پروفایل و ترجیحات
        </h1>
      </div>

      <Card title="پروفایل">
        {user ? (
          <div className="space-y-2 text-sm text-slate-200 min-h-[40px]">
            <p>
              <span className="text-slate-400">نام:</span> {user.username}
            </p>
          </div>
        ) : (
          <p className="text-slate-500">کاربری بارگذاری نشده.</p>
        )}
      </Card>

      <Card title="ظاهر">
        <div className="flex items-center gap-3">
          <Button variant="secondary" onClick={setLight}>
            روشن
          </Button>

          <Button variant="secondary" onClick={setDark}>
            تاریک
          </Button>

          <Button variant="secondary" onClick={setSystem}>
            سیستم
          </Button>

          <span className="flex items-center gap-2 text-sm text-slate-400">
            حالت فعلی:
            {iconMap[mode]}
          </span>
        </div>
      </Card>

      <Card
        title="منطقه خطر"
        className="border-red-500"
        description="منطقه حساس"
      >
        <Button variant="danger" onClick={modal.open}>
          خروج
        </Button>
      </Card>

      <Modal
        isOpen={modal.isOpen}
        onClose={modal.close}
        title="خروج از حساب"
        description="آیا مطمئن هستید؟"
        buttons={modalButtons}
      />
    </div>
  )
}
