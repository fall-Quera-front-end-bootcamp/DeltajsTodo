import '../../dist/output.css'

function Input({ name, type }: { name: string; type: string }): JSX.Element {
  return (
    <div dir="rtl" className="mb-5">
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
