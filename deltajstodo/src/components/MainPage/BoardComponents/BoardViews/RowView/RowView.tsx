/* eslint-disable @typescript-eslint/no-empty-interface */
import { type FunctionComponent } from 'react'
import Row from './Row'
import { type Board, type Project } from '../../../../../utilities/models'
import { useGetBoardsQuery } from '../../../../../features/auth/authApiSlice'

interface RowViewProps {
  WID: number
  project: Project
}

const RowView: FunctionComponent<RowViewProps> = ({ project, WID }) => {
  const { data: boards } = useGetBoardsQuery({
    workspace_id: WID,
    project_id: project?.id
  })
  return (
    <div className="flex h-screen w-full flex-col items-end justify-center overflow-hidden">
      <p className="mb-[31px] text-right text-[20px] font-extrabold leading-[32px] text-[#1E1E1E]">
        {project?.name}
      </p>

      <div className="flex flex-col gap-10 overflow-x-auto">
        {boards?.map((board: Board) => {
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
