import type { ButtonHTMLAttributes, PropsWithChildren } from 'react'

const cn = (...classes: Array<string | false | null | undefined>) =>
  classes.filter(Boolean).join(' ')

type ButtonProps = PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: 'primary' | 'secondary' | 'ghost'
  }
>

const base =
  'inline-flex items-center justify-center rounded-xl border px-4 py-2 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2'

const variants: Record<NonNullable<ButtonProps['variant']>, string> = {
  primary:
    'border-amber-400/50 bg-amber-500/90 text-slate-900 shadow-sm hover:bg-amber-400 focus-visible:outline-amber-400',
  secondary:
    'border-slate-600 bg-slate-800/60 text-slate-50 hover:border-slate-500 hover:bg-slate-800 focus-visible:outline-slate-500',
  ghost:
    'dark:border-transparent dark:bg-transparent border-black dark:text-slate-300 text-slate-600 dark:hover:border-slate-700 hover:border-slate-200 dark:hover:bg-slate-800/50 hover:bg-slate-400/50  focus-visible:outline-slate-500'
}

export default function Button({
  children,
  className,
  variant = 'primary',
  ...props
}: ButtonProps) {
  return (
    <button
      type="button"
      {...props}
      className={cn(
        base,
        variants[variant],
        className,
        props.disabled && 'opacity-60'
      )}
    >
      {children}
    </button>
  )
}
