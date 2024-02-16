import '../../dist/output.css'
import ShareButton from '../Buttons/ShareButton'
import TaskMoreOption from './TaskMoreOption'

function TaskMore (): JSX.Element {
  return (
    <div
      dir="rtl"
      className="flex w-[184px] flex-col gap-4 rounded-lg bg-[white] p-3"
    >
      <TaskMoreOption
        color="text-[black]"
        text="ساختن تسک جدید"
        type="addTask"
      />
      <TaskMoreOption
        color="text-[black]"
        text="ویرایش نام پروژه"
        type="editProjectName"
      />
      <TaskMoreOption color="text-[black]" text="کپی لینک" type="linkCopy" />
      <TaskMoreOption color="text-[#FA5252]" text="حذف" type="remove" />
      <ShareButton />
    </div>
  )
}

export default TaskMore
