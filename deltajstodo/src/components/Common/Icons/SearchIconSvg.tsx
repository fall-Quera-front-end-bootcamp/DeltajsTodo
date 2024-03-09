const SearchIconSvg = ({
  size = '24',
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
      <circle
        cx="11.0586"
        cy="11.0586"
        r="7.06194"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.0033 20.0033L16.0516 16.0516"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default SearchIconSvg
