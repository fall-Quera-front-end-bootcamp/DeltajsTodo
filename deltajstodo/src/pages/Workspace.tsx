import { useState, type FunctionComponent } from 'react'

import TaskMore from '../components/Column-more/TaskMore'
import BoradMore from '../components/Column-more/BoardMore'
import ProjectMore from '../components/Column-more/ProjectMore'
import Priority from '../components/Priority/Priority'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface WorkSpaceProps {}

const WorkSpace: FunctionComponent<WorkSpaceProps> = () => {
  return (
    <div className="flex items-start gap-3 w-[100%] h-[100vh] bg-gray-dark">
      <Priority />
      <BoradMore />
      <ProjectMore />
      <TaskMore />
    </div>
  )
}

export default WorkSpace
