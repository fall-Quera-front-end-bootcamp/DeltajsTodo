import { type ReactElement } from 'react'
import PriorityFlag from '../../../../../Common/Icons/PriorityFlag'

export const taskPriority = (
  num: number | undefined,
  className?: string
): ReactElement<any, any> => {
  if (num === 1) {
    return <PriorityFlag color="#82C91E" className={className} />
  } else if (num === 2) {
    return <PriorityFlag color="#15AABF" className={className} />
  } else if (num === 3) {
    return <PriorityFlag color="#FAB005" className={className} />
  } else if (num === 4) {
    return <PriorityFlag color="#FA5252" className={className} />
  } else {
    return <PriorityFlag color="#C1C1C1" className={className} />
  }
}
