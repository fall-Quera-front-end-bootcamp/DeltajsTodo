const Close = ({
  size = '32',
  color = '#323232',
  className,
  onClickFunction
}: {
  size?: string
  color?: string
  className?: string
  onClickFunction?: () => void
}): JSX.Element => {
  return (
    <svg
      onClick={onClickFunction}
      className={`cursor-pointer ${className}`}
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.6666 11.1666L21.3333 21.8333"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.3333 11.1666L10.6666 21.8333"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Close
