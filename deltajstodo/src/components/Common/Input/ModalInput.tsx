/* eslint-disable react/prop-types */
interface ModalInputProps {
  ref: React.RefObject<HTMLInputElement | null>
  onchangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void
  value: string
}

const ModalInput: React.FC<ModalInputProps> = ({
  ref,
  onchangeHandler,
  value
}) => {
  return (
    <input
      className="h-[40px] w-[415px] rounded-md border-[1px] border-[#AAAAAA]"
      ref={ref}
      onChange={onchangeHandler}
      value={value}
    />
  )
}

export default ModalInput
