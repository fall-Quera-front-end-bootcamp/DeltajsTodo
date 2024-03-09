import { useState } from 'react'
import '../../dist/output.css'
import DisabledIconSvg from '../Common/Icons/DisabledIconSvg'
import BottomLeftSide from './BottomLeftSide'
import TaskInfoComment from './TaskInfoComment'
import TopLeftSide from './TopLeftSide'
import TopRightSide from './TopRightSide'
import BottomRightSide from './BottomRightSide'

function TaskInformation(): JSX.Element {
  const [commentOpen, setCommentOpen] = useState(false)
  const [commentClassNames, setCommentClassNames] = useState('h-[67px]')
  const [bottomLeftHeight, setBottomLeftHeight] = useState('h-[439px]')
  const openComment = () => {
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
    <div className="relative w-[1352px] h-[596px] rounded-[20px] bg-white overflow-hidden">
      {/* close icon */}
      <DisabledIconSvg className="absolute top-[36px] left-[1292px] w-[24px] h-[24px] cursor-pointer" />

      {/* vertical line */}
      <div className="absolute top-[30px] left-[659px] w-[1px] h-[566px] border-r-[1px] border-[#F4F4F4] z-10"></div>

      {/* main content */}
      <div className="flex w-[1316px] h-[506px] relative top-[90px]">
        {/* left side */}
        <div className="shrink-0 flex flex-col justify-between w-[659px] h-[506px]">
          <div
            className={`${bottomLeftHeight} flex flex-col gap-6 transition-all ease-linear duration-700`}
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
        <div className="w-[100%] flex flex-col gap-6">
          <TopRightSide />

          <hr className="border-[1px] border-[#F4F4F4]" />

          <BottomRightSide />
        </div>
      </div>
    </div>
  )
}

export default TaskInformation
