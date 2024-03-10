import Close from '../../../../../../Common/Icons/Close'
import PriorityFlag from '../../../../../../Common/Icons/PriorityFlag'

interface CalendarCellNewTaskProps {
  onClickFunction: any
  month?: string
  date?: string
}

const CalendarCellNewTask = ({
  onClickFunction,
  month,
  date
}: CalendarCellNewTaskProps): JSX.Element => {
  return (
    <div className="flex w-[463px] flex-col gap-8 rounded-[8px] border-[2px] border-brand-primary bg-white p-[20px]">
      <div dir="rtl" className="flex gap-2">
        <div onClick={(e) => onClickFunction(e)}>
          <Close />
        </div>

        <input
          type="text"
          placeholder="نام تسک را وارد کنید"
          className="border-none text-[20px] font-medium leading-[28.18px] focus:outline-none"
        />
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <PriorityFlag color="#C1C1C1" className="size-[29.41px]" />

          <span className="text-[20px] font-medium leading-[28.18px] text-brand-primary">
            {date} {month}
          </span>
        </div>

        <button className="h-[32px] w-[125px] rounded-[4px] bg-brand-primary px-[7px] py-[4px] text-[12px] font-normal leading-[16.91px] text-white">
          ساخت تسک
        </button>
      </div>
    </div>
  )
}

export default CalendarCellNewTask
