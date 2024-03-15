import { useState, type Dispatch, type SetStateAction, useEffect } from 'react'
import PriorityFlag from '../../../Common/Icons/PriorityFlag'

interface PriorityOptionProps {
  color: string
  text: string
  setPriority?: Dispatch<SetStateAction<number>> | undefined
}

function PriorityOption({
  color,
  text,
  setPriority
}: PriorityOptionProps): JSX.Element {
  const [num, setNum] = useState<number>(0)
  useEffect(() => {
    if (text === 'فوری') setNum(4)
    else if (text === 'بالا') setNum(3)
    else if (text === 'متوسط') setNum(2)
    else if (text === 'پایین') setNum(1)
  }, [text])

  const handleClick = (): void => {
    if (setPriority !== undefined) setPriority(num)
  }
  return (
    <div onClick={handleClick} className="flex items-center gap-2">
      <PriorityFlag color={color} />
      <span className="  text-[14px] font-normal leading-[19.73px]">
        {text}
      </span>
    </div>
  )
}

export default PriorityOption
