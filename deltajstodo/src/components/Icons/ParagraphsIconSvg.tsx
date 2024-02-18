const LogoutIconSvg = ({
  width = '16',
  height = '17',
  color = '#BDC0C6',
  className
}: {
  width?: string
  height?: string
  color?: string
  className?: string
}): JSX.Element => {
  // Color the Color of svg Strokes
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.66553 3.16502H13.3366"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.66602 5.83298H13.3363"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.66602 8.50046H13.3363"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.66553 11.1684H13.3366"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.00146 13.8359H13.337"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default LogoutIconSvg
