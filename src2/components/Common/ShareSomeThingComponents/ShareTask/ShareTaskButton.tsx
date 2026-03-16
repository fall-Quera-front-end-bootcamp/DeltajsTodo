import { useContext, useState } from 'react'
import ShareIconSvg from '../../Icons/ShareIconSvg'
import ShareTask from '.'
import { DarkModeContext } from '../../../../contexts/DarkModeContextProvider'

const ShareTaskButton = ({
  ShareTaskClass
}: {
  ShareTaskClass?: string
}): JSX.Element => {
  const [showShareTask, setShowShareTask] = useState(false)
  const { darkTheme } = useContext(DarkModeContext)

  const handleShareTask = (): void => {
    setShowShareTask(true)
  }

  return (
    <div className="relative">
      <button onClick={handleShareTask} className="flex flex-row gap-[5px]">
        <p className=" h-[23px] w-[89px] text-right text-[16px]  font-medium text-[#1E1E1E] dark:text-white">
          اشتراک گذاری
        </p>
        <ShareIconSvg color={darkTheme === 'dark' ? 'white' : 'black'} />
      </button>
      {showShareTask && (
        <ShareTask setShare={setShowShareTask} className={ShareTaskClass} />
      )}
    </div>
  )
}

export default ShareTaskButton
