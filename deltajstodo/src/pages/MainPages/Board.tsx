/* eslint-disable no-extra-boolean-cast */
/* eslint-disable tailwindcss/enforces-shorthand */
/* eslint-disable no-lone-blocks */
/* eslint-disable spaced-comment */
/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable react/no-unknown-property */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-interface */
import { useState, type FunctionComponent, useContext } from 'react'
import { useLocation } from 'react-router-dom'
import ColumnView from '../../components/MainPage/BoardComponents/BoardViews/ColumnView/ColumnView'
import RowView from '../../components/MainPage/BoardComponents/BoardViews/RowView/RowView'
import CalenderView from '../../components/MainPage/BoardComponents/BoardViews/CalenderView/CalenderView'
import { useGetProjectQuery } from '../../features/auth/authApiSlice'
import { localPageDispatchContext } from '../../contexts/LocalPageContextProvider'
import TopBar from '../../components/MainPage/BoardComponents/TopBar/TopBar'

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
  const localPageDispatch: any = useContext(localPageDispatchContext)

  const handleView = (e: any): void => {
    //console.log(e?.target?.ariaLabel)
    setViw(() => Views[e?.target?.ariaLabel as keyof typeof Views])
  }
  ////////////////////////////////////////////////////////////////////
  const {
    data: project,
    isLoading,
    isError,
    isSuccess,
    error
  } = useGetProjectQuery({ workspace_id: workspaceItemID, id: projectItemID })

  /////////////////////////////////////////////////////////////////////

  if (!!isLoading) {
    return (
      <>
        <p>loading...</p>
      </>
    )
  } else if (!!isSuccess) {
    return (
      <>
        {/*Header */}
        <TopBar
          handleView={handleView}
          projectInfoTitle={project.name}
          view={view}
        />

        <div className="flex items-center justify-end overflow-hidden">
          {view === Views.column && (
            <ColumnView
              project={project}
              PID={projectItemID}
              WID={workspaceItemID}
            />
          )}
          {view === Views.row && (
            <RowView WID={workspaceItemID} project={project} />
          )}
          {view === Views.calender && (
            <CalenderView
              WID={workspaceItemID}
              PID={projectItemID}
              project={project}
            />
          )}
        </div>
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
