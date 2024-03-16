/* eslint-disable @typescript-eslint/comma-dangle */
import '../../../../dist/output.css'
import AuthSvg from '../../../Common/Svg/AuthSvg'
import Header from './Header'

interface LayoutProps {
  children: any
  buttonText: string
  linkText: string
  onClickFunction: any
  className?: string
}

// eslint-disable-next-line @typescript-eslint/space-before-function-paren
function Layout({
  children,
  buttonText,
  linkText,
  onClickFunction,
  className
}: LayoutProps): JSX.Element {
  return (
    <div
      className={`relative flex h-[100vh] items-center justify-center ${className}`}
    >
      <Header
        buttonText={buttonText}
        linkText={linkText}
        onClickFunction={onClickFunction}
      />
      {children}
      <AuthSvg />
    </div>
  )
}

export default Layout
