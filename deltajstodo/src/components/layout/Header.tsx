/* eslint-disable @typescript-eslint/comma-dangle */
/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable tailwindcss/no-contradicting-classname */
import '../../dist/output.css'
import Button from '../Buttons/Button'

interface HeaderProps {
  buttonText: string
  linkText: string
  onClickFunction: any
}

// eslint-disable-next-line @typescript-eslint/space-before-function-paren
function Header({
  buttonText,
  linkText,
  onClickFunction
}: HeaderProps): JSX.Element {
  return (
    <div
      dir="rtl"
      className="fixed top-[7.8125%] flex w-[88.88%] flex-col items-center justify-between sm:flex-row "
    >
      <h1 className="bg-gradient-to-r from-[#118C80] from-0% to-[#4AB7D8] to-[120%] bg-clip-text text-[32px] font-extrabold leading-[45.09px] text-transparent">
        کوئرا تسک منیجر
      </h1>
      <div>
        <span className="text-right font-yekan text-[16px] font-medium leading-[22.55px]">
          {linkText}
        </span>
        <Button headerButton onClickFunction={onClickFunction}>{buttonText}</Button>
      </div>
    </div>
  )
}

export default Header
