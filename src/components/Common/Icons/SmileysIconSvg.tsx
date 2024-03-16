const SmileysIconSvg = ({
  size = '24',
  color = '#C9CBDA',
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
        d="M21 12C21 7.038 16.962 3 12 3C7.037 3 3 7.037 3 12"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 12C3 16.963 7.037 21 12 21C16.963 21 21 16.962 21 12"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.3281 9.5C15.1901 9.5 15.0781 9.612 15.0791 9.75C15.0791 9.888 15.1911 10 15.3291 10C15.4671 10 15.5791 9.888 15.5791 9.75C15.5791 9.612 15.4671 9.5 15.3281 9.5"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.63914 9.5C8.50114 9.5 8.38914 9.612 8.39014 9.75C8.39014 9.888 8.50214 10 8.64014 10C8.77814 10 8.89014 9.888 8.89014 9.75C8.89014 9.612 8.77814 9.5 8.63914 9.5"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 17C13.667 17 15 15.667 15 14H9C9 15.667 10.333 17 12 17V17Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default SmileysIconSvg
