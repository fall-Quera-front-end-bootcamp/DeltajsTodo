import React, { useEffect, useRef } from 'react'

interface ModalButton {
  label: string
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'danger'
}

interface BaseModalProps {
  isOpen: boolean
  title?: string
  description?: string
  onClose: () => void
  buttons?: ModalButton[]
  className?: string
}

type ModalProps = React.PropsWithChildren<BaseModalProps>

const Modal: React.FC<ModalProps> = ({
  isOpen,
  title,
  description,
  onClose,
  buttons = [],
  children, // optional custom content
}) => {
  const overlayRef = useRef<HTMLDivElement | null>(null)

  // Listen for outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (overlayRef.current && e.target === overlayRef.current) {
        onClose()
      }
    }
    window.addEventListener('mousedown', handleClickOutside)
    return () => window.removeEventListener('mousedown', handleClickOutside)
  }, [onClose])

  if (!isOpen) return null

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40 backdrop-blur-sm transition-opacity"
    >
      <div className="relative bg-amber-500/80 dark:bg-neutral-900 rounded-lg shadow-lg p-6 w-full max-w-md mx-4 animate-fadeIn">
        {/* Close button (top-left) */}
        <button
          onClick={onClose}
          className="absolute left-3 top-3 text-gray-500 hover:text-gray-700 dark:hover:text-white transition"
        >
          ✕
        </button>

        {/* Title & description */}
        {title && (
          <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
            {title}
          </h2>
        )}
        {description && (
          <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
        )}

        {/* Optional custom children */}
        {children}

        {/* Buttons */}
        <div className="mt-4 flex justify-end gap-3">
          {buttons.map((btn, idx) => (
            <button
              key={idx}
              onClick={btn.onClick}
              className={
                btn.variant === 'danger'
                  ? 'px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700'
                  : btn.variant === 'secondary'
                    ? 'px-4 py-2 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-200 rounded hover:bg-gray-300 dark:hover:bg-gray-700'
                    : 'px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700'
              }
            >
              {btn.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Modal
