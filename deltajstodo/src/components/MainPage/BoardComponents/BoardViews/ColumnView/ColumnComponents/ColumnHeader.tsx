/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable @typescript-eslint/no-confusing-void-expression */
import { useState, type FunctionComponent } from 'react'
import AddTaskLabelSvg from '../../../../../Common/Icons/AddTaskLableSvg'
import AddIconSvg from '../../../../../Common/Icons/AddIconSvg'
import DotsMenuIconSvg from '../../../../../Common/Icons/DotsMenuIconSvg'
import { type Board } from '../../../../../../utilities/models'
import { toFarsiNumber } from '../../../../../../utilities/toFarsiNumber'

/* eslint-disable @typescript-eslint/no-empty-interface */
interface ColumnHeaderProps {
  board?: Board
}

const ColumnHeader: FunctionComponent<ColumnHeaderProps> = ({ board }) => {
  const [columnMore, setColumnMore] = useState(false)

  return (
    <button dir="ltr" className="group relative">
      <div
        className={`absolute left-[-22.5px] top-[-15px] z-50  ${columnMore ? 'opacity-1' : 'opacity-0'}`}
      >
        <AddTaskLabelSvg />
      </div>
      <div
        className={`relative flex h-[40px] w-[250px] flex-row items-center justify-between rounded-[16px] border-t-[2px] ${board?.color}  px-[12px] py-[8x] shadow-[0_3px_4px_0] shadow-[#00000033]`}
      >
        <div className="invisible  flex h-[24px] w-[48px] flex-row gap-[4px] group-hover:visible ">
          <button
            onMouseEnter={() => setColumnMore(true)}
            onMouseLeave={() => setColumnMore(false)}
          >
            <AddIconSvg />
          </button>

          <DotsMenuIconSvg />
        </div>
        <div className="flex w-full flex-row items-center justify-end gap-[4px]">
          <div className="rounded-lg bg-gray-secondary px-1">
            {toFarsiNumber(String(board?.tasks.length))}
          </div>
          <p className="text-right text-boldm leading-[22.55px] text-[#1E1E1E]">
            {board?.title}
          </p>
        </div>
      </div>
    </button>
  )
}

export default ColumnHeader
