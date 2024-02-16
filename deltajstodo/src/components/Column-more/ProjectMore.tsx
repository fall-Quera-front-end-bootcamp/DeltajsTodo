import '../../dist/output.css'
import ShareButton from '../Buttons/ShareButton'
import ProjectMoreOption from './ProjectMoreOption'

function ProjectMore (): JSX.Element {
  return (
    <div
      dir="rtl"
      className="flex w-[193px] flex-col gap-4 rounded-lg bg-[white] p-3"
    >
      <ProjectMoreOption
        color="text-[black]"
        text="ساختن پروژه جدید"
        type="addProject"
      />
      <ProjectMoreOption
        color="text-[black]"
        text="ویرایش نام ورک‌اسپیس"
        type="editWordkSpace"
      />
      <ProjectMoreOption
        color="text-[black]"
        text="ویرایش رنگ"
        type="editColor"
      />
      <ProjectMoreOption color="text-[black]" text="کپی لینک" type="linkCopy" />
      <ProjectMoreOption color="text-[#FA5252]" text="حذف" type="remove" />
      <ShareButton />
    </div>
  )
}

export default ProjectMore
