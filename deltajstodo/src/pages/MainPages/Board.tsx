/* eslint-disable tailwindcss/enforces-shorthand */
/* eslint-disable no-lone-blocks */
/* eslint-disable spaced-comment */
/* eslint-disable tailwindcss/classnames-order */
/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable react/no-unknown-property */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-interface */
import { useState, type FunctionComponent, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import ColumnView from '../../components/MainPage/BoardComponents/BoardViews/ColumnView/ColumnView'
import RowView from '../../components/MainPage/BoardComponents/BoardViews/RowView/RowView'
import CalenderView from '../../components/MainPage/BoardComponents/BoardViews/CalenderView/CalenderView'
import TopBar from '../../components/MainPage/BoardComponents/TopBar/TopBar'
import { useGetProjectQuery } from '../../features/auth/authApiSlice'
import { useAtom } from 'jotai'
import { IDS } from './MainLayout'
interface BoardProps {}
export enum Views {
  column = 643,
  row = 802,
  calender = 541
}
const Board: FunctionComponent<BoardProps> = () => {
  const {
    state: { workspaceItemID, projectItemID }
  } = useLocation()

  const [ids, setids] = useAtom(IDS)

  useEffect(() => {
    setids({ workspaceID: workspaceItemID, projectID: projectItemID })
  }, [])

  const [view, setViw] = useState<Views>(Views.column)

  const handleView = (e: any): void => {
    setViw(() => Views[e?.target?.ariaLabel as keyof typeof Views])
  }

  // Api Data ================

  const {
    data: project,
    isLoading,
    isError,
    isSuccess,
    error
  } = useGetProjectQuery({ workspace_id: workspaceItemID, id: projectItemID })

  if (isLoading) {
    return (
      <>
        <p>loading...</p>
      </>
    )
  } else if (isSuccess) {
    return (
      <>
        {/*Header */}
        <TopBar
          handleView={handleView}
          view={view}
          projectInfoTitle={project.title}
        />

        <div className="flex items-center justify-end">
          {view === Views.column && <ColumnView project={project} />}
          {view === Views.row && <RowView project={project} />}
          {view === Views.calender && <CalenderView project={project} />}
        </div>
      </>
    )
  } else if (isError) {
    return (
      <>
        <p>error</p>
      </>
    )
  }
}

export default Board
