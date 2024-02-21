import { toFarsiNumber } from '../../utilities/toFarsiNumber'
import Button from '../Buttons/Button'
import ArrowDownIconSvg from '../Icons/ArrowDownIconSvg'
import CalendarIconSvg from '../Icons/CalendarIconSvg'

const Calendar = (): JSX.Element => {
  return (
    <div
      dir="rtl"
      className="absolute left-1/2 top-1/2 w-[936px] -translate-x-1/2 -translate-y-1/2 rounded-[20px] bg-white shadow-[0px_12px_32px_0px_#00000040]
      "
    >
      <div className="relative size-full">
        {/*  Calendar Head  */}
        <div className="mx-5 mb-[36px] mt-[51px] flex flex-row items-start">
          <div className="flex w-1/2 flex-row-reverse items-center justify-end gap-2">
            <div className="text-brand-primary">۱۰ تیر</div>
            <p className="text-[24px]"> زمان شروع</p>
            <CalendarIconSvg color="#BDBDBD" />
          </div>
          <div className="flex w-1/2 flex-row-reverse items-center justify-end gap-2 border-r-[1px] border-[#E8EAED] pr-2">
            <p className="text-[24px]"> زمان پایان</p>
            <CalendarIconSvg color="#BDBDBD" />
          </div>
        </div>
        {/* border center  */}
        <div className="w-full border-t-[1px] border-gray-secondary"></div>
        <div className="flex w-full flex-row">
          {/* box right  */}
          <div className="flex h-[510px] w-[293px] flex-col gap-6 rounded-br-[20px] bg-gray-secondary px-[23px] py-[24px]">
            <div className="flex flex-row justify-between">
              <span className="text-[20px] font-[500]">امروز</span>
              <span className="text-gray-primary">بکشنبه</span>
            </div>
            <div className="flex flex-row justify-between">
              <span className="text-[20px] font-[500]">کمی بعد</span>
              <span className="text-[16px] text-gray-primary ">
                {toFarsiNumber('17:39')}
              </span>
            </div>
            <div className="flex flex-row justify-between">
              <span className="text-[20px] font-[500]">فردا</span>
              <span className="text-gray-primary">دوشنبه</span>
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
          {/* calendar number & week left  */}
          <div className="w-[630px]">
            <div className="mr-[17px] mt-7 flex flex-row items-center justify-center gap-5 text-[20px]">
              <div className="">تیر ۱۴۰۲</div>
              <div className="flex flex-row">
                <button onClick={() => {}}>
                  <ArrowDownIconSvg className="-rotate-90" color="#7D828C" />
                </button>
                <button onClick={() => {}}>
                  <ArrowDownIconSvg className="rotate-90" color="#7D828C" />
                </button>
              </div>
              <div className="">امروز</div>
            </div>
            <div className="flex w-full flex-row gap-1">
              <div className="">شنبه</div>
              <div className="">یکشنبه</div>
              <div className="">دوشنبه</div>
              <div className="">سه‌شنبه</div>
              <div className="">چهار‌شنبه</div>
              <div className="">پنجشنبه</div>
              <div className="">جمعه</div>
            </div>
            <Button CalendarButton>بستن</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Calendar
