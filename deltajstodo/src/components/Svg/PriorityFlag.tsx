const PriorityFlag = ({
  size = '20',
  color = 'black',
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
        d="M4.16667 17.5V3.27502"
        stroke={color}
        strokeWidth="1.62499"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.8337 11.6833V3.33337"
        stroke={color}
        strokeWidth="1.62499"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.1665 11.6666C4.1665 11.6666 4.89567 11.0608 7.08316 11.0608C9.27065 11.0608 10.729 12.5 12.9165 12.5C15.104 12.5 15.8331 11.6858 15.8331 11.6858"
        stroke={color}
        strokeWidth="1.62499"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.1665 3.27679C4.1665 3.27679 4.89567 2.50012 7.08316 2.50012C9.27065 2.50012 10.729 3.93928 12.9165 3.93928C15.104 3.93928 15.8331 3.33345 15.8331 3.33345"
        stroke={color}
        strokeWidth="1.62499"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default PriorityFlag
