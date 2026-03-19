'use client'

import { Link } from 'react-router-dom'

type SidebarHeaderProps = {
  collapsed: boolean
}

export default function SidebarHeader({ collapsed }: SidebarHeaderProps) {
  return (
    <div
      className={`mb-4 flex items-center justify-between ${collapsed ? 'px-0' : 'px-2'} text-right`}
    >
      <Link to={'/home'} className="flex items-center gap-2">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-400/15 text-amber-200">
          DT
        </div>
        {!collapsed && (
          <div>
            <p className="text-sm font-semibold text-amber-200">دایو تایم</p>
            <p className="text-xs text-slate-500">مجموعه بهره‌وری</p>
          </div>
        )}
      </Link>
    </div>
  )
}
