import moment from 'jalali-moment'
import { weekDays } from '../CalendarUtil/CalendarFunctions'
import { toFarsiNumber } from '../../../../../utilities/toFarsiNumber'

const CalendarBoxRight = ({ date }: { date: string }): JSX.Element => {
  return (
    <div className="flex h-[510px] w-[293px] flex-col gap-6 rounded-br-[20px] bg-gray-secondary px-[23px] py-[24px]">
      <div className="flex flex-row justify-between">
        <span className="text-[20px] font-[500]">امروز</span>
        <span className="text-gray-primary">
          {weekDays(moment(date).jDay())}
        </span>
      </div>
      <div className="flex flex-row justify-between">
        <span className="text-[20px] font-[500]">کمی بعد</span>
        <span className="text-[16px] text-gray-primary ">
          {toFarsiNumber('17:39')}
        </span>
      </div>
      <div className="flex flex-row justify-between">
        <span className="text-[20px] font-[500]">فردا</span>
        <span className="text-gray-primary">
          {weekDays(moment(date).jDay())}
        </span>
      </div>
      <div className="flex flex-row justify-between">
        <span className="text-[20px] font-[500]">این آخر هفته</span>
        <span className="text-gray-primary">جمعه</span>
      </div>
      <div className="flex flex-row justify-between">
        <span className="text-[20px] font-[500]">هفته‌ی آینده</span>
        <span className="text-gray-primary">شنبه</span>
      </div>
      <div className="flex flex-row justify-between">
        <span className="text-[20px] font-[500]">آخرهفته‌ی آینده</span>
        <span className="text-gray-primary">۴ تیر</span>
      </div>
      <div className="flex flex-row justify-between">
        <span className="text-[20px] font-[500]">دو هفته دیگر</span>
        <span className="text-gray-primary">۱۱ تیر</span>
      </div>
      <div className="flex flex-row justify-between">
        <span className="text-[20px] font-[500]">۴ هفته دیگر</span>
        <span className="text-gray-primary">۱ مرداد</span>
      </div>
    </div>
  )
}

export default CalendarBoxRight
