import DisabledIconSvg from '../Icons/DisabledIconSvg'

const Calendar = (): JSX.Element => {
  return (
    <div className="absolute left-1/2 top-1/2 flex w-[1153px] -translate-x-1/2 -translate-y-1/2 flex-col gap-xl rounded-[20px] bg-white p-l">
      <div className="flex w-full justify-between">
        <DisabledIconSvg />
        <div className="flex flex-row items-center justify-center gap-[13px]">
          <span className="text-bodyxl font-[500] leading-8">عنوان تسک</span>
          <span className="inline-block size-4 bg-[#D9D9D9]"></span>
        </div>
      </div>
    </div>
  )
}

export default Calendar
