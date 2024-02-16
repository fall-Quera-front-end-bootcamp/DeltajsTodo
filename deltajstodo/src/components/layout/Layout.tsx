/* eslint-disable @typescript-eslint/comma-dangle */
import '../../dist/output.css'
import AuthSvg from '../Svg/AuthSvg'
import Header from './Header'

interface LayoutProps {
  children: any
  buttonText: string
  linkText: string
  onClickFunction: any
}

// eslint-disable-next-line @typescript-eslint/space-before-function-paren
function Layout({
  children,
  buttonText,
  linkText,
  onClickFunction
}: LayoutProps): JSX.Element {
  return (
    <div className="relative flex h-[100vh] items-center justify-center ">
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
