const AddIconSvg = ({
  size = '20',
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
        d="M10.2093 5.90771V13.7043"
        stroke={color}
        strokeWidth="1.20907"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.3773 9.80613H6.04395"
        stroke={color}
        strokeWidth="1.20907"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default AddIconSvg
