/* eslint-disable tailwindcss/no-contradicting-classname */
import "../../dist/output.css";
import HeaderButton from "../Buttons/HeaderButton";

function Header({
  buttonText,
  linkText,
}: {
  buttonText: string;
  linkText: string;
}): JSX.Element {
  return (
    <div
      dir="rtl"
      className="flex flex-col sm:flex-row justify-between items-center w-[88.88%] fixed top-[7.8125%]"
      >
      <h1 className="text-[32px] font-extrabold leading-[45.09px] bg-gradient-to-r from-[#118C80] from-0% to-[#4AB7D8] to-[120%] bg-clip-text text-transparent">
        کوئرا تسک منیجر
      </h1>
      <div className="mt-6 sm:mt-0">
        <a href="#" className="font-yekan font-medium text-[16px] leading-[22.55px] text-right">
      {/* <h1 className="bg-gradient-to-r from-[#118C80] from-0% to-[#4AB7D8] to-[120%] bg-clip-text text-[32px] font-extrabold leading-[45.09px] text-transparent">
        کوئرا تسک منیجر
      </h1>
      <div>
        <a
          href="#"
          className="font-yekan text-right text-[16px] font-medium leading-[22.55px]"
        >
          {linkText}
        </a>
        <HeaderButton text={buttonText} />
      </div> */}
    </div>
    </div>
  );
}

export default Header;
