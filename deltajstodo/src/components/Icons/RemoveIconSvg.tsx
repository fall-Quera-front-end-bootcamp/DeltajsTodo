const RemoveIconSvg = ({
  size = '20',
  color = '#FA5252',
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.6624 17.2544H6.98831C6.14438 17.2544 5.44312 16.6031 5.38025 15.7608L4.65723 5.96973H15.9693L15.2704 15.7567C15.21 16.6007 14.5079 17.2544 13.6624 17.2544V17.2544Z"
        stroke={color}
        strokeWidth="1.20907"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.3273 9.19385V14.0301"
        stroke={color}
        strokeWidth="1.20907"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.87891 5.96967H16.7757"
        stroke={color}
        strokeWidth="1.20907"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.3573 5.96979L13.5408 3.79185C13.3046 3.16233 12.7033 2.74561 12.0311 2.74561H8.62313C7.95088 2.74561 7.34957 3.16233 7.1134 3.79185L6.29688 5.96979"
        stroke={color}
        strokeWidth="1.20907"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.0919 9.19385L12.7453 14.0301"
        stroke={color}
        strokeWidth="1.20907"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.56273 9.19385L7.90933 14.0301"
        stroke={color}
        strokeWidth="1.20907"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default RemoveIconSvg
