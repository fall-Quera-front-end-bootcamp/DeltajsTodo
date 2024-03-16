/* eslint-disable tailwindcss/classnames-order */
import { type FunctionComponent } from 'react'

interface TypographyProps {
  color: string | '#1E1E1E'
  h: string
  w: string
  size: string
  props?: any
}

const Typography: FunctionComponent<TypographyProps> = ({
  size,
  w,
  h,
  color,
  ...props
}) => {
  return (
    <p
      className={`font-yekan 
    h-[${h}] w-[${w}] 
    text-right 
    text-[${size}] 
    font-medium 
    leading-[22.5px]
     text-[${color}] 
    
     `}
    ></p>
  )
}

export default Typography
