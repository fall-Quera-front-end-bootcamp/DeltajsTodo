import SettingIconSvg from '../../Common/Icons/SettingIconSvg'

const SettingButton = ({
  onClickFunction,
  selected
}: {
  selected: string
  onClickFunction: any
}): JSX.Element => {
  return (
    <button
      className={`relative flex gap-[11px] rounded-[4px] px-[8px] py-[4px] ${selected === 'setting' ? 'bg-[#C2F7FA]' : 'bg-white'} cursor-pointer transition-all duration-700`}
      onClick={(e) => onClickFunction(e)}
    >
      <div className="absolute inset-0 size-[100%]" aria-label="setting"></div>

      <SettingIconSvg className="size-[24px]" />

      <span
        className={`${selected === 'setting' ? 'font-[800]' : 'font-[500]'} text-[20px] leading-[28.18px] text-[#1E1E1E] transition-all duration-700`}
      >
        تنظیمات
      </span>
    </button>
  )
}

export default SettingButton
