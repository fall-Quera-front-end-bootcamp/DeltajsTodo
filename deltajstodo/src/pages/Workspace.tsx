import { type FunctionComponent } from 'react'
import TaskInformation from '../components/TaskInformation/TaskInformation'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface WorkSpaceProps {}

const WorkSpace: FunctionComponent<WorkSpaceProps> = () => {
  return (
    <div className="flex justify-center items-center w-[100%] h-[100vh] bg-gray-dark">
      <TaskInformation />
    </div>
  )
}

export default WorkSpace
