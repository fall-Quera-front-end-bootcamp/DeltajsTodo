import { BiUser } from 'react-icons/bi'

const NoUser = ({ className }: { className?: string }): JSX.Element => {
  return (
    <div
      className={`absolute right-0 flex size-[34px] flex-col items-center justify-center rounded-full bg-blue-secondary ${className}`}
    >
      <BiUser color="#C1C1C1" size={20} />
    </div>
  )
}

export default NoUser
