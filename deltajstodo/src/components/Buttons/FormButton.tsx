import '../../dist/output.css'

function FormButton({
  text,
  color,
  ...props
}: {
  text: string
  color: string
  onClickFunction: any
}): JSX.Element {
  const textColor =
    color === 'bg-brand-primary' ? 'text-[white]' : 'text-brand-primary'
  return (
    <button
      className={`${color} ${textColor} font-yekan font-extrabold text-[14px] leading-[19.73px] rounded-[6px] p-[10px] w-[100%] h-[40px] mb-2`}
      onClick={props.onClickFunction}
    >
      {text}
    </button>
  )
}

export default FormButton
