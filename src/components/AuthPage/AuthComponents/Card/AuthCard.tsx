/* eslint-disable tailwindcss/no-custom-classname */
import '../../../../dist/output.css'

// eslint-disable-next-line @typescript-eslint/space-before-function-paren
function AuthCard({
  children,
  className
}: {
  children: any
  className?: string
}): JSX.Element {
  return (
    // eslint-disable-next-line tailwindcss/classnames-order
    <div
      className={`w-[100%] rounded-[20px] bg-[white] p-6 shadow-card sm:w-[640px] ${className}`}
    >
      {children}
    </div>
  )
}
export default AuthCard
