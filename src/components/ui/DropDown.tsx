import { useState, useRef, useEffect, ReactNode } from 'react'

interface DropdownItem<T = string> {
  label: ReactNode
  value: T
  icon?: ReactNode
}

interface DropdownProps<T = string> {
  items: DropdownItem<T>[]
  value?: T
  onChange?: (value: T) => void
  trigger: ReactNode
  className?: string
}

export function Dropdown<T = string>({
  items,
  value,
  onChange,
  trigger,
  className
}: DropdownProps<T>) {
  const [open, setOpen] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const wrapperRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLDivElement>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  /* ------------------- outside click ------------------- */
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!wrapperRef.current?.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  /* ------------------- ESC ------------------- */
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [])

  /* ------------------- CALCULATE POSITION ------------------- */

  const updatePosition = () => {
    const trigger = triggerRef.current
    const dropdown = dropdownRef.current
    if (!trigger || !dropdown) return

    const rect = trigger.getBoundingClientRect()
    const dropdownRect = dropdown.getBoundingClientRect()

    let x = rect.left
    let y = rect.bottom + 6 // gap

    // viewport checks
    const spaceRight = window.innerWidth - rect.left
    const spaceLeft = rect.right
    const spaceBelow = window.innerHeight - rect.bottom
    const spaceAbove = rect.top

    // horizontal flip
    if (spaceRight < dropdownRect.width && spaceLeft > dropdownRect.width) {
      x = rect.right - dropdownRect.width
    }

    // vertical flip
    if (spaceBelow < dropdownRect.height && spaceAbove > dropdownRect.height) {
      y = rect.top - dropdownRect.height - 6
    }

    setPosition({ x, y })
  }

  useEffect(() => {
    if (!open) return

    updatePosition()
    window.addEventListener('scroll', updatePosition)
    window.addEventListener('resize', updatePosition)

    return () => {
      window.removeEventListener('scroll', updatePosition)
      window.removeEventListener('resize', updatePosition)
    }
  }, [open])

  return (
    <div
      ref={wrapperRef}
      className={`relative inline-block ${className ?? ''}`}
    >
      {/* Trigger */}
      <div
        ref={triggerRef}
        className="cursor-pointer"
        onClick={() => setOpen((o) => !o)}
      >
        {trigger}
      </div>

      {/* Dropdown */}
      {open && (
        <div
          ref={dropdownRef}
          style={{
            position: 'fixed',
            left: position.x,
            top: position.y,
            zIndex: 9999
          }}
          className="
            min-w-[180px]
            rounded-lg border border-zinc-200 dark:border-zinc-700
            bg-white text-black dark:text-white dark:bg-zinc-900
            shadow-xl backdrop-blur-md
            p-1 animate-in fade-in zoom-in-95
          "
        >
          {items.map((item, i) => {
            const active = item.value === value

            return (
              <button
                key={i}
                onClick={() => {
                  onChange?.(item.value)
                  setOpen(false)
                }}
                className={`
                  flex items-center gap-2 w-full
                  px-3 py-2 rounded-md text-sm
                  transition-colors
                  ${
                    active
                      ? 'bg-zinc-200 dark:bg-zinc-700'
                      : 'hover:bg-zinc-100 dark:hover:bg-zinc-800'
                  }
                `}
              >
                {item.icon}
                {item.label}
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}
