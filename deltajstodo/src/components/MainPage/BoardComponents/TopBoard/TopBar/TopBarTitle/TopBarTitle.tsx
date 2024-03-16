const TopBarTitle = ({ title }: { title: string }): JSX.Element => {
  return (
    <p className="text-right text-[20px] font-extrabold leading-[32px] text-[#1E1E1E]">
      {title}
    </p>
  )
}

export default TopBarTitle
