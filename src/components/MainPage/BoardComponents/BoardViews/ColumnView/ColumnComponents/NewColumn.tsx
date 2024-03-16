/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-confusing-void-expression */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable tailwindcss/no-custom-classname */

import { type FunctionComponent } from 'react'
import AddIconSvg from '../../../../../Common/Icons/AddIconSvg'

/* eslint-disable @typescript-eslint/no-empty-interface */
interface NewColumnProps {
  onClickFunc: () => void
}

const NewColumn: FunctionComponent<NewColumnProps> = ({ onClickFunc }) => {
  return (
    <div className="flex flex-col justify-start pt-10">
      <button onClick={onClickFunc}>
        <div
          className="relative mt-4 flex h-[40px] w-[250px] flex-row-reverse items-center
          justify-between rounded-[16px] border-t-[2px] px-[12px] py-[8x] shadow-[0_3px_4px_0] shadow-[#00000033]"
        >
          <p className="text-right font-yekan text-[16px] font-medium leading-[22.55px] text-[#1E1E1E]">
            ساختن برد جدید
          </p>
          <AddIconSvg />
        </div>
      </button>
    </div>
  )
}

export default NewColumn
