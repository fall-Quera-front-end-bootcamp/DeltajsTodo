const DisabledIconSvg = ({
  size = '32',
  color = '#BDBDBD',
  className,
  onClick
}: {
  size?: string
  color?: string
  className?: string
  onClick?: () => void
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
        d="M10.6667 10.6665L21.3333 21.3332"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.3333 10.6665L10.6667 21.3332"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default DisabledIconSvg
