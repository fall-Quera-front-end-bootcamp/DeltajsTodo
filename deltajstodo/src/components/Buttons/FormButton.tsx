import '../../dist/output.css'

function FormButton({
  text,
  color,
  className,
  ...props
}: {
  text: string
  color: string
  onClickFunction: any
  className ?: string
}): JSX.Element {
  const textColor =
    color === 'bg-brand-primary' ? 'text-[white]' : 'text-brand-primary'
  return (
    <button
      className={`${color} ${textColor} font-yekan font-extrabold text-[14px] leading-[19.73px] rounded-[6px] p-[10px] w-[100%] mb-2 ${className || ""}`}
      onClick={props.onClickFunction}
    >
      {text}
    </button>
  )
}

export default FormButton
