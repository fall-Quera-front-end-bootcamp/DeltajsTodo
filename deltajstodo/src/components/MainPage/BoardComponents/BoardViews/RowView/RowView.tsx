/* eslint-disable @typescript-eslint/no-empty-interface */
import { type FunctionComponent } from 'react'
import Row from './Row'
import { type Board, type Project } from '../../../../../utilities/models'

interface RowViewProps {
  project: Project
}

const RowView: FunctionComponent<RowViewProps> = ({ project }) => {
  return (
    <div className="flex flex-col items-end justify-center">
      <p className="mb-[31px] text-right text-[20px] font-extrabold leading-[32px] text-[#1E1E1E]">
        {project?.title}
      </p>

      <div className="flex flex-col gap-10">
        {project.boards.map((board: Board) => {
          return (
            <div key={board.id}>
              <Row board={board} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default RowView
