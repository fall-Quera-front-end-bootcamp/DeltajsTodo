import { type FunctionComponent } from 'react'

interface ItemColorProps {
  color: string
  size?: string
}

const ItemColor: FunctionComponent<ItemColorProps> = ({
  color,
  size = '20'
}) => {
  return (
    <>
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect y="0.5" width={size} height={size} rx="4" fill={color} />
      </svg>
    </>
  )
}

export default ItemColor
