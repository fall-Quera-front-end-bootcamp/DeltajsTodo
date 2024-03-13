import { type Dispatch, type SetStateAction } from 'react'

const ArrowButton = ({
  columnMore,
  setColumnMore
}: {
  columnMore?: boolean
  setColumnMore?: () => void
}): JSX.Element => {
  return (
    <svg
      className={`size-5 cursor-pointer ${columnMore ? 'rotate-[180deg]' : 'rotate-[0deg]'}`}
      onClick={setColumnMore}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.5 10.5V10.5C2.5 6.3575 5.8575 3 10 3V3C14.1425 3 17.5 6.3575 17.5 10.5V10.5C17.5 14.6425 14.1425 18 10 18V18C5.8575 18 2.5 14.6425 2.5 10.5Z"
        stroke="#323232"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.5 9.66699L10 12.167L7.5 9.66699"
        stroke="#323232"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default ArrowButton
