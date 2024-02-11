import "../../dist/output.css";
import AuthSvg from "../Svg/AuthSvg";
import Header from "./Header";

function Layout({
  children,
  buttonText,
  linkText,
}: {
  children: any;
  buttonText: string;
  linkText: string;
}): JSX.Element {
  return (
    <div className="flex justify-center items-center h-[100vh]">
      <Header buttonText={buttonText} linkText={linkText} />
      {children}
      <AuthSvg />
    </div>
  );
}

export default Layout;
