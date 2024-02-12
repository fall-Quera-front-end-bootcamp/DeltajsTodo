import '../../dist/output.css'

function AuthCard ({
  children,
  className
}: {
  children: any
  className?: string
}): JSX.Element {
  return (
    <div
      className={`w-[100%] rounded-[20px] bg-[white] p-6 shadow-card sm:w-[640px] ${className}`}
    >
      {children}
    </div>
  )
}

export default AuthCard
