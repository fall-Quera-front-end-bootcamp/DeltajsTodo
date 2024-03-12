import { Views } from '../../../../../utilities/models'
import TodoListIconSvg from '../../../../Common/Icons/TodoListIconSvg'

const ListViewButton = ({
  handleView,
  view
}: {
  handleView: (e: any) => void
  view: Views
}): JSX.Element => {
  return (
    <button
      onClick={handleView}
      name="row"
      className="relative my-[5px] flex flex-row justify-between gap-[5px]"
    >
      <p
        aria-label="row"
        className={`h-[23px] w-[96px] text-right  font-yekan text-[16px] font-medium leading-[22.5px] text-[#1E1E1E] 
            ${view === Views.row && 'text-[#208D8E]'}`}
      >
        نمایش لیستی
      </p>
      <TodoListIconSvg color={view === Views.row ? '#208D8E' : '#323232'} />
      <div
        className={
          view === Views.row
            ? 'absolute bottom-[-22px] w-full rounded-full border-b-[3px] border-[#208D8E]'
            : 'hidden'
        }
      ></div>
    </button>
  )
}

export default ListViewButton
