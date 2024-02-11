import "../../dist/output.css";

function HeaderButton({ text }: { text: string }): JSX.Element {
  return (
    <button
      className={
        "bg-brand-primary text-[white] font-yekan font-extrabold text-[14px] leading-[19.73px] rounded-[6px] p-[10px] w-[95px] h-[40px] mr-[6px]"
      }
    >
      {text}
    </button>
  );
}

export default HeaderButton;
