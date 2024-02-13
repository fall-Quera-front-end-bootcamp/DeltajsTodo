import '../../dist/output.css'

interface InputProps {
  name: string
  type: string
}

// eslint-disable-next-line @typescript-eslint/space-before-function-paren
function Input({ name, type }: InputProps): JSX.Element {
  return (
    <div dir="rtl">
      <label
        htmlFor=""
        className="block font-yekan font-normal text-[14px] leading-[19.73px] mb-2"
      >
        {name}
      </label>
      <input
        type={type}
        className="w-[100%] bg-[white] rounded-[6px] border-solid border-[1px] border-gray-primary p-2"
      />
    </div>
  )
}

export default Input
