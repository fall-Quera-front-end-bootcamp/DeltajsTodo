// TopBar
import Button from '@/components/ui/Button'
import { useClock } from '@/hooks/useClock'
import { useThemeMode } from '../others/floatingBall'
import {
  DoorOpen,
  DropletIcon,
  FileDown,
  LucideAArrowDown,
  LucideArrowDown,
  LucideCornerDownRight,
  Monitor,
  Moon,
  MoveDown,
  Sun
} from 'lucide-react'
import { Dropdown } from '../ui/DropDown'

type Props = {
  onToggleNav?: () => void
}

export default function Topbar({ onToggleNav }: Props) {
  const { mode, setMode } = useThemeMode()
  const { formatted, shape, toggleMode } = useClock({ initialShape: '24' })

  return (
    <header className="flex items-center justify-between gap-3 border-b border-[var(--border-light)] bg-[var(--surface-light)]/80 dark:border-[var(--border-dark)] dark:bg-[var(--surface-dark)]/80 px-2 py-2 sm:px-4 sm:py-3 backdrop-blur">
      <div className="flex items-center gap-3">
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--border)] text-xl text-slate-100 hover:border-slate-500 lg:hidden"
          aria-label="باز کردن منو"
          onClick={onToggleNav}
        >
          ☰
        </button>
        <h2 className="text-lg font-semibold dark:text-slate-50 text-slate-900">
          محیط کار
        </h2>
        <p className="text-xs dark:text-slate-500 text-slate-800 hidden sm:block">
          داشبورد، برنامه‌ریز، تایمر، چت و صوت.
        </p>
      </div>

      <div className="flex items-center gap-2">
        <div className="flex items-center gap-2 rounded-lg border dark:border-[var(--border-dark)] border-[var(--border)]  dark:bg-[var(--surface-strong-dark)] bg-[var(--surface-strong)] px-3 py-1 font-mono text-sm text-amber-100">
          <span>{formatted}</span>
          <button
            type="button"
            className="rounded-md border border-amber-300/40 px-2 py-1 text-[11px] font-semibold text-amber-100 hover:border-amber-200"
            onClick={toggleMode}
          >
            {shape === '24' ? '24h' : '12h'}
          </button>
        </div>

        <Dropdown
          value={mode}
          onChange={setMode}
          trigger={
            <Button
              variant="ghost"
              className="sm:flex hidden flex-row justify-between"
            >
              <span className="">حالت صفحه</span>
              <span className="">
                {mode === 'system' ? (
                  <Monitor size={16} />
                ) : mode === 'dark' ? (
                  <Moon size={16} />
                ) : (
                  <Sun size={16} />
                )}
              </span>
            </Button>
          }
          items={[
            { label: 'روز', value: 'light', icon: <Sun size={16} /> },
            { label: 'شب', value: 'dark', icon: <Moon size={16} /> },
            { label: 'سیستم', value: 'system', icon: <Monitor size={16} /> }
          ]}
        />
      </div>
    </header>
  )
}
