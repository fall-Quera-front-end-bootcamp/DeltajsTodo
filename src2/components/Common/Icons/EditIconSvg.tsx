const EditIconSvg = ({
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
        d="M17.5816 9.19398V15.6424C17.5816 16.533 16.8602 17.2544 15.9695 17.2544H4.68485C3.79417 17.2544 3.07275 16.533 3.07275 15.6424V4.3577C3.07275 3.46702 3.79417 2.74561 4.68485 2.74561H10.3272"
        stroke={color}
        strokeWidth="1.20907"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.90918 12.4182L10.4482 12.1047C10.6264 12.0829 10.7924 12.0015 10.9198 11.8749L17.0707 5.72399C17.7518 5.04288 17.7518 3.9386 17.0707 3.25668V3.25668C16.3896 2.57557 15.2853 2.57557 14.6034 3.25668L8.50968 9.3504C8.38636 9.47372 8.30656 9.63332 8.28157 9.80662L7.90918 12.4182Z"
        stroke={color}
        strokeWidth="1.20907"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default EditIconSvg
