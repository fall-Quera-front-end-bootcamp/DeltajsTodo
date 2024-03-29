import { type MouseEvent } from 'react'
import { Views } from '../../../../../../utilities/models'
import TodoListIconSvg from '../../../../../Common/Icons/TodoListIconSvg'

const ListViewButton = ({
  handleView,
  view
}: {
  handleView: (e: MouseEvent<HTMLButtonElement>) => void
  view: Views
}): JSX.Element => {
  return (
    <button
      onClick={(e) => {
        handleView(e)
      }}
      name="row"
      aria-label="row"
      className="relative my-[5px] flex flex-row justify-between gap-[5px]"
    >
      <p
        aria-label="row"
        className={`text-right  font-yekan text-[16px] font-medium leading-[22.5px] text-[#1E1E1E] dark:text-white ${view === Views.row ? 'text-[#208D8E]' : ''}`}
      >
        نمایش لیستی
      </p>
      <TodoListIconSvg
        arialabel="row"
        color={view === Views.row ? '#208D8E' : '#323232'}
      />
    </button>
  )
}

export default ListViewButton
