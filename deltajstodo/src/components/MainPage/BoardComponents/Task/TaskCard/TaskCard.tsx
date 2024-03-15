/* eslint-disable tailwindcss/no-custom-classname */
import { useContext } from 'react'
import { type Task } from '../../../../../utilities/models'
import { toFarsiNumber } from '../../../../../utilities/toFarsiNumber'
import DotsMenuIconSvg from '../../../../Common/Icons/DotsMenuIconSvg'
import ParagraphsIconSvg from '../../../../Common/Icons/ParagraphsIconSvg'
import moment from 'jalali-moment'
import { localPageDispatchContext } from '../../../../../contexts/LocalPageContextProvider'

function TaskCard({ task }: { task: Task }): JSX.Element {
  moment.locale('fa', { useGregorianParser: true })
  const deadline = moment(task?.deadline).format('DD / MM')
  const localPageDispatch: any = useContext(localPageDispatchContext)

  return (
    <section
      dir="rtl"
      className="group-1 flex w-full flex-col gap-s rounded-2xl bg-[#ffff] p-4 shadow-[0px_2px_4px_0px_#00000066,0px_7px_6px_-3px_#0000004D,0px_-3px_0px_0px_#00000033_inset] transition-all duration-1000"
    >
      <button
        onClick={() => {
          localPageDispatch({ type: 'openTaskInfo' })
        }}
        className="flex w-full flex-col gap-s"
      >
        <div className="text-[12px] text-[#534D60]">{task.name}</div>
        <div className="flex flex-row gap-2">
          <div className="text-[12px]">
            {task?.description?.slice(0, 20)}...
          </div>
          <ParagraphsIconSvg className="size-3" />
        </div>
        <div className="text-gray-primary">{toFarsiNumber(deadline)}</div>
      </button>
      <div className="hidden w-full flex-row items-center justify-between border-t-2 border-gray-primary transition-all duration-700 group-1-hover:flex">
        <DotsMenuIconSvg />
      </div>
    </section>
  )
}
export default TaskCard
