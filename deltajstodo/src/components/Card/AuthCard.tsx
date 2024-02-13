import '../../dist/output.css'

function AuthCard({ children }: { children: any }): JSX.Element {
  return (
    <div className="flex w-[100%] flex-col gap-4 rounded-[20px] bg-[white] p-6 shadow-card sm:w-[640px]">
      {children}
    </div>
  )
}
export default AuthCard
