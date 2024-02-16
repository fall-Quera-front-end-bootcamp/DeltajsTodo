import '../../dist/output.css'
import PriorityFlag from '../Svg/PriorityFlag'

interface PriorityOptionProps {
  color: string
  text: string
}

function PriorityOption ({ color, text }: PriorityOptionProps): JSX.Element {
  return (
    <div className="flex items-center gap-2">
      <PriorityFlag color={color} />
      <span className="font-yekan text-[14px] font-normal leading-[19.73px]">
        {text}
      </span>
    </div>
  )
}

export default PriorityOption
