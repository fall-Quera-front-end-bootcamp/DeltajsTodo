import {
  type Dispatch,
  type SetStateAction,
  type MutableRefObject
} from 'react'

import RedCross from '../../../Common/Icons/RedCross'
import PriorityOption from './PriorityOption'

function Priority({
  className,
  ref,
  setPriority,
  setShowPriority,
}: {
  className?: string
  ref?: MutableRefObject<null>
  setPriority?: Dispatch<SetStateAction<number>> | undefined
  setShowPriority?: Dispatch<SetStateAction<boolean>> | undefined
}): JSX.Element {
  return (
    <div
      ref={ref}
      dir="rtl"
      onClick={() => {
        if (setShowPriority !== undefined) setShowPriority(false)
      }}
      className={`flex w-max flex-col gap-4 rounded-lg bg-[white] p-3 shadow-[0_3px_4px_0] shadow-[#00000033] ${className}`}
    >
      <div className="flex flex-col gap-4">
        <PriorityOption setPriority={setPriority} color="#FA5252" text="فوری" />
        <PriorityOption setPriority={setPriority} color="#FAB005" text="بالا" />
        <PriorityOption
          setPriority={setPriority}
          color="#15AABF"
          text="متوسط"
        />
        <PriorityOption
          setPriority={setPriority}
          color="#82C91E"
          text="پایین"
        />
      </div>
      <div
        onClick={() => {
          if (setPriority !== undefined) setPriority(0)
        }}
        className="flex w-[142px] items-center gap-2"
      >
        <RedCross />
        <span className="  text-[14px] font-normal leading-[19.73px] text-[#534D60]">
          حذف اولویت
        </span>
      </div>
    </div>
  )
}

export default Priority
