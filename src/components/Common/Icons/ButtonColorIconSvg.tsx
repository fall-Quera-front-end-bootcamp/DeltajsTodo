/* eslint-disable tailwindcss/enforces-shorthand */
/* eslint-disable @typescript-eslint/no-confusing-void-expression */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable multiline-ternary */
/* eslint-disable @typescript-eslint/no-empty-interface */
import { color } from 'framer-motion'
import { useState, type FunctionComponent, useRef } from 'react'

interface ButtonColorIconSvgProps {
  id?: string
  name?: string
  color?: string
  value?: string
  checked?: boolean
  onChangeHandler?: (e: any) => void
}

const ButtonColorIconSvg: FunctionComponent<ButtonColorIconSvgProps> = ({
  id,
  name,
  color,
  value,
  checked,
  onChangeHandler
}) => {
  const inputRef: any = useRef()
  const [hovered, setHover] = useState<boolean>(false)
  const [selected, setSelected] = useState<boolean>(true)
  const [selected2, setSelected2] = useState<boolean>(false)

  return (
    <>
      <div className="relative flex size-[20px] items-center justify-center ">
        <input
          ref={inputRef}
          type="radio"
          id={id}
          name={name}
          checked={checked}
          value={value}
          onChange={(e) => onChangeHandler(e)}
          className="peer  z-10 size-full cursor-pointer opacity-0"
        />
        <div className="absolute">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="20" height="20" rx="8" fill={color} />
          </svg>
        </div>
        <div className="absolute hidden peer-hover:block">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="24" height="24" rx="10" fill={color} />
          </svg>
        </div>
        <div className="absolute hidden peer-checked:block">
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="28" height="28" rx="12" fill={color} />
            <rect x="8" y="8" width="12" height="12" rx="6" fill="white" />
          </svg>
        </div>
      </div>
    </>
  )
}

export default ButtonColorIconSvg
