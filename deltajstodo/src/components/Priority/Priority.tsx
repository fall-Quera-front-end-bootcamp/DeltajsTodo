import '../../dist/output.css'
import RedCross from '../Svg/RedCross'
import PriorityOption from './PriorityOption'

function Priority (): JSX.Element {
  return (
    <div
      dir="rtl"
      className="flex w-max flex-col gap-4 rounded-lg bg-[white] p-3"
    >
      <div className="flex flex-col gap-4">
        <PriorityOption color="#FA5252" text="فوری" />
        <PriorityOption color="#FAB005" text="بالا" />
        <PriorityOption color="#15AABF" text="متوسط" />
        <PriorityOption color="#82C91E" text="پایین" />
      </div>
      <div className="flex w-[142px] items-center gap-2">
        <RedCross />
        <span className="font-yekan text-[14px] font-normal leading-[19.73px] text-[#534D60]">
          حذف اولویت
        </span>
      </div>
    </div>
  )
}

export default Priority
