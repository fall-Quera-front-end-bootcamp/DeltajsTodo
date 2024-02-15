import '../../dist/output.css'
import PriorityFlag from '../Svg/PriorityFlag'

interface PriorityOptionProps {
  color: string
  text: string
}

function PriorityOption({ color, text }: PriorityOptionProps): JSX.Element {
  return (
    <div className="flex gap-2 items-center">
      <PriorityFlag color={color} />
      <span className="font-yekan font-normal text-[14px] leading-[19.73px]">
        {text}
      </span>
    </div>
  )
}

export default PriorityOption
