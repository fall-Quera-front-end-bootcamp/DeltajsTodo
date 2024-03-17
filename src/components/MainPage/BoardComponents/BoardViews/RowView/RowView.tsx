/* eslint-disable @typescript-eslint/no-empty-interface */
import { type FunctionComponent } from 'react'
import Row from './Row'
import { type Board, type Project } from '../../../../../utilities/models'
import { useGetBoardsQuery } from '../../../../../features/auth/authApiSlice'
import LoadingComponent from '../../../../Common/LoadingComponent/LoadingComponent'

interface RowViewProps {
  WID: number
  project: Project
}

const RowView: FunctionComponent<RowViewProps> = ({ project, WID }) => {
  const {
    data: boards,
    isLoading,
    isSuccess,
    isError
  } = useGetBoardsQuery({
    workspace_id: WID,
    project_id: project?.id
  })
  if (isLoading) {
    return (
      <div className="">
        <LoadingComponent />
      </div>
    )
  } else if (isSuccess) {
    return (
      <div className="mt-[33px] flex h-[70vh] w-full max-w-[1400px] flex-col items-end justify-start overflow-auto pl-8 scrollbar-thin scrollbar-track-gray-secondary">
        <p className="mb-[31px] text-right text-[20px] font-extrabold leading-[32px] text-[#1E1E1E] dark:text-white">
          {project?.name}
        </p>

        <div className="flex w-full flex-col gap-10 overflow-x-auto">
          {boards?.map((board: Board) => {
            return (
              <div key={board.id}>
                <Row board={board} BID={project?.id} WID={WID} />
              </div>
            )
          })}
        </div>
      </div>
    )
  } else if (isError) {
    return <div className="">Error</div>
  }
}

export default RowView
