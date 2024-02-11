import "../../dist/output.css";

function AuthCard({ children }: { children: any }): JSX.Element {
  return (
    <div className="w-[100%] sm:w-[640px] h-[429px] bg-[white] p-6 rounded-[20px]">
      {children}
    </div>
  );
}

export default AuthCard;
