import '../../dist/output.css'
import AuthSvg from '../Svg/AuthSvg'
import Header from './Header'

interface LayoutProps {
  children: any
  buttonText: string
  linkText: string
  onClickFunction: any
}

function Layout({
  children,
  buttonText,
  linkText,
  onClickFunction,
}: LayoutProps): JSX.Element {
  return (
    <div className="flex h-[100vh] items-center justify-center ">
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
