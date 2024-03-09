/* eslint-disable @typescript-eslint/no-empty-interface */
import { type FunctionComponent } from 'react'
import { type Project } from '../../../../../utilities/models'
import TaskCard from '../../Task/TaskCard/TaskCard'
import Column from './ColumnComponents/Column'
import BuildTaskButtonPrimary from '../../Task/BuildTaskButtons/BuildTaskButtonPrimary'
import NewTask from '../../Task/NewTask/NewTask'

interface ColumnViewProps {
  project: Project
}

const ColumnView: FunctionComponent<ColumnViewProps> = ({ project }) => {
  return (
    <div dir="rtl" className="flex flex-row gap-4">
      {project.boards.map((board) => {
        return (
          <Column key={board.id} board={board}>
            <>
              <div className="flex flex-col gap-3">
                {board.tasks.map((task) => {
                  return (
                    <div key={task.id} className="">
                      <TaskCard task={task} />
                    </div>
                  )
                })}
              </div>
            </>
          </Column>
        )
      })}
      <BuildTaskButtonPrimary
        className="absolute bottom-[30px] left-[50px] flex flex-row-reverse gap-1 rounded-md bg-brand-primary p-2 text-white"
        IconColor="#ffffff"
      />
    </div>
  )
}

export default ColumnView
