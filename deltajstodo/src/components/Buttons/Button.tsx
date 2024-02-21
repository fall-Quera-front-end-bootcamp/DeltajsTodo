/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import className from 'classnames'

// <Button  {...insert your Custom Button Prototype}>
//   { children }
// </Button>

// Props Interface
interface ButtonProps {
  formButtonLogin?: string | boolean
  formButtonLoginSecondary?: string | boolean
  formButtonLoginPrimary?: string | boolean
  bgTransparent?: string | boolean
  headerButton?: string | boolean
  textWhite?: string | boolean
  textBlack?: string | boolean
  textBrandPrimary?: string | boolean
  newTask?: string | boolean
  onClickFunction?: any
  children: any
}

// Button Main Function
const Button = ({
  formButtonLogin,
  formButtonLoginSecondary,
  formButtonLoginPrimary,
  bgTransparent,
  textBlack,
  textWhite,
  textBrandPrimary,
  headerButton,
  onClickFunction,
  newTask,
  children
}: ButtonProps): JSX.Element => {
  // 1st arg:: for all variations.
  const classes = className({
    'w-[100%]  bg-brand-primary border-0 rounded-[6px] p-[10px]   text-[16px] font-extrabold leading-[19.73px]':
      formButtonLogin,
    'mr-[6px] h-[40px] w-[95px] rounded-[6px] bg-brand-primary p-[10px]   text-[14px] font-extrabold leading-[19.73px] text-white':
      headerButton,
    'h-[40px]': formButtonLoginSecondary,
    'h-[48px]': formButtonLoginPrimary,
    'bg-transparent': bgTransparent,
    'text-black': textBlack,
    'text-white': textWhite,
    'text-brand-primary': textBrandPrimary,
    'bg-brand-primary text-white rounded-[4px] py-[4px] px-[7px] text-[12px] h-[32px] w-[125px]':
      newTask
  })
  return (
    <>
      <button className={classes} onClick={onClickFunction}>
        {children}
      </button>
    </>
  )
}

// Button Prototype
Button.prototype = {
  checkPassedProps: ({
    formButtonLogin,
    formButtonLoginSecondary,
    formButtonLoginPrimary,
    headerButton,
    bgTransparent,
    textBlack,
    textWhite,
    textBrandPrimary,
    newTask
  }: {
    formButtonLogin: string | null
    formButtonLoginSecondary: string | null
    formButtonLoginPrimary: string | null
    headerButton: string | null
    bgTransparent: string | null
    textBlack: string | null
    textWhite: string | null
    textBrandPrimary: string | null
    newTask: string | null
  }) => {
    const count =
      Number(!!formButtonLogin) +
      Number(!!headerButton) +
      Number(!!formButtonLoginSecondary) +
      Number(!!formButtonLoginPrimary) +
      Number(!!bgTransparent) +
      Number(!!textBlack) +
      Number(!!textWhite) +
      Number(!!textBrandPrimary) +
      Number(!!newTask)
    if (count > 1) {
      return new Error('Only one of the F,H can be true.')
    }
  }
}

export default Button
