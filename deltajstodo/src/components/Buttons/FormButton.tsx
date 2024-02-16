/* eslint-disable tailwindcss/no-custom-classname */
import '../../dist/output.css'

interface FormButtonProps {
  text: string
  color: string
  onClickFunction?: any
  className?: string
}

// eslint-disable-next-line @typescript-eslint/space-before-function-paren
function FormButton({ text, color, className, ...props }: FormButtonProps): JSX.Element {
  const textColor =
    color === 'bg-brand-primary' ? 'text-[white]' : 'text-brand-primary'
  return (
    <button
      className={`${color} ${textColor} h-[40px] w-[100%] rounded-[6px] p-[10px] font-yekan text-[14px] font-extrabold leading-[19.73px] ${className}`}
      onClick={props.onClickFunction}
    >
      {text}
    </button>
  )
}

export default FormButton
