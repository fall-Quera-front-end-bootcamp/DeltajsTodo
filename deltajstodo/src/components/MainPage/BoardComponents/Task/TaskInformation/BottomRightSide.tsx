import '../../../../dist/output.css'
import AddSecondaryIconSvg from '../../../../Common/Icons/AddSecondaryIconSvg'
import BookmarkTagIconSvg from '../../../../Common/Icons/BookmarkTagIconSvg'
function BottomRightSide(): JSX.Element {
  return (
    <div dir="rtl" className="flex flex-col gap-6 px-[20px]">
      <div className="flex items-center gap-4">
        <BookmarkTagIconSvg className="size-[34px] rounded-[50%] border-[0.94px] border-dashed border-[#C1C1C1] p-[4.53px]" />

        <span className="h-[24px] rounded-[35px] bg-[#FFE8CC] px-[8px] py-[5px] text-[12px] font-extrabold leading-[16.91px] text-[#FD7E14]">
          میان ترم
        </span>
      </div>

      <div className="flex flex-col gap-2">
        <span className="text-[24px] font-extrabold leading-[32px]">
          عنوان تسک
        </span>

        <div className="rounded-xl border-[1px] border-[#C1C1C1] p-[12px]">
          <span className="text-[16px] font-medium leading-[22.55px]">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
          </span>
        </div>
      </div>

      <div className="flex items-center gap-1">
        <AddSecondaryIconSvg color="#208D8E" className="size-[24px]" />
        <span className="text-[12px] font-normal leading-[16.91px] text-brand-primary">
          اضافه کردن پیوست
        </span>
      </div>
    </div>
  )
}

export default BottomRightSide
