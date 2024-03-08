/* eslint-disable @typescript-eslint/comma-dangle */
/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable tailwindcss/no-contradicting-classname */
import '../../dist/output.css'
import Button from '../Buttons/Button'
import HeadingMainText from '../HeadingMainText/HeadingMainText'

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
      <HeadingMainText />
      <div>
        <span className="text-right   text-[16px] font-medium leading-[22.55px]">
          {linkText}
        </span>
        <Button headerButton onClickFunction={onClickFunction}>
          {buttonText}
        </Button>
      </div>
    </div>
  )
}

export default Header
