import '../../dist/output.css'
import BordMoreOption from './BordMoreOption'

function BoradMore (): JSX.Element {
  return (
    <div
      dir="rtl"
      className="flex w-max flex-col gap-4 rounded-lg bg-[white] p-3"
    >
      <BordMoreOption color="text-[black]" text="ویرایش نام ستون" type="edit" />
      <BordMoreOption color="text-[black]" text="افزودن تسک" type="add" />
      <BordMoreOption
        color="text-[black]"
        text="آرشیو تمام تسک‌ها"
        type="archive"
      />
      <BordMoreOption color="text-[#FA5252]" text="حذف ستون" type="remove" />
    </div>
  )
}

export default BoradMore
