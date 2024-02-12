import '../../dist/output.css'

function FormButton ({
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
      className={`${color} ${textColor} font-yekan text-bolds rounded-[6px] p-[10px] w-[100%] mb-2`}
      onClick={props.onClickFunction}
    >
      {text}
    </button>
  )
}

export default FormButton
