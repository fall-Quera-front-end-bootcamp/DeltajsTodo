/* eslint-disable @typescript-eslint/no-empty-interface */
import { type FunctionComponent } from 'react'
import { type Project } from '../../../../../utilities/models'
import LargTaskCard from '../../TaskAndCheckBox/LargTaskCard'

interface ColumnViewProps {
  project: Project
}

const ColumnView: FunctionComponent<ColumnViewProps> = ({ project }) => {
  return (
    <div dir="rtl" className="flex flex-row">
      {project.boards.map((board) => {
        return (
          <div key={board.id} className="">
            <h1 className="">{board.title}</h1>
            <div className="flex flex-col">
              {board.tasks.map((task) => {
                return (
                  <div key={task.id} className="">
                    {task.title}
                    <LargTaskCard />
                  </div>
                )
              })}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default ColumnView
