import PriorityFlag from '../../../../../../../Common/Icons/PriorityFlag'
import BookmarkTagIconSvg from '../../../../../../../Common/Icons/BookmarkTagIconSvg'
import CalendarIconSvg from '../../../../../../../Common/Icons/CalendarIcons/CalendarIconSvg'
import Button from '../../../../../../../Common/Buttons/Button'
import LoadingComponent from '../../../../../../../Common/LoadingComponent/LoadingComponent'

const BoxFive = ({
  handleShowCalendar,
  onSubmit,
  isLoading
}: {
  handleShowCalendar: () => void
  onSubmit: () => void
  isLoading: boolean
}): JSX.Element => {
  return (
    <div className="flex items-center justify-between">
      <div className="relative flex flex-row items-center justify-between gap-6">
        <div className="flex size-[50px] cursor-pointer items-center justify-center rounded-full border border-dashed border-[#C1C1C1]">
          <PriorityFlag className="size-[30px]" color="#C1C1C1" />
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
    </div>
  )
}

export default BoxFive
