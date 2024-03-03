import Close from '../Icons/Close'
import PriorityFlag from '../Icons/PriorityFlag'

interface CalendarCellNewTaskProps {
  onClickFunction: any
  month: string
  date: string
}

const CalendarCellNewTask = ({
  onClickFunction,
  month,
  date
}: CalendarCellNewTaskProps): JSX.Element => {
  return (
    <div className="flex flex-col gap-8 w-[463px] bg-white p-[20px] border-[2px] border-brand-primary rounded-[8px]">
      <div dir="rtl" className="flex gap-2">
        <div onClick={(e) => onClickFunction(e)}>
          <Close />
        </div>

        <input
          type="text"
          placeholder="نام تسک را وارد کنید"
          className="font-medium text-[20px] leading-[28.18px] border-none focus:outline-none"
        />
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <PriorityFlag color="#C1C1C1" className="w-[29.41px] h-[29.41px]" />

          <span className="font-medium text-[20px] leading-[28.18px] text-brand-primary">
            {date} {month}
          </span>
        </div>

        <button className="w-[125px] h-[32px] rounded-[4px] py-[4px] px-[7px] bg-brand-primary text-white font-normal text-[12px] leading-[16.91px]">
          ساخت تسک
        </button>
      </div>
    </div>
  )
}

export default CalendarCellNewTask
