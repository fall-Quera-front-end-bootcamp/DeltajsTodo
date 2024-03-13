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
      className={`mb-[10px] text-[20px] ${bg} animate-fadein rounded-full px-4 py-3 font-medium fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 shadow-[0px_2px_4px_0px_#00000066,0px_7px_6px_-3px_#0000004D,0px_-3px_0px_0px_#00000033_inset]`}
    >
      <button onClick={() => localPageDispatch({ type: 'closeModal' })}>
        <Close />
      </button>
      {text}
    </div>
  )
}

export default Message
