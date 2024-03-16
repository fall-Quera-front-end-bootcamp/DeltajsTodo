interface FormButtonProps {
  text: string
  classNameProps: string
  onClickFunction?: any
}

// eslint-disable-next-line @typescript-eslint/space-before-function-paren
function FormButton({
  text,
  classNameProps,
  ...props
}: FormButtonProps): JSX.Element {
  return (
    <button className={classNameProps} onClick={props.onClickFunction}>
      {text}
    </button>
  )
}

export default FormButton
