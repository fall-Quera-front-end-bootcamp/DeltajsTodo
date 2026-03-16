const ChatMessageIconSvg = ({
  size = '24',
  color = '#AEAEAE',
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.0003 3.9967C7.02826 3.9967 2.99658 7.35678 2.99658 11.4969C3.07174 13.9952 4.44959 16.2718 6.62809 17.4971C6.4117 18.0852 6.11079 18.6386 5.73486 19.1399C5.52737 19.4428 5.5325 19.8434 5.74769 20.141C5.96287 20.4385 6.34174 20.5688 6.69442 20.4666C7.89725 20.1164 9.02941 19.5582 10.0395 18.8171C10.6861 18.9383 11.3425 18.9986 12.0003 18.9971C16.9724 18.9971 21.0041 15.6371 21.0041 11.4969C21.0041 7.35679 16.9724 3.9967 12.0003 3.9967Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.99902 9.99911H15.0015"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.99902 13.0005H12.0003"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default ChatMessageIconSvg
