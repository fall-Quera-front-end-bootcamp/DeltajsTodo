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
        d="M10.137 7.24146L7.46759 9.90923L5.86279 8.30923"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect
        x="1.99756"
        y="2.49756"
        width="12.005"
        height="12.005"
        rx="3.33333"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default LogoutIconSvg
