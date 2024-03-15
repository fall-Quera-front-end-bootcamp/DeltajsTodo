/* eslint-disable no-extra-boolean-cast */
/* eslint-disable tailwindcss/enforces-shorthand */
/* eslint-disable no-lone-blocks */
/* eslint-disable spaced-comment */
/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable react/no-unknown-property */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-interface */
import { useState, type FunctionComponent, useContext, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import ColumnView from '../../components/MainPage/BoardComponents/BoardViews/ColumnView/ColumnView'
import RowView from '../../components/MainPage/BoardComponents/BoardViews/RowView/RowView'
import CalenderView from '../../components/MainPage/BoardComponents/BoardViews/CalenderView/CalenderView'
import { useGetProjectQuery } from '../../features/auth/authApiSlice'
import { localPageDispatchContext } from '../../contexts/LocalPageContextProvider'
import TopBar from '../../components/MainPage/BoardComponents/TopBar/TopBar'
import LoadingComponent from '../../components/Common/LoadingComponent/LoadingComponent'
import ClickDargToScroll from '../../utilities/ClickDargToScroll'

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
        />

        <>
          {view === Views.column && (
            <ColumnView
              project={project}
              PID={projectItemID}
              WID={workspaceItemID}
            />
          )}
          {view === Views.row && (
            <div className="flex flex-row items-start justify-end">
              <RowView WID={workspaceItemID} project={project} />
            </div>
          )}
          {view === Views.calender && (
            <CalenderView
              WID={workspaceItemID}
              PID={projectItemID}
              project={project}
            />
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
