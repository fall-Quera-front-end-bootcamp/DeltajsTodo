/* eslint-disable tailwindcss/enforces-shorthand */
/* eslint-disable no-lone-blocks */
/* eslint-disable spaced-comment */
/* eslint-disable tailwindcss/classnames-order */
/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable react/no-unknown-property */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-interface */
import { useState, type FunctionComponent } from 'react'
import { useLocation } from 'react-router-dom'
import ColumnView from '../../components/MainPage/BoardComponents/BoardViews/ColumnView/ColumnView'
import RowView from '../../components/MainPage/BoardComponents/BoardViews/RowView/RowView'
import CalenderView from '../../components/MainPage/BoardComponents/BoardViews/CalenderView/CalenderView'
import TopBar from '../../components/MainPage/BoardComponents/TopBar/TopBar'
interface BoardProps {}
export enum Views {
  column = 643,
  row = 802,
  calender = 541
}
const Board: FunctionComponent<BoardProps> = () => {
  const {
    state: { project }
  } = useLocation()

  const [view, setViw] = useState<Views>(Views.column)

  const handleView = (e: any): void => {
    setViw(() => Views[e?.target?.ariaLabel as keyof typeof Views])
  }

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
}

export default Board
