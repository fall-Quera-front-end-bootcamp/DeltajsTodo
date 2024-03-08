/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable @typescript-eslint/no-confusing-void-expression */
import { useState, type FunctionComponent } from 'react'
import AddTaskLableSvg from '../../Icons/AddTaskLableSvg'
import AddIconSvg from '../../Icons/AddIconSvg'
import DotsMenuIconSvg from '../../Icons/DotsMenuIconSvg'
import { type Board } from '../../../utilities/models'

/* eslint-disable @typescript-eslint/no-empty-interface */
interface ColumnHeaderProps {
  board: Board
}

const ColumnHeader: FunctionComponent<ColumnHeaderProps> = ({ board }) => {
  const [columnMore, setColumnMore] = useState(false)

  return (
    <>
      <div className="relative mt-[30px] ml-[23px] w-[273px] ">
        <button className="group">
          <div
            className={`z-100 absolute left-[-22.5px] top-[-15px]  ${columnMore ? 'opacity-1' : 'opacity-0'}`}
          >
            <AddTaskLableSvg />
          </div>
          <div
            className={` relative flex h-[40px] w-[250px] flex-row items-center justify-between rounded-[16px] border-t-[2px] border-[${board.color}]  px-[12px] py-[8x] shadow-[0_3px_4px_0] shadow-[#00000033]`}
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
            <div className="flex h-[23px] w-[125px] flex-row gap-[4px]">
              <p className="font-yekan h-[23px] w-[125px] text-right text-[16px] font-medium leading-[22.55px] text-[#1E1E1E]">
                {board.title}
              </p>
            </div>
          </div>
        </button>
      </div>
    </>
  )
}

export default ColumnHeader
