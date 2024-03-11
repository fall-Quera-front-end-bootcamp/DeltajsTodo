import { type FunctionComponent } from 'react'
import ColumnHeader from './ColumnHeader'
import { type Board } from '../../../../../../utilities/models'

/* eslint-disable @typescript-eslint/no-empty-interface */
interface ColumnProps {
  board: Board
  children: JSX.Element
  handleNewTask: () => void
}

const Column: FunctionComponent<ColumnProps> = ({ board, children, handleNewTask }) => {
  return (
    <div className="group flex min-h-[400px] flex-col gap-4">
      <ColumnHeader handleNewTask={handleNewTask} board={board} />
      {children}
    </div>
  )
}

export default Column
