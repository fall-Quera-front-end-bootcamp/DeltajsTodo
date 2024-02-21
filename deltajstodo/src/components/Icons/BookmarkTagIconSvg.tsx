const BookmarkTagIconSvg = ({
  size = '20',
  color = '#C1C1C1',
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
        d="M7.63707 8.45432C7.75651 8.57375 7.75651 8.76739 7.63707 8.88683C7.51764 9.00626 7.324 9.00626 7.20456 8.88683C7.08513 8.76739 7.08513 8.57375 7.20456 8.45432C7.324 8.33488 7.51764 8.33488 7.63707 8.45432"
        stroke={color}
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.75833 5.24167L15.7667 11.25C16.41 11.8933 16.41 12.9367 15.7667 13.58L12.33 17.0167C11.6867 17.66 10.6433 17.66 10 17.0167L3.99167 11.0083C3.8375 10.8542 3.75 10.6442 3.75 10.4258V5.82417C3.75 5.36917 4.11917 5 4.57417 5H9.17667C9.395 5 9.60417 5.08667 9.75833 5.24167V5.24167Z"
        stroke={color}
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.25 8.33333L10.8283 2.98083C10.5158 2.6725 10.0958 2.5 9.6575 2.5H6.25"
        stroke={color}
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default BookmarkTagIconSvg
