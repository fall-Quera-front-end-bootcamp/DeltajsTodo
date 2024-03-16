import { useState } from 'react'
import ShareIconSvg from '../../../../Common/Icons/ShareIconSvg'
import ShareTask from './ShareTask'

const ShareTaskButton = ({
  ShareTaskClass
}: {
  ShareTaskClass?: string
}): JSX.Element => {
  const [showShareTask, setShowShareTask] = useState(false)

  const handleShareTask = (): void => {
    setShowShareTask(true)
  }

  return (
    <div className="relative">
      <button onClick={handleShareTask} className="flex flex-row gap-[5px]">
        <p className=" h-[23px] w-[89px] text-right text-[16px]  font-medium text-[#1E1E1E]">
          اشتراک گذاری
        </p>
        <ShareIconSvg color="black" />
      </button>
      {showShareTask && (
        <ShareTask setShare={setShowShareTask} className={ShareTaskClass} />
      )}
    </div>
  )
}

export default ShareTaskButton
