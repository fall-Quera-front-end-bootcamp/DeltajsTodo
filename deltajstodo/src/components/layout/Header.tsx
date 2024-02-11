import "../../dist/output.css";
import HeaderButton from "../Buttons/HeaderButton";

function Header({ buttonText, linkText }: { buttonText: string; linkText: string }): JSX.Element {
  return (
    <div dir="rtl" className="flex justify-between w-[88.88%] fixed top-[7.8125%]">
      <h1 className="text-[32px] font-extrabold leading-[45.09px] bg-gradient-to-r from-[#118C80] from-0% to-[#4AB7D8] to-[120%] bg-clip-text text-transparent">
        کوئرا تسک منیجر
      </h1>
      <div>
        <a href="#" className="font-yekan font-medium text-[16px] leading-[22.55px] text-right">
          {linkText}
        </a>
        <HeaderButton text={buttonText} />
      </div>
    </div>
  );
}

export default Header;
