// TopBar
import Button from '@/components/ui/Button'
import { useAuth } from '@/features/auth/authProvider'
import { useClock } from '@/hooks/useClock'

type Props = {
  onToggleNav?: () => void
}

export default function Topbar({ onToggleNav }: Props) {
  const { theme, setTheme } = useAuth()
  const { formatted, mode, toggleMode } = useClock({ initialMode: '24' })

  return (
    <header className="flex items-center justify-between gap-3 border-b border-[var(--border)] bg-[var(--surface)]/80 px-4 py-3 backdrop-blur">
      <div className="flex items-center gap-3">
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--border)] text-xl text-slate-100 hover:border-slate-500 lg:hidden"
          aria-label="باز کردن منو"
          onClick={onToggleNav}
        >
          ☰
        </button>
        <h2 className="text-lg font-semibold text-slate-50">محیط کار</h2>
        <p className="text-xs text-slate-500 hidden sm:block">
          داشبورد، برنامه‌ریز، تایمر، چت و صوت.
        </p>
      </div>

      <div className="flex items-center gap-2">
        <div className="flex items-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--surface-strong)] px-3 py-1 font-mono text-sm text-amber-100">
          <span>{formatted}</span>
          <button
            type="button"
            className="rounded-md border border-amber-300/40 px-2 py-1 text-[11px] font-semibold text-amber-100 hover:border-amber-200"
            onClick={toggleMode}
          >
            {mode === '24' ? '24h' : '12h'}
          </button>
        </div>
        <Button
          variant="ghost"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="hidden sm:inline-flex"
        >
          حالت {theme === 'dark' ? 'روشن' : 'تاریک'}
        </Button>
      </div>
    </header>
  )
}
