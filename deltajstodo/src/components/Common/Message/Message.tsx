import { useContext } from 'react'
import { localPageDispatchContext } from '../../../contexts/LocalPageContextProvider'
import Close from '../Icons/Close'

/* eslint-disable tailwindcss/no-custom-classname */
interface MessageProps {
  text: string
  type: string
}

const Message = ({ text, type }: MessageProps): JSX.Element => {
  const bg = type === 'success' ? 'bg-[#C2F7FA]' : 'bg-[#fac2c2]'
  const localPageDispatch: any = useContext(localPageDispatchContext)
  return (
    <div
      className={`mb-[10px] text-[20px] ${bg} animate-fadein rounded-full px-4 py-3 font-medium`}
    >
      <button onClick={() => localPageDispatch({ type: 'closeModal' })}>
        <Close />
      </button>
      {text}
    </div>
  )
}

export default Message
