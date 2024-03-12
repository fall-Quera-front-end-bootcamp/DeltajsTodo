/* eslint-disable @typescript-eslint/space-before-function-paren */
import { useContext } from 'react'
import '../../../../dist/output.css'
import BordMoreOption from './BordMoreOption'
import { localPageDispatchContext } from '../../../../contexts/LocalPageContextProvider'

function BoradMore({
  WID,
  PID,
  BID
}: {
  WID: number
  PID: number
  BID: number
}): JSX.Element {
  const localPageDispatch: any = useContext(localPageDispatchContext)

  return (
    <div
      dir="rtl"
      className="flex w-max flex-col gap-4 rounded-lg bg-[white] p-3 shadow-[0px_2px_4px_0px_#00000066,0px_7px_6px_-3px_#0000004D,0px_-3px_0px_0px_#00000033_inset]"
    >
      <BordMoreOption
        color="text-[black]"
        text="ویرایش نام ستون"
        type="edit"
        onClickFunc={() => {
          localPageDispatch({ type: 'openNewBoardTitle', WID, PID, BID })
        }}
      />

      <BordMoreOption
        color="text-[black]"
        text="افزودن تسک"
        type="add"
        onClickFunc={() => {
          localPageDispatch({
            type: 'openNewTask',
            WID,
            PID,
            BID
          })
        }}
      />

      <BordMoreOption
        color="text-[black]"
        text="آرشیو تمام تسک‌ها"
        type="archive"
      />
      <BordMoreOption color="text-[#FA5252]" text="حذف ستون" type="remove" />
    </div>
  )
}

export default BoradMore
