/* eslint-disable @typescript-eslint/no-empty-interface */
import { type FunctionComponent } from 'react'
import { type Project } from '../../../../../utilities/models'
import LargTaskCard from '../../TaskAndCheckBox/LargTaskCard'
import Column from './Column'

interface ColumnViewProps {
  project: Project
}

const ColumnView: FunctionComponent<ColumnViewProps> = ({ project }) => {
  return (
    <div dir="rtl" className="flex flex-row">
      {project.boards.map((board) => {
        return (
          <Column key={board.id} title={board.title}>
            <div className="">
              <div className="flex flex-col">
                {board.tasks.map((task) => {
                  return (
                    <div key={task.id} className="">
                      <LargTaskCard title={task.title} />
                    </div>
                  )
                })}
              </div>
            </div>
          </Column>
        )
      })}
    </div>
  )
}

export default ColumnView
