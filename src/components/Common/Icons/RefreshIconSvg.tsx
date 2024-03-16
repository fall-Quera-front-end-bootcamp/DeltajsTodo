const RefreshIconSvg = ({
  size = '20',
  color = '#292D32',
  className
}: {
  size?: string
  color?: string
  className?: string
}): JSX.Element => {
  // The size Prop it's Width & Height
  // Color the Color of svg Strokes

  return (
    <>
      <svg
        className={className}
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.125 18.0585C15.7 17.1168 18.3333 13.8668 18.3333 10.0001C18.3333 5.40014 14.6333 1.66681 10 1.66681C4.44167 1.66681 1.66667 6.30014 1.66667 6.30014M1.66667 6.30014V2.50014M1.66667 6.30014H3.34167H5.36667"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M1.66667 10.0001C1.66667 14.6001 5.4 18.3335 10 18.3335"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="3 3"
        />
      </svg>
    </>
  )
}

export default RefreshIconSvg
