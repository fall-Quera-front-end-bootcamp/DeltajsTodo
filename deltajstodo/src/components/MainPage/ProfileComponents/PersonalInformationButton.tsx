import ProfileEditUserIconSvg from '../../Common/Icons/ProfileEditUserIconSvg'

const PersonalInformationButton = ({
  onClickFunction,
  selected
}: {
  selected: string
  onClickFunction: any
}): JSX.Element => {
  return (
    <button
      name="info"
      className={`relative flex gap-[11px] rounded-[4px] px-[8px] py-[4px] ${selected === 'info' ? 'bg-[#C2F7FA]' : 'bg-white'} cursor-pointer transition-all duration-700`}
      onClick={(e) => onClickFunction(e)}
    >
      <div className="absolute inset-0 size-[100%]" aria-label="info"></div>

      <ProfileEditUserIconSvg className="size-[24px]" />

      <span
        className={`${selected === 'info' ? 'font-[800]' : 'font-[500]'} text-[20px] leading-[28.18px] text-[#1E1E1E] transition-all duration-700`}
      >
        اطلاعات فردی
      </span>
    </button>
  )
}

export default PersonalInformationButton
