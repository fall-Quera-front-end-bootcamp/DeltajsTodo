import '../../dist/output.css'
import RedCross from '../Svg/RedCross'
import PriorityOption from './PriorityOption'

function Priority(): JSX.Element {
  return (
    <div
      dir="rtl"
      className="bg-[white] w-max p-3 rounded-lg flex flex-col gap-4"
    >
      <div className="flex flex-col gap-4">
        <PriorityOption color="#FA5252" text="فوری" />
        <PriorityOption color="#FAB005" text="بالا" />
        <PriorityOption color="#15AABF" text="متوسط" />
        <PriorityOption color="#82C91E" text="پایین" />
      </div>
      <div className="flex gap-2 items-center w-[142px]">
        <RedCross />
        <span className="font-yekan font-normal text-[14px] text-[#534D60] leading-[19.73px]">
          حذف اولویت
        </span>
      </div>
    </div>
  )
}

export default Priority
