const CalendarStartIconSvg = ({
  size = '32',
  color = '#323232',
  className
}: {
  size?: string
  color?: string
  className?: string
}): JSX.Element => {
  // The size Prop it's Width & Height
  // Color the Color of svg Strokes
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
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
        d="M10.6667 2.66699V8.00032"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 12.0007H28"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M25.3333 5.33398H6.66667C5.19333 5.33398 4 6.52732 4 8.00065V25.334C4 26.8073 5.19333 28.0007 6.66667 28.0007H25.3333C26.8067 28.0007 28 26.8073 28 25.334V8.00065C28 6.52732 26.8067 5.33398 25.3333 5.33398Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M23.6653 15.8333C23.4813 15.8333 23.332 15.9827 23.3333 16.1667C23.3333 16.3507 23.4827 16.5 23.6667 16.5C23.8507 16.5 24 16.3507 24 16.1667C24 15.9827 23.8507 15.8333 23.6653 15.8333"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default CalendarStartIconSvg
