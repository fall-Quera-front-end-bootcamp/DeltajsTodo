/* eslint-disable tailwindcss/no-custom-classname */
import '../../dist/output.css'
import ShareIconSvg from '../Icons/ShareIconSvg'

// eslint-disable-next-line @typescript-eslint/space-before-function-paren
function ShareButton(): JSX.Element {
  return (
    <button className="flex items-center w-[100%] rounded-md pt-[6px] pr-[12px] pb-[6px] pl-[12px] bg-brand-primary">
      <ShareIconSvg />
      <span className="  font-extrabold text-[12px] text-[white] leading-[16.91px]">
        اشتراک‌گذاری
      </span>
    </button>
  )
}

export default ShareButton
