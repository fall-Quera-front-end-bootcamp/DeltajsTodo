import type React from 'react'
import { useState } from 'react'

const Slider = ({
  children,
  className
}: {
  children: JSX.Element
  className: string
}): JSX.Element => {
  const [isDown, setIsDown] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>): void => {
    setIsDown(true)
    e.currentTarget.classList.add('active')
    setStartX(e.pageX - e.currentTarget.offsetLeft)
    setScrollLeft(e.currentTarget.scrollLeft)
  }

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>): void => {
    setIsDown(false)
    e.currentTarget.classList.remove('active')
  }

  const handleMouseUp = (e: React.MouseEvent<HTMLDivElement>): void => {
    setIsDown(false)
    e.currentTarget.classList.remove('active')
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>): void => {
    if (!isDown) return
    e.preventDefault()
    const x = e.pageX - e.currentTarget.offsetLeft
    const walk = (x - startX) * 3
    e.currentTarget.scrollLeft = scrollLeft - walk
  }

  return (
    <div
      className={className}
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      {children}
    </div>
  )
}

export default Slider
