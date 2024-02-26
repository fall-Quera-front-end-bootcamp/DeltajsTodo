/* eslint-disable @typescript-eslint/no-empty-interface */
import { type FunctionComponent } from 'react'

interface LeftArrowProps {}

const LeftArrow: FunctionComponent<LeftArrowProps> = () => {
  return (
    <>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.00999 11.98H19"
          stroke="#323232"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10.013 5.98804L4.002 12L10.013 18.012"
          stroke="#323232"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  )
}

export default LeftArrow
