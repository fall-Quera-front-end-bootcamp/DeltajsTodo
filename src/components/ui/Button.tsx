import type { ButtonHTMLAttributes, PropsWithChildren, ReactNode } from 'react'

const cn = (...classes: Array<string | false | null | undefined>) =>
  classes.filter(Boolean).join(' ')

type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'danger'
  | 'success'
  | 'warning'
  | 'ghost'
  | 'outline'

type ButtonSize = 'sm' | 'md' | 'lg' | 'icon'

type ButtonProps = PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: ButtonVariant
    size?: ButtonSize
    startIcon?: ReactNode
    endIcon?: ReactNode
    loading?: boolean
    fullWidth?: boolean
  }
>

const base =
  'inline-flex items-center justify-center gap-2 rounded-xl border font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-60 disabled:pointer-events-none'

const variants: Record<ButtonVariant, string> = {
  primary:
    'border-amber-400/50 bg-amber-500/90 text-slate-900 shadow-sm hover:bg-amber-400 focus-visible:outline-amber-400',

  secondary:
    'border-slate-600 bg-slate-800/60 text-slate-50 hover:border-slate-500 hover:bg-slate-800 focus-visible:outline-slate-500',

  outline:
    'border-slate-400 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 focus-visible:outline-slate-400',

  ghost:
    'border-transparent bg-transparent text-slate-600 dark:text-slate-300 hover:bg-slate-200/50 dark:hover:bg-slate-800/50 focus-visible:outline-slate-500',

  danger:
    'border-red-500/40 bg-red-600/80 text-white hover:bg-red-500 focus-visible:outline-red-500',

  success:
    'border-emerald-500/40 bg-emerald-600/80 text-white hover:bg-emerald-500 focus-visible:outline-emerald-500',

  warning:
    'border-yellow-500/40 bg-yellow-500/80 text-slate-900 hover:bg-yellow-400 focus-visible:outline-yellow-500'
}

const sizes: Record<ButtonSize, string> = {
  sm: 'h-8 px-3 text-xs',
  md: 'h-10 px-4 text-sm',
  lg: 'h-12 px-6 text-base',
  icon: 'h-10 w-10 p-0'
}

function Spinner() {
  return (
    <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
  )
}

export default function Button({
  children,
  className,
  variant = 'primary',
  size = 'md',
  startIcon,
  endIcon,
  loading,
  fullWidth,
  disabled,
  ...props
}: ButtonProps) {
  const isDisabled = disabled || loading

  return (
    <button
      {...props}
      disabled={isDisabled}
      className={cn(
        base,
        variants[variant],
        sizes[size],
        fullWidth && 'w-full',
        className
      )}
    >
      {loading && <Spinner />}

      {!loading && startIcon && (
        <span className="flex items-center">{startIcon}</span>
      )}

      {size !== 'icon' && children}

      {!loading && endIcon && (
        <span className="flex items-center">{endIcon}</span>
      )}
    </button>
  )
}
