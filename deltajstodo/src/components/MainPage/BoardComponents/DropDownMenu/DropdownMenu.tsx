import { AnimatePresence } from 'framer-motion'
import { useState } from 'react'

interface DropProps {
  buttonClassName?: string | undefined
  children: any
}

const DropdownMenu = ({
  buttonClassName,
  children
}: DropProps): JSX.Element => {
  const [open, setOpen] = useState(false)
  function openHandle (): void {
    setOpen(!open)
  }
  return (
    <div className="relative">
      <button onClick={openHandle} className={buttonClassName}>
        پروژه اول
      </button>
      <AnimatePresence>{open && <> {children}</>}</AnimatePresence>
    </div>
  )
}

export default DropdownMenu
