import { useContext } from 'react'
import { localPageDispatchContext } from '../../../contexts/LocalPageContextProvider'
import Close from '../Icons/Close'
import { motion } from 'framer-motion'

/* eslint-disable tailwindcss/no-custom-classname */
interface MessageProps {
  text: string
  type: string
}

const Message = ({ text, type }: MessageProps): JSX.Element => {
  const bg = type === 'success' ? 'bg-[#C2F7FA]' : 'bg-[#fac2c2]'
  const localPageDispatch: any = useContext(localPageDispatchContext)
  return (
    <motion.div
      initial={{ x: '-300px' }}
      animate={{ transform: 'translateX(0)' }}
      transition={{ duration: 0.2 }}
      exit={{
        transform: 'translateX(300px)',
        transition: { duration: 1 }
      }}
      className={`${bg} absolute bottom-6 left-6 flex flex-row items-center justify-between px-12 py-3 shadow-[0_3px_4px_0] shadow-[#00000033]`}
    >
      {text}
      <button
        onClick={() => localPageDispatch({ type: 'closeModal' })}
        className="absolute right-0 top-0"
      >
        <Close />
      </button>
    </motion.div>
  )
}

export default Message
