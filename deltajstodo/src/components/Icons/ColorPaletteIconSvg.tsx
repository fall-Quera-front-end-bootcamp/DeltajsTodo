const ColorPaletteIconSvg = ({
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
        d="M9.99924 5.3125C9.87257 5.3125 9.77007 5.415 9.77174 5.54166C9.77174 5.66833 9.87424 5.77083 10.0009 5.77083C10.1276 5.77083 10.2301 5.66833 10.2301 5.54166C10.2284 5.415 10.1267 5.3125 9.99924 5.3125"
        stroke={color}
        strokeWidth="1.24999"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.77017 9.99924C5.77017 9.87257 5.66767 9.77007 5.54184 9.77174C5.41517 9.77174 5.31267 9.87424 5.31267 10.0009C5.31267 10.1276 5.41517 10.2301 5.54184 10.2301C5.6685 10.2301 5.77017 10.1267 5.77017 9.99924"
        stroke={color}
        strokeWidth="1.24999"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.3144 6.68507C13.2252 6.59591 13.0802 6.59591 12.9919 6.6859C12.9027 6.77507 12.9027 6.92007 12.9919 7.00924C13.081 7.0984 13.226 7.0984 13.3152 7.00924C13.4044 6.91924 13.4044 6.77507 13.3144 6.68507"
        stroke={color}
        strokeWidth="1.24999"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.0087 12.9907C6.91953 12.9016 6.77454 12.9016 6.6862 12.9916C6.59704 13.0807 6.59704 13.2257 6.6862 13.3149C6.77537 13.4041 6.92037 13.4041 7.00953 13.3149C7.0987 13.2257 7.0987 13.0807 7.0087 12.9907"
        stroke={color}
        strokeWidth="1.24999"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.00946 7.00846C7.09863 6.91929 7.09863 6.77429 7.00863 6.68596C6.91946 6.59679 6.77446 6.59679 6.6853 6.68596C6.59613 6.77512 6.59613 6.92012 6.6853 7.00929C6.77446 7.09846 6.91946 7.09846 7.00946 7.00846"
        stroke={color}
        strokeWidth="1.24999"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.0003 17.5C5.78783 17.5 2.38619 14.0267 2.50369 9.78756C2.61202 5.87425 5.8745 2.61178 9.7878 2.50344C14.0269 2.38594 17.5002 5.78759 17.5002 10.0001V10.8334C17.5002 11.7542 16.7544 12.5 15.8336 12.5H14.1144C13.0069 12.5 12.2078 13.56 12.512 14.6242L12.7261 15.375C13.0311 16.44 12.2311 17.5 11.1245 17.5H10.0003Z"
        stroke={color}
        strokeWidth="1.24999"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default ColorPaletteIconSvg
