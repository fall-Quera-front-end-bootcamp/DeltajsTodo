import React, { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

export interface ModalButton {
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
  children,
  className = ''
}) => {
  const modalRef = useRef<HTMLDivElement>(null)

  /* ESC key close */
  useEffect(() => {
    if (!isOpen) return

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }

    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [isOpen, onClose])

  /* lock body scroll */
  useEffect(() => {
    if (!isOpen) return

    const original = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = original
    }
  }, [isOpen])

  /* focus modal on open */
  useEffect(() => {
    if (isOpen) modalRef.current?.focus()
  }, [isOpen])

  if (!isOpen) return null

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose()
  }

  const modal = (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40 backdrop-blur-sm"
      onMouseDown={handleOverlayClick}
      aria-modal="true"
      role="dialog"
    >
      <div
        ref={modalRef}
        tabIndex={-1}
        className={`relative w-full max-w-md mx-4 rounded-lg bg-amber-500/80 dark:bg-neutral-900 p-6 shadow-lg outline-none ${className}`}
      >
        {/* close button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute left-3 top-3 text-gray-500 hover:text-gray-700 dark:hover:text-white transition"
        >
          ✕
        </button>

        {/* title */}
        {title && (
          <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
            {title}
          </h2>
        )}

        {/* description */}
        {description && (
          <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
        )}

        {children}

        {/* buttons */}
        {buttons.length > 0 && (
          <div className="mt-4 flex justify-end gap-3">
            {buttons.map((btn) => (
              <button
                key={btn.label}
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
        )}
      </div>
    </div>
  )

  return createPortal(modal, document.body)
}

export default Modal
