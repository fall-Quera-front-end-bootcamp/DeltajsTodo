import { type MutableRefObject } from 'react'
import '../../dist/output.css'
import RedCross from '../Icons/RedCross'
import PriorityOption from './PriorityOption'

function Priority ({
  className,
  ref
}: {
  className?: string
  ref: MutableRefObject<null>
}): JSX.Element {
  return (
    <div
      ref={ref}
      dir="rtl"
      className={`flex w-max flex-col gap-4 rounded-lg bg-[white] p-3 ${className}`}
    >
      <div className="flex flex-col gap-4">
        <PriorityOption color="#FA5252" text="فوری" />
        <PriorityOption color="#FAB005" text="بالا" />
        <PriorityOption color="#15AABF" text="متوسط" />
        <PriorityOption color="#82C91E" text="پایین" />
      </div>
      <div className="flex w-[142px] items-center gap-2">
        <RedCross />
        <span className="  text-[14px] font-normal leading-[19.73px] text-[#534D60]">
          حذف اولویت
        </span>
      </div>
    </div>
  )
}

export default Priority
