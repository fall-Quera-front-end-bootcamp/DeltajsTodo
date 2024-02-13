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
      className={`${color} ${textColor} h-[40px] w-[100%] rounded-[6px] p-[10px] font-bolds ${props.height}`}
      onClick={props.onClickFunction}
    >
      {text}
    </button>
  )
}

export default FormButton
