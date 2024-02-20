const FilterSettingIconSvg = ({
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
          d="M8.12132 4.8788C9.29289 6.05037 9.29289 7.94987 8.12132 9.12144C6.94975 10.293 5.05025 10.293 3.87868 9.12144C2.70711 7.94987 2.70711 6.05037 3.87868 4.8788C5.05025 3.70723 6.94975 3.70723 8.12132 4.8788"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20 7.00012H9"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20.1213 14.8788C21.2929 16.0504 21.2929 17.9499 20.1213 19.1214C18.9497 20.293 17.0502 20.293 15.8787 19.1214C14.7071 17.9499 14.7071 16.0504 15.8787 14.8788C17.0502 13.7072 18.9497 13.7072 20.1213 14.8788"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4 17.0001H15"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  )
}

export default FilterSettingIconSvg
