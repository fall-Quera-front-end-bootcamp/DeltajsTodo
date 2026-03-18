import type { PropsWithChildren, ReactNode } from "react";

type CardProps = PropsWithChildren<{
  title?: string;
  description?: string;
  action?: ReactNode;
}>;

export default function Card({ title, description, action, children }: CardProps) {
  return (
    <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)]/90 p-4 shadow-lg shadow-black/20">
      {(title || description || action) && (
        <div className="mb-3 flex items-start justify-between gap-2">
          <div>
            {title && <h3 className="text-base font-semibold text-slate-50">{title}</h3>}
            {description && <p className="text-xs text-slate-400">{description}</p>}
          </div>
          {action}
        </div>
      )}
      <div className="space-y-2 text-sm text-slate-100">{children}</div>
    </div>
  );
}
