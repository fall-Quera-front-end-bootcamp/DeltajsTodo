import { type ReactNode } from 'react'
import clsx from 'clsx'

interface CardProps {
  title?: string
  description?: string
  children: ReactNode
  className?: string
}

export default function Card2({
  title,
  description,
  children,
  className
}: CardProps) {
  return (
    <div
      className={clsx(
        'rounded-xl border border-[var(--border)]',
        'bg-[var(--surface)] sm:p-5 p-2',
        'shadow-sm backdrop-blur',
        className
      )}
    >
      {(title || description) && (
        <div className="sm:mb-4 mb-2 space-y-1">
          {title && (
            <h3 className="text-sm font-semibold text-slate-50">{title}</h3>
          )}
          {description && (
            <p className="text-xs text-slate-400">{description}</p>
          )}
        </div>
      )}

      <div>{children}</div>
    </div>
  )
}
