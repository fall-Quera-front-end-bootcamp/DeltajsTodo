/* eslint-disable @typescript-eslint/no-confusing-void-expression */
import { type FunctionComponent } from 'react'

import { type Board, type Task as T } from '../../../utilities/models'
import LargTaskCard from '../../TaskAndCheckBox/LargTaskCard'
import ColumnHeader from './ColumnHeader'

/* eslint-disable @typescript-eslint/no-empty-interface */
interface ColumnProps {
  board: Board
}

const Column: FunctionComponent<ColumnProps> = ({ board }) => {
  return (
    <>
      <div className="h-[100vh] overflow-y-scroll ">
        <div className="z-10">
          <ColumnHeader board={board} />
        </div>
        <div className="flex flex-col gap-[16px] items-center">
          {board.tasks.map((t: T) => {
            return <LargTaskCard key={t.id} />
          })}
        </div>
      </div>
    </>
  )
}

export default Column
