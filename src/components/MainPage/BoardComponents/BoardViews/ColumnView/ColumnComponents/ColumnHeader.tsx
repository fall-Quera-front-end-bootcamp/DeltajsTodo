/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable @typescript-eslint/no-confusing-void-expression */
import { useState, type FunctionComponent, useContext } from 'react'
import AddIconSvg from '../../../../../Common/Icons/AddIconSvg'
import DotsMenuIconSvg from '../../../../../Common/Icons/DotsMenuIconSvg'
import { type Board } from '../../../../../../utilities/models'
import { toFarsiNumber } from '../../../../../../utilities/toFarsiNumber'
import BoradMore from '../../../Column-more/BoardMore'
import AddTaskLableSvg from '../../../../../Common/Icons/AddTaskLableSvg'
import { localPageDispatchContext } from '../../../../../../contexts/LocalPageContextProvider'
import { DarkModeContext } from '../../../../../../contexts/DarkModeContextProvider'

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
  const localPageDispatch: any = useContext(localPageDispatchContext)
  const [columnMore, setColumnMore] = useState(false)
  const [ishover, setHover] = useState(false)
  const { darkTheme } = useContext(DarkModeContext)
  return (
    <div dir="rtl" className="group relative pt-10 ">
      <div
        className={`absolute bottom-[40px] left-[-23px] ${ishover ? 'opacity-1' : 'opacity-0'}`}
      >
        <AddTaskLableSvg
          pathColor={darkTheme === 'dark' ? 'black' : '#000'}
          color={darkTheme === 'dark' ? '#ffffff' : '#000'}
        />
      </div>
      <div
        className="relative flex min-h-9 w-[270px] flex-row items-center justify-between rounded-[16px]  border-t-[2px] px-[12px] py-[8x] shadow-[0_3px_4px_0] shadow-[#00000033]"
        style={{ borderColor: board?.color }}
      >
        {' '}
        <div className="flex w-full flex-row items-center justify-start gap-[4px]">
          <p className="max-w-[170px] text-right text-boldm leading-[22.55px] text-[#1E1E1E] dark:text-white">
            {board.name}
          </p>{' '}
          <div className="rounded-lg bg-gray-secondary px-1">
            {toFarsiNumber(String(board?.tasks_count))}
          </div>
        </div>
        <div className="invisible  flex w-[48px] flex-row gap-[4px] group-hover:visible ">
          <div onClick={() => setColumnMore((p) => !p)}>
            <DotsMenuIconSvg />
          </div>
          <div
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onClick={() => {
              localPageDispatch({ type: 'openNewTask', WID, PID, BID })
            }}
          >
            <AddIconSvg className="cursor-pointer" />
          </div>
          <div className="relative">
            <div
              className="absolute right-[-100px] top-[20px]"
              onMouseLeave={() => setColumnMore(false)}
            >
              {columnMore && (
                <BoradMore board={board} WID={WID} PID={PID} BID={BID} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ColumnHeader
