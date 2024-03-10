import ProfileCheckmarkUserIconSvg from '../../Common/Icons/ProfileCheckmarkUserIconSvg'

const AccountInformationButton = ({
  onClickFunction,
  selected
}: {
  selected: string
  onClickFunction: any
}): JSX.Element => {
  return (
    <button
      className={`relative flex gap-[11px] rounded-[4px] px-[8px] py-[4px] ${selected === 'account' ? 'bg-[#C2F7FA]' : 'bg-white'} cursor-pointer transition-all duration-700`}
      onClick={(e) => onClickFunction(e)}
    >
      <div className="absolute inset-0 size-[100%]" aria-label="account"></div>

      <ProfileCheckmarkUserIconSvg className="size-[24px]" />

      <span
        className={`${selected === 'account' ? 'font-[800]' : 'font-[500]'} text-[20px] leading-[28.18px] text-[#1E1E1E] transition-all duration-700`}
      >
        اطلاعات حساب
      </span>
    </button>
  )
}

export default AccountInformationButton
