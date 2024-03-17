/* eslint-disable multiline-ternary */
/* eslint-disable no-extra-boolean-cast */
/* eslint-disable tailwindcss/enforces-shorthand */
/* eslint-disable no-lone-blocks */
/* eslint-disable spaced-comment */
/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable react/no-unknown-property */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-interface */
import { useState, type FunctionComponent } from 'react'
import { useLocation } from 'react-router-dom'
import ColumnView from '../../components/MainPage/BoardComponents/BoardViews/ColumnView/ColumnView'
import RowView from '../../components/MainPage/BoardComponents/BoardViews/RowView/RowView'
import CalenderView from '../../components/MainPage/BoardComponents/BoardViews/CalenderView/CalenderView'
import { useGetProjectQuery } from '../../features/auth/authApiSlice'
import TopBar from '../../components/MainPage/BoardComponents/TopBoard/TopBar'
import LoadingComponent from '../../components/Common/LoadingComponent/LoadingComponent'
import FilterBar from '../../components/MainPage/BoardComponents/TopBoard/FilterBar'
import CalendarBar from '../../components/MainPage/BoardComponents/TopBoard/CalendarBar'

interface BoardProps {}
enum Views {
  column = 643,
  row = 802,
  calender = 541
}

const Board: FunctionComponent<BoardProps> = () => {
  // const { projectID } = useParams()

  const {
    state: { workspaceItemID, projectItemID }
  } = useLocation()

  const [view, setViw] = useState<Views>(Views.column)

  const handleView = (e: any): void => {
    setViw(() => Views[e?.target?.ariaLabel as keyof typeof Views])
  }

  const {
    data: project,
    isLoading,
    isError,
    isSuccess
  } = useGetProjectQuery({ workspace_id: workspaceItemID, id: projectItemID })

  if (isLoading) {
    return (
      <div className="flex h-screen w-full flex-col items-center justify-center">
        <LoadingComponent />
      </div>
    )
  } else if (isSuccess) {
    return (
      <>
        {/*Header */}
        <TopBar
          handleView={handleView}
          projectInfoTitle={project.name}
          view={view}
          WID={workspaceItemID}
          PID={projectItemID}
        />
        {view === Views.calender ? (
          <CalendarBar />
        ) : (
          <FilterBar WID={workspaceItemID} PID={projectItemID} />
        )}
        <>
          {view === Views.column && (
            <ColumnView PID={projectItemID} WID={workspaceItemID} />
          )}
          {view === Views.row && (
            <div className="flex flex-row items-start justify-end">
              <RowView WID={workspaceItemID} project={project} />
            </div>
          )}
          {view === Views.calender && (
            <CalenderView WID={workspaceItemID} PID={projectItemID} />
          )}
        </>
      </>
    )
  } else if (!!isError) {
    return (
      <>
        <p>error</p>
      </>
    )
  }
}

export default Board
