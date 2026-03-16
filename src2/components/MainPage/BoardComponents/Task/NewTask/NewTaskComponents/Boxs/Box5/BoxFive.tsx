import BookmarkTagIconSvg from '../../../../../../../Common/Icons/BookmarkTagIconSvg'
import CalendarIconSvg from '../../../../../../../Common/Icons/CalendarIcons/CalendarIconSvg'
import Button from '../../../../../../../Common/Buttons/Button'
import LoadingComponent from '../../../../../../../Common/LoadingComponent/LoadingComponent'
import Priority from '../../../../../Priority/Priority'
import { type Dispatch, type SetStateAction, useState } from 'react'
import { taskPriority } from '../../../../../BoardViews/RowView/RowComponents/TaskPriorityFunction'

const BoxFive = ({
  handleShowCalendar,
  onSubmit,
  isLoading,
  setPriority,
  priority
}: {
  handleShowCalendar: () => void
  onSubmit: () => void
  isLoading: boolean
  setPriority?: Dispatch<SetStateAction<number>> | undefined
  priority?: number
}): JSX.Element => {
  const [showPriority, setShowPriority] = useState(false)

  return (
    <div className="flex items-center justify-between">
      <div className="relative flex flex-row items-center justify-between gap-6">
        <div
          onClick={() => {
            setShowPriority((p) => !p)
          }}
          className="flex size-[50px] cursor-pointer items-center justify-center rounded-full border border-dashed border-[#C1C1C1]"
        >
          {taskPriority(
            priority,
            'size-[30px]',
            true,
            'flex size-[50px] cursor-pointer items-center justify-center rounded-full border border-dashed',
            true
          )}
        </div>
        <div
          onClick={handleShowCalendar}
          className="flex size-[50px] cursor-pointer items-center justify-center rounded-full border border-dashed border-[#C1C1C1]"
        >
          <CalendarIconSvg className="size-[30px]" color="#C1C1C1" />
        </div>
        <div className="flex size-[50px] cursor-pointer items-center justify-center rounded-full border border-dashed border-[#C1C1C1]">
          <BookmarkTagIconSvg className="size-[30px]" />
        </div>
      </div>
      <Button onClickFunction={onSubmit} newTask>
        {isLoading ? <LoadingComponent /> : 'ساختن تسک'}
      </Button>
      <Priority
        setShowPriority={setShowPriority}
        setPriority={setPriority}
        className={`absolute bottom-[90px] right-[-25px] ${showPriority ? '' : 'hidden'}`}
      />
    </div>
  )
}

export default BoxFive
