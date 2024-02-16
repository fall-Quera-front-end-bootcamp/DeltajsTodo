interface ButtonProps {
  classes?: string
  onClickFunction?: any
  children: any
}

const Button = ({
  classes,
  onClickFunction,
  children
}: ButtonProps): JSX.Element => {
  return (
    <>
      <button className={classes} onClick={onClickFunction}>
        {children}
      </button>
    </>
  )
}

// Button.prototype = {
//   checkPassedProps
// }

export default Button
