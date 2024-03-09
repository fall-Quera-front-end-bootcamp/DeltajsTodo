import { type FunctionComponent } from 'react'
import ColumnHeader from './ColumnHeader'
import { type Board } from '../../../../../../utilities/models'

/* eslint-disable @typescript-eslint/no-empty-interface */
interface ColumnProps {
  board: Board
  children: JSX.Element
}

const Column: FunctionComponent<ColumnProps> = ({ board, children }) => {
  return (
    <div className="flex flex-col gap-4">
      <ColumnHeader board={board} />
      {children}
    </div>
  )
}

export default Column
