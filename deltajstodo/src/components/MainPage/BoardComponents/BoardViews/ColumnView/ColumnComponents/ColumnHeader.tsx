/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable @typescript-eslint/no-confusing-void-expression */
import { useState, type FunctionComponent } from 'react'
import AddIconSvg from '../../../../../Common/Icons/AddIconSvg'
import DotsMenuIconSvg from '../../../../../Common/Icons/DotsMenuIconSvg'
import { type Board } from '../../../../../../utilities/models'
import { toFarsiNumber } from '../../../../../../utilities/toFarsiNumber'
import BoradMore from '../../../Column-more/BoardMore'
import AddTaskLableSvg from '../../../../../Common/Icons/AddTaskLableSvg'

/* eslint-disable @typescript-eslint/no-empty-interface */
interface ColumnHeaderProps {
  WID: number
  PID: number
  BID: number
  board: Board
}

const ColumnHeader: FunctionComponent<ColumnHeaderProps> = ({
  WID,
  PID,
  BID,
  board
}) => {
  const [columnMore, setColumnMore] = useState(false)
  const [ishover, setHover] = useState(false)

  return (
    <button className="group relative pt-10">
      <div
        className={`absolute bottom-[40px] left-[-23px] ${ishover ? 'opacity-1' : 'opacity-0'}`}
      >
        <AddTaskLableSvg />
      </div>
      <div
        className={` relative flex h-[40px] w-[270px] flex-row items-center justify-between
              rounded-[16px] border-t-[2px]  px-[12px] py-[8x] shadow-[0_3px_4px_0] shadow-[#00000033] `}
        style={{ borderColor: board?.color }}
      >
        <div className="invisible  flex h-[24px] w-[48px] flex-row gap-[4px] group-hover:visible ">
          <button
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            <AddIconSvg />
          </button>
          <button onClick={() => setColumnMore(true)}>
            <DotsMenuIconSvg />
          </button>
          <div className="relative">
            <div
              className="absolute right-[-100px] top-[20px]"
              onMouseLeave={() => setColumnMore(false)}
            >
              {columnMore && <BoradMore WID={WID} PID={PID} BID={BID} />}
            </div>
          </div>
        </div>
        <div className="flex w-full flex-row items-center justify-end gap-[4px]">
          <div className="rounded-lg bg-gray-secondary px-1">
            {toFarsiNumber(String(board?.tasks.length))}
          </div>

          <p className="text-right text-boldm leading-[22.55px] text-[#1E1E1E]">
            {board.name}
          </p>
        </div>
      </div>
    </button>
  )
}

export default ColumnHeader
