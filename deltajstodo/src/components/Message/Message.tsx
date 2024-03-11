/* eslint-disable tailwindcss/no-custom-classname */
interface MessageProps {
  text: string
  type: string
}

const Message = ({ text, type }: MessageProps): JSX.Element => {
  const bg = type === 'success' ? 'bg-[#C2F7FA]' : 'bg-[#fac2c2]'
  return (
    <div
      className={`mb-[10px] text-[20px] ${bg} animate-fadein rounded-full px-4 py-3 font-medium`}
    >
      {text}
    </div>
  )
}

export default Message
