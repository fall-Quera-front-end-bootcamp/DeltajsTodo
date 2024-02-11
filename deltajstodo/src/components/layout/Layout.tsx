import '../../dist/output.css'
import AuthSvg from '../Svg/AuthSvg'
import Header from './Header'

function Layout ({
  children,
  buttonText,
  linkText
}: {
  children: any
  buttonText: string
  linkText: string
}): JSX.Element {
  return (
    <div className="flex h-[100vh] items-center justify-center">
      <Header buttonText={buttonText} linkText={linkText} />
      {children}
      <AuthSvg />
    </div>
  )
}

export default Layout
