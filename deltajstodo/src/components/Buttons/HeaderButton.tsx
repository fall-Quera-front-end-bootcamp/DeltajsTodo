/* eslint-disable @typescript-eslint/space-before-function-paren */
/* eslint-disable tailwindcss/no-custom-classname */
import '../../dist/output.css'

interface HeaderButtonProps {
  text: string
  onClickFunction?: any
}

function HeaderButton({ text, ...props }: HeaderButtonProps): JSX.Element {
  return (
    <button
      className={
        'mr-[6px] h-[40px] w-[95px] rounded-[6px] bg-brand-primary p-[10px] font-yekan text-[14px] font-extrabold leading-[19.73px] text-[white]'
      }
      onClick={props.onClickFunction}
    >
      {text}
    </button>
  )
}

export default HeaderButton
