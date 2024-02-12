import '../../dist/output.css'

interface FormButtonProps {
  text: string
  color: string
  onClickFunction?: any
  height?: string
}

function FormButton({ text, color, ...props }: FormButtonProps): JSX.Element {
  const textColor =
    color === 'bg-brand-primary' ? 'text-[white]' : 'text-brand-primary'
  return (
    <button
      className={`${color} ${textColor} font-yekan font-extrabold text-[14px] leading-[19.73px] rounded-[6px] p-[10px] w-[100%] h-[40px] ${props.height}`}
      onClick={props.onClickFunction}
    >
      {text}
    </button>
  )
}

export default FormButton
