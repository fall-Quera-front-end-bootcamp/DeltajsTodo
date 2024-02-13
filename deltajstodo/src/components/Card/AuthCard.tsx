/* eslint-disable tailwindcss/no-custom-classname */
import '../../dist/output.css'

// eslint-disable-next-line @typescript-eslint/space-before-function-paren
function AuthCard({ children }: { children: any }): JSX.Element {
  return (
    // eslint-disable-next-line tailwindcss/classnames-order
    <div className="w-[100%] sm:w-[640px] bg-[white] p-6 rounded-[20px] shadow-card">
      {children}
    </div>
  )
}
export default AuthCard
