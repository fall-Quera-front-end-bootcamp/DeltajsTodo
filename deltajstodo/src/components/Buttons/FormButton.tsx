import "../../dist/output.css";

function FormButton({ text }: { text: string }): JSX.Element {
  return (
    <button
      className={
        "bg-brand-primary text-[white] font-yekan font-extrabold text-[14px] leading-[19.73px] rounded-[6px] p-[10px] w-[100%] h-[40px] mt-6 mb-6"
      }
    >
      {text}
    </button>
  );
}

export default FormButton;
