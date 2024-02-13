import '../../dist/output.css'

function AuthCard({
  children,
  className,
}: {
  children: any
  className?: string
}): JSX.Element {
  return (
    <div className="w-[100%] sm:w-[640px] bg-[white] p-6 rounded-[20px] shadow-card flex flex-col gap-4">
      {children}
    </div>
  )
}
export default AuthCard
