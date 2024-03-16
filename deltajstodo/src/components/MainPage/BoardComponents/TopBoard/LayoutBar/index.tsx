const LayoutBar = ({ children }: { children: JSX.Element }): JSX.Element => {
  return (
    <div className="flex w-full flex-col items-center justify-between pl-4 pt-4">
      {children}
      <div className="w-full border-b-[0.5px] border-[#AAAAAA] pt-4"></div>
    </div>
  )
}

export default LayoutBar
