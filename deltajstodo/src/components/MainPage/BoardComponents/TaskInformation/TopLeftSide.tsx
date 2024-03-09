import '../../dist/output.css'
function TopLeftSide(): JSX.Element {
  return (
    <div dir="rtl" className="flex gap-6 pr-[20px] pl-[36px]">
      <div className="flex flex-col gap-2">
        <span className="font-normal text-[12px] leading-[16.91px] text-[#BBBBBB]">
          ساخته شده در
        </span>

        <span className="font-medium text-[16px] leading-[22.55px]">
          ۱ اردیبهشت ۱۴۰۲
        </span>
      </div>

      <div className="w-[1px] h-[57px] border-[1px] border-[#F4F4F4]"></div>

      <div className="flex flex-col gap-2">
        <span className="font-normal text-[12px] leading-[16.91px] text-[#BBBBBB]">
          ددلاین
        </span>

        <span className="font-medium text-[16px] leading-[22.55px]">
          پس‌فردا
        </span>
      </div>
    </div>
  )
}

export default TopLeftSide
