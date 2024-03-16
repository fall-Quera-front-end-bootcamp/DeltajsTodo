/* eslint-disable multiline-ternary */
import { useGetBoardsQuery } from '../../../../../../../../features/auth/authApiSlice'
import { type Board } from '../../../../../../../../utilities/models'
import BoardsDropDown from '../../DropDowns/BoardsDropDown'
import NewTaskInput from '../../Inputs/NewTaskInput'
import CloseNewTaskButton from './CloseNewTaskButton'

const BoxOne = ({
  WID,
  PID,
  BID,
  setSelected,
  selected
}: {
  WID: number | undefined
  PID: number | undefined
  BID: number | undefined
  setSelected: ((selected: number) => void) | undefined
  selected: number | undefined
}): JSX.Element => {
  const { data: boards } = useGetBoardsQuery({
    workspace_id: WID,
    project_id: PID
  })

  const newTaskNameProps = {
    name: 'name',
    validation: {
      required: {
        value: true,
        message: 'لطفا عنوان تسک را خالی نگذارید'
      }
    },
    id: 'text',
    label: 'نام کاربری',
    type: 'text',
    placeholder: 'عنوان تسک',
    inputDir: 'rtl'
  }

  return (
    <div className="flex w-full justify-between">
      {/* Task Title Handle */}
      <div className="relative flex flex-row items-center justify-center gap-[13px]">
        <span className="inline-block size-4 bg-[#D9D9D9]"></span>
        <NewTaskInput
          {...newTaskNameProps}
          className="text-bodyxl shadow-[0_3px_4px_0] shadow-[#00000033]  outline-none placeholder:text-black"
        />
        {BID !== undefined ? (
          <div className="">
            {boards?.map((board: Board) => {
              return board?.id === BID ? `ستون : ${board?.name}` : ''
            })}
          </div>
        ) : (
          <>
            <BoardsDropDown
              selected={selected}
              setSelected={setSelected}
              className="w-[300px] cursor-pointer border-black text-bodys shadow-[0_3px_4px_0] shadow-[#00000033]"
              inputCN="p-2 outline-none placeholder:text-black"
              placeHolderText="یکی ستون‌ها رو انتخاب بکن"
              boards={boards}
            />
          </>
        )}
      </div>
      {/* Leave New Task Box */}
      <CloseNewTaskButton />
    </div>
  )
}

export default BoxOne
