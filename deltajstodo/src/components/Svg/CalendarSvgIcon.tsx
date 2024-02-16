const CalendarSvgIcon = ({
  size = '32',
  color = '#323232'
}: {
  size?: string
  color?: string
}): JSX.Element => {
  // The size Prop it's Width & Height
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.3307 2.66699V8.00032"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.6657 2.66699V8.00032"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.99902 12.0007H27.999"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M25.3324 5.33398H6.66569C5.19236 5.33398 3.99902 6.52732 3.99902 8.00065V25.334C3.99902 26.8073 5.19236 28.0007 6.66569 28.0007H25.3324C26.8057 28.0007 27.999 26.8073 27.999 25.334V8.00065C27.999 6.52732 26.8057 5.33398 25.3324 5.33398Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.66534 22.8333C8.48134 22.8333 8.332 22.9827 8.33334 23.1667C8.33334 23.3507 8.48267 23.5 8.66667 23.5C8.85067 23.5 9 23.3507 9 23.1667C9 22.9827 8.85067 22.8333 8.66534 22.8333"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default CalendarSvgIcon
