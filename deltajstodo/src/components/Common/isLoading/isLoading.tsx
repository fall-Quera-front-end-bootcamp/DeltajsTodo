import { type ReactNode } from 'react'

interface loadingProps {
  children?: ReactNode
  classNames?: string
}

const Loading = ({ children, classNames }: loadingProps): JSX.Element => {
  return (
    <div className={`flex w-max items-center gap-1 p-3 ${classNames ?? ''}`}>
      <div className="size-[8px] animate-pulse rounded-full bg-white"></div>
      <div className="size-[8px] animate-pulse rounded-full bg-white"></div>
      <div className="size-[8px] animate-pulse rounded-full bg-white"></div>
      {children}
    </div>
  )
}

export default Loading
