import '../../dist/output.css'
import ShareButton from '../Buttons/ShareButton'
import TaskMoreOption from './TaskMoreOption'

function TaskMore(): JSX.Element {
  return (
    <div
      dir="rtl"
      className="bg-[white] p-3 rounded-lg flex flex-col gap-4 w-[184px]"
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
