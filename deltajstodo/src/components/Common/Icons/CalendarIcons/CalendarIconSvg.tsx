const CalendarIconSvg = ({
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
      <path
        d="M16 2V6"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 2V6"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 9H21"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19 4H5C3.895 4 3 4.895 3 6V19C3 20.105 3.895 21 5 21H19C20.105 21 21 20.105 21 19V6C21 4.895 20.105 4 19 4Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.01292 12.729C6.87492 12.729 6.76292 12.841 6.76392 12.979C6.76392 13.117 6.87592 13.229 7.01392 13.229C7.15192 13.229 7.26392 13.117 7.26392 12.979C7.26392 12.841 7.15192 12.729 7.01292 12.729"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.0129 12.729C11.8749 12.729 11.7629 12.841 11.7639 12.979C11.7639 13.117 11.8759 13.229 12.0139 13.229C12.1519 13.229 12.2639 13.117 12.2639 12.979C12.2639 12.841 12.1519 12.729 12.0129 12.729"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.0129 12.729C16.8749 12.729 16.7629 12.841 16.7639 12.979C16.7639 13.117 16.8759 13.229 17.0139 13.229C17.1519 13.229 17.2639 13.117 17.2639 12.979C17.2639 12.841 17.1519 12.729 17.0129 12.729"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.01292 16.729C6.87492 16.729 6.76292 16.841 6.76392 16.979C6.76392 17.117 6.87592 17.229 7.01392 17.229C7.15192 17.229 7.26392 17.117 7.26392 16.979C7.26392 16.841 7.15192 16.729 7.01292 16.729"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.0129 16.729C11.8749 16.729 11.7629 16.841 11.7639 16.979C11.7639 17.117 11.8759 17.229 12.0139 17.229C12.1519 17.229 12.2639 17.117 12.2639 16.979C12.2639 16.841 12.1519 16.729 12.0129 16.729"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default CalendarIconSvg
