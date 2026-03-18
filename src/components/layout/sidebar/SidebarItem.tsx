'use client';

import type { NavLink } from "@/config/nav";
import { Link } from "react-router-dom";

type SidebarItemProps = {
  item: NavLink;
  active: boolean;
  collapsed: boolean;
  onNavigate: () => void;
};

export default function SidebarItem({ item, active, collapsed, onNavigate }: SidebarItemProps) {
  return (
    <Link
      to={item.href}
      onClick={onNavigate}
      className={`group flex items-center gap-3 rounded-xl border px-3 py-2 transition ${
        active
          ? "border-amber-400/60 bg-amber-500/10 text-amber-100 shadow-inner shadow-amber-400/10"
          : "border-[var(--border)] bg-[var(--surface-strong)]/70 text-slate-200 hover:border-slate-600"
      }`}
    >
      <item.icon
        className={`h-4 w-4 shrink-0 ${
          active ? "text-amber-300" : "text-amber-300/80 group-hover:text-amber-300"
        }`}
        aria-hidden
      />

      {!collapsed && (
        <div className="flex-1">
          <div className="flex items-center justify-between gap-2">
            <span className="text-sm font-semibold">{item.label}</span>
            {item.badge && (
              <span className="rounded-full bg-amber-500/20 px-2 text-[11px] font-semibold text-amber-100">
                {item.badge}
              </span>
            )}
          </div>
          {item.description && (
            <p className="mt-1 text-xs text-slate-400 group-hover:text-slate-300">{item.description}</p>
          )}
        </div>
      )}
    </Link>
  );
}
