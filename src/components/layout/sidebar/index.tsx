import type { NavLink } from '@/config/nav'
import SidebarItem from './SidebarItem'
import SidebarHeader from './SidebarHeader'
import SidebarUser from './SidebarUser'
import { useLocation } from 'react-router-dom'

type Props = {
  primary: NavLink[]
  secondary?: NavLink[]
  mobileOpen: boolean
  onCloseMobile: () => void
  desktopCollapsed: boolean
  onToggleDesktop: () => void
}

const isActive = (href: string, pathname: string) =>
  pathname === href || (href !== '/' && pathname.startsWith(`/${href}`))

export default function Sidebar({
  primary,
  secondary = [],
  mobileOpen,
  onCloseMobile,
  desktopCollapsed,
  onToggleDesktop
}: Props) {
  const pathname = useLocation().pathname || '/'

  const renderSection = (items: NavLink[]) =>
    items.map((item) => (
      <SidebarItem
        key={item.href}
        item={item}
        active={isActive(item.href, pathname)}
        collapsed={desktopCollapsed}
        onNavigate={onCloseMobile}
      />
    ))
  const renderSectionMobile = (items: NavLink[]) =>
    items.map((item) => (
      <SidebarItem
        key={item.href}
        item={item}
        active={isActive(item.href, pathname)}
        onNavigate={onCloseMobile}
      />
    ))

  return (
    <>
      <aside
        className={`group/sidebar relative hidden lg:flex lg:sticky lg:top-0 lg:h-screen ${
          desktopCollapsed ? 'w-14 min-w-[50px] px-2' : 'w-64 px-3'
        } shrink-0 flex-col gap-3 border-r border-[var(--border)] bg-[var(--surface)] py-6 transition-all duration-200`}
      >
        <button
          type="button"
          aria-label={desktopCollapsed ? 'باز کردن سایدبار' : 'بستن سایدبار'}
          onClick={onToggleDesktop}
          className="absolute left-0 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 transform rounded-full border border-amber-300/70 bg-amber-400/20 px-2 py-6 text-sm font-semibold text-amber-100 shadow-lg backdrop-blur opacity-0 transition lg:group-hover/sidebar:inline-flex lg:group-hover/sidebar:opacity-100 hover:border-amber-200 hover:bg-amber-300/30"
        >
          {desktopCollapsed ? '›' : '‹'}
        </button>

        <SidebarHeader collapsed={desktopCollapsed} />

        <nav className="space-y-2">{renderSection(primary)}</nav>

        {secondary.length > 0 && (
          <div className="mt-4 space-y-2 border-t border-[var(--border)] pt-3">
            {renderSection(secondary)}
          </div>
        )}
        <div className="mt-auto pt-4">
          <SidebarUser collapsed={desktopCollapsed} />
        </div>
      </aside>

      <div
        className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity lg:hidden ${
          mobileOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
        onClick={onCloseMobile}
      />
      <aside
        className={`fixed inset-y-0 right-0 z-50 w-72 max-w-[85vw] bg-[var(--surface)] px-4 py-6 shadow-2xl transition-transform duration-200 lg:hidden ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="mb-4 flex items-center justify-between">
          <div className="text-right">
            <p className="text-sm font-semibold text-amber-200">دایو تایم</p>
            <p className="text-xs text-slate-500">ناوبری</p>
          </div>
          <button
            type="button"
            aria-label="بستن منو"
            onClick={onCloseMobile}
            className="rounded-lg border border-[var(--border)] px-2 py-1 text-xs text-slate-400 hover:border-slate-500"
          >
            ✕
          </button>
        </div>
        <nav className="space-y-2">{renderSectionMobile(primary)}</nav>
        {secondary.length > 0 && (
          <div className="mt-4 space-y-2 border-t border-[var(--border)] pt-3">
            {renderSectionMobile(secondary)}
          </div>
        )}
        <div className="mt-6">
          <SidebarUser collapsed={false} />
        </div>
      </aside>
    </>
  )
}
