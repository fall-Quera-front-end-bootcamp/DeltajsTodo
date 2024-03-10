import { type Task } from '../../../../../utilities/models'
import ParagraphsIconSvg from '../../../../Common/Icons/ParagraphsIconSvg'
import Tag from '../Tags/Tag'

function TaskCard({ task }: { task: Task }): JSX.Element {
  return (
    <section className="flex flex-col gap-s rounded-2xl bg-[#ffff] p-4 shadow-[0px_2px_4px_0px_#00000066,0px_7px_6px_-3px_#0000004D,0px_-3px_0px_0px_#00000033_inset]">
      <img src={task.coverImg} alt="" className="w-full" />
      <div className="text-[12px] text-[#534D60]">{task.projectTitle}</div>
      <div className="flex flex-row">
        <div className="text-[12px]">{task.title}</div>
        <ParagraphsIconSvg className="size-3" />
      </div>
      <div className="flex w-full flex-row">
        {/* <Tag taskTags={task.tags} /> */}
      </div>
    </section>
  )
}
export default TaskCard
