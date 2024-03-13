import { type Task } from '../../../../../utilities/models'
import { toFarsiNumber } from '../../../../../utilities/toFarsiNumber'
import ParagraphsIconSvg from '../../../../Common/Icons/ParagraphsIconSvg'
import moment from 'jalali-moment'

function TaskCard({ task }: { task: Task }): JSX.Element {
  moment.locale('fa', { useGregorianParser: true })
  const deadline = moment(task?.deadline).format('DD / MM')

  return (
    <section
      dir="rtl"
      className="flex w-full flex-col gap-s rounded-2xl bg-[#ffff] p-4 shadow-[0px_2px_4px_0px_#00000066,0px_7px_6px_-3px_#0000004D,0px_-3px_0px_0px_#00000033_inset]"
    >
      {/* <img src={task.thumbnail} alt="" className="w-full" /> */}
      <div className="text-[12px] text-[#534D60]">{task.name}</div>
      <div className="flex flex-row">
        <div className="text-[12px]">{task?.description}</div>
        <ParagraphsIconSvg className="size-3" />
      </div>
      <div className="text-gray-primary">{toFarsiNumber(deadline)}</div>
    </section>
  )
}
export default TaskCard
