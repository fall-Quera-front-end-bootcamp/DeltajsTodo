/* eslint-disable @typescript-eslint/no-empty-interface */
import { type FunctionComponent } from 'react'
import TaskInformation from '../components/TaskInformation/TaskInformation'

interface TaskInformationPageProps {}

const TaskInformationPage: FunctionComponent<TaskInformationPageProps> = () => {
  return (
    <div className="flex justify-center items-center w-[100%] h-[100vh] bg-gray-dark">
      <TaskInformation />
    </div>
  )
}

export default TaskInformationPage
