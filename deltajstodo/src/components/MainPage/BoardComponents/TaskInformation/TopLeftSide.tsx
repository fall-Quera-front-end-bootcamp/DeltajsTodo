import '../../../../dist/output.css'
function TopLeftSide (): JSX.Element {
  return (
    <div dir="rtl" className="flex gap-6 pl-[36px] pr-[20px]">
      <div className="flex flex-col gap-2">
        <span className="text-[12px] font-normal leading-[16.91px] text-[#BBBBBB]">
          ساخته شده در
        </span>

        <span className="text-[16px] font-medium leading-[22.55px]">
          ۱ اردیبهشت ۱۴۰۲
        </span>
      </div>

      <div className="h-[57px] w-[1px] border-[1px] border-[#F4F4F4]"></div>

      <div className="flex flex-col gap-2">
        <span className="text-[12px] font-normal leading-[16.91px] text-[#BBBBBB]">
          ددلاین
        </span>

        <span className="text-[16px] font-medium leading-[22.55px]">
          پس‌فردا
        </span>
      </div>
    </div>
  )
}

export default TopLeftSide
