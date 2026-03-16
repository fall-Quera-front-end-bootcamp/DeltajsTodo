import { BiCartAdd } from 'react-icons/bi'

export interface ItemsProps {
  name: string
  price: number
  onClick?: any
}

const Items = ({ name, price, onClick }: ItemsProps) => {
  return (
    <div className="item">
      <p className="">{name}</p>
      <p className="">{price}</p>
      <button onClick={onClick} type="button" className="">
        <BiCartAdd />
      </button>
    </div>
  )
}

export default Items
