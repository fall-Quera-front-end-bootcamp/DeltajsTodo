const ProfileAddUserIconSvg = ({
  size = '20',
  color = '#C1C1C1',
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
      onClick={onClick}
      className={className}
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.5 4.3335C13.9167 5.75016 13.9167 8.00016 12.5 9.3335C11.0833 10.6668 8.83333 10.7502 7.49999 9.3335C6.16666 7.91683 6.08333 5.66683 7.49999 4.3335C8.91666 3.00016 11.0833 3.00016 12.5 4.3335"
        stroke={color}
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.33331 16.6665C3.33331 14.5832 4.99998 12.9165 7.08331 12.9165H9.24998"
        stroke={color}
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.5834 17.0832V12.9165"
        stroke={color}
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.5 15.0002H16.6667"
        stroke={color}
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default ProfileAddUserIconSvg
