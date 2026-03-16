interface MessageProps {
  text: string
  type: string
}

const Message = ({ text, type }: MessageProps) => {
  const bg = type === 'success' ? 'bg-[#C2F7FA]' : 'bg-[#fac2c2]'
  return (
    <div
      className={`mb-[10px] text-[20px] ${bg} font-medium px-4 py-3 rounded-full animate-fadein`}
    >
      {text}
    </div>
  )
}

export default Message
