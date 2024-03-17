import { useContext, useRef, useState } from 'react'
import DisabledIconSvg from '../../../../Common/Icons/DisabledIconSvg'
import BottomLeftSide from './BottomLeftSide'
import TaskInfoComment from './TaskInfoComment'
import TopLeftSide from './TopLeftSide'
// import TopRightSide from './TopRightSide'
import BottomRightSide from './BottomRightSide'
import { localPageDispatchContext } from '../../../../../contexts/LocalPageContextProvider'
import { useOnClickOutside } from 'usehooks-ts'
import TopRightSide from './TopRightSide'

interface TaskInfoProps {
  name?: string
  description?: string
  createAt?: string
  deadline?: string
  priority?: number
  WID?: number
  PID?: number
  BID?: number
  taskID?: number
}

function TaskInformation({
  name,
  createAt,
  description,
  deadline,
  priority,
  WID,
  PID,
  BID,
  taskID
}: TaskInfoProps): JSX.Element {
  const localPageDispatch: any = useContext(localPageDispatchContext)
  const [commentOpen, setCommentOpen] = useState(false)
  const [commentClassNames, setCommentClassNames] = useState('h-[87px]')
  const [bottomLeftHeight, setBottomLeftHeight] = useState('h-[439px]')
  // Click OutSide
  const bigDivRef = useRef(null)
  const handleClickOutside = (): void => {
    localPageDispatch({ type: 'closeModal' })
  }
  useOnClickOutside(bigDivRef, handleClickOutside)
  // Click OutSide
  // open comment
  const openComment = (): void => {
    if (!commentOpen) {
      setCommentClassNames('h-[249px] shadow-comment rounded-t-[12px]')
      setBottomLeftHeight('h-[297px]')
    } else {
      setCommentClassNames('h-[87px]')
      setBottomLeftHeight('h-[439px]')
    }
    setCommentOpen((prev) => !prev)
  }

  return (
    <div
      ref={bigDivRef}
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 "
    >
      {' '}
      <div className="relative overflow-hidden rounded-[20px] bg-white shadow-[0px_2px_4px_0px_#00000066,0px_7px_6px_-3px_#0000004D,0px_-3px_0px_0px_#00000033_inset]">
        {/* close icon */}
        <div className="w-full flex flex-row items-center justify-end p-6">
          <button
            onClick={() => {
              localPageDispatch({ type: 'closeModal' })
            }}
          >
            <DisabledIconSvg className="size-[24px] cursor-pointer" />
          </button>
        </div>
        {/* vertical line */}
        <div className="absolute left-[659px] top-[30px] z-10 h-[566px] w-[1px] border-r-[1px] border-[#F4F4F4]"></div>

        {/* main content */}
        <div className="relative top-[90px] flex h-[506px] w-[1316px]">
          {/* left side */}
          <div className="flex h-[506px] w-[659px] shrink-0 flex-col justify-between">
            <div
              className={`${bottomLeftHeight} flex flex-col gap-6 transition-all duration-700 ease-linear`}
            >
              <TopLeftSide createAt={createAt} deadline={deadline} />

              <hr className="border-[1px] border-[#F4F4F4]" />

              <BottomLeftSide />
            </div>

            <TaskInfoComment
              onClick={openComment}
              commentClassNames={commentClassNames}
            />
          </div>

          {/* right side */}
          <div className="flex w-[100%] flex-col gap-6">
            <TopRightSide
              WID={WID}
              PID={PID}
              BID={BID}
              taskID={taskID}
              priority={priority}
            />

            <hr className="border-[1px] border-[#F4F4F4]" />

            <BottomRightSide name={name} description={description} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TaskInformation
