import { useState } from 'react'
import '../../../../dist/output.css'
import DisabledIconSvg from '../../../Common/Icons/DisabledIconSvg'
import BottomLeftSide from './BottomLeftSide'
import TaskInfoComment from './TaskInfoComment'
import TopLeftSide from './TopLeftSide'
import TopRightSide from './TopRightSide'
import BottomRightSide from './BottomRightSide'

function TaskInformation (): JSX.Element {
  const [commentOpen, setCommentOpen] = useState(false)
  const [commentClassNames, setCommentClassNames] = useState('h-[67px]')
  const [bottomLeftHeight, setBottomLeftHeight] = useState('h-[439px]')
  const openComment = (): void => {
    if (!commentOpen) {
      setCommentClassNames('h-[209px] shadow-comment rounded-t-[12px]')
      setBottomLeftHeight('h-[297px]')
    } else {
      setCommentClassNames('h-[67px]')
      setBottomLeftHeight('h-[439px]')
    }
    setCommentOpen((prev) => !prev)
  }

  return (
    <div className="relative h-[596px] w-[1352px] overflow-hidden rounded-[20px] bg-white">
      {/* close icon */}
      <DisabledIconSvg className="absolute left-[1292px] top-[36px] size-[24px] cursor-pointer" />

      {/* vertical line */}
      <div className="absolute left-[659px] top-[30px] z-10 h-[566px] w-[1px] border-r-[1px] border-[#F4F4F4]"></div>

      {/* main content */}
      <div className="relative top-[90px] flex h-[506px] w-[1316px]">
        {/* left side */}
        <div className="flex h-[506px] w-[659px] shrink-0 flex-col justify-between">
          <div
            className={`${bottomLeftHeight} flex flex-col gap-6 transition-all duration-700 ease-linear`}
          >
            <TopLeftSide />

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
          <TopRightSide />

          <hr className="border-[1px] border-[#F4F4F4]" />

          <BottomRightSide />
        </div>
      </div>
    </div>
  )
}

export default TaskInformation
