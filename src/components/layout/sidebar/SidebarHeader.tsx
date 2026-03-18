'use client';

type SidebarHeaderProps = {
  collapsed: boolean;
  onToggle: () => void;
};

export default function SidebarHeader({ collapsed, onToggle }: SidebarHeaderProps) {
  return (
    <div className={`mb-4 flex items-center justify-between ${collapsed ? "px-0" : "px-2"} text-right`}>
      <div className="flex items-center gap-2">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-400/15 text-amber-200">
          DT
        </div>
        {!collapsed && (
          <div>
            <p className="text-sm font-semibold text-amber-200">دایو تایم</p>
            <p className="text-xs text-slate-500">مجموعه بهره‌وری</p>
          </div>
        )}
      </div>
      <button
        type="button"
        aria-label={collapsed ? "باز کردن سایدبار" : "بستن سایدبار"}
        onClick={onToggle}
        className="rounded-lg border border-[var(--border)] px-2 py-1 text-xs text-slate-600 hover:border-slate-500 bg-[var(--surface-strong)]"
      >
        {collapsed ? "⇤" : "⇥"}
      </button>
    </div>
  );
}
