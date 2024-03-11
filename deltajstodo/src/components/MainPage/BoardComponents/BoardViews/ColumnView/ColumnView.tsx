/* eslint-disable @typescript-eslint/no-empty-interface */
import { useState, type FunctionComponent } from 'react'
import { type Project } from '../../../../../utilities/models'
import TaskCard from '../../Task/TaskCard/TaskCard'
import Column from './ColumnComponents/Column'
import BuildTaskButtonPrimary from '../../Task/BuildTaskButtons/BuildTaskButtonPrimary'
import NewColumn from './ColumnComponents/NewColumn'
import NewTask from '../../Task/NewTask/NewTask'
import TaskInformation from '../../Task/TaskInformation/TaskInformation'

interface ColumnViewProps {
  project: Project
}

const ColumnView: FunctionComponent<ColumnViewProps> = ({ project }) => {
  const [showNewTask, setShowNewTask] = useState(false)
  const [showNewTaskBoard, setShowNewTaskBoard] = useState(false)
  const [showTaskInfo, setShowTaskInfo] = useState(false)
  const handleNewTask = (): void => {
    setShowNewTask((p) => !p)
    setShowNewTaskBoard((p) => !p)
    console.log('سلام مبین')
  }
  const handleNewTaskBoard = (): void => {
    setShowNewTaskBoard((p) => !p)
    setShowNewTask((p) => !p)
  }
  const handleTaskInfo = (): void => {
    setShowTaskInfo((p) => !p)
  }

  return (
    <div dir="rtl" className={`flex flex-row gap-4 ${showNewTask ? '' : ''}`}>
      {project.boards.length === 0
        ? (
        <></>
          )
        : (
            project.boards.map((board) => {
              return (
            <>
              <Column
                handleNewTask={handleNewTask}
                key={board.id}
                board={board}
              >
                <>
                  <div className="flex flex-col gap-3">
                    {board.tasks.map((task) => {
                      return (
                        <>
                          <TaskCard
                            key={task.id}
                            onClick={handleTaskInfo}
                            task={task}
                          />
                          {showTaskInfo ? <TaskInformation handleTaskInfo={handleTaskInfo} task={task} /> : <></>}
                        </>
                      )
                    })}
                  </div>
                  <BuildTaskButtonPrimary
                    className="hidden w-full flex-row-reverse items-center justify-center gap-1 rounded-lg border-2 border-brand-primary px-3 py-2 text-brand-primary group-hover:flex"
                    IconColor="#208D8E"
                    title="ساختن تسک جدید"
                    onClick={handleNewTaskBoard}
                  />
                </>
              </Column>
              {showNewTaskBoard
                ? (
                <NewTask
                  boardId={board.id}
                  project={project}
                  handle={handleNewTask}
                />
                  )
                : (
                <></>
                  )}
            </>
              )
            })
          )}
      <NewColumn />
      <BuildTaskButtonPrimary
        className="absolute bottom-[30px] left-[50px] flex flex-row-reverse gap-1 rounded-md bg-brand-primary p-2 text-white"
        IconColor="#ffffff"
        title="تسک جدید"
        onClick={handleNewTask}
      />

      {showNewTask
        ? (
        <NewTask project={project} handle={handleNewTask} />
          )
        : (
        <></>
          )}
    </div>
  )
}

export default ColumnView
