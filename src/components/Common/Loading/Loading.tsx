import { ReactNode } from 'react'

interface loadingProps {
  children?: ReactNode
  classNames?: string
}

const Loading = ({ children, classNames }: loadingProps) => {
  return (
    <div className={`flex items-center gap-1 w-max p-3 ${classNames || ''}`}>
      <div className="w-[8px] h-[8px] bg-white rounded-full animate-pulse"></div>
      <div className="w-[8px] h-[8px] bg-white rounded-full animate-pulse"></div>
      <div className="w-[8px] h-[8px] bg-white rounded-full animate-pulse"></div>
      {children}
    </div>
  )
}

export default Loading
