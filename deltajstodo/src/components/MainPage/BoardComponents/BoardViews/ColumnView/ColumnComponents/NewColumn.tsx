import { type FunctionComponent } from 'react'
import AddIconSvg from '../../../../../Common/Icons/AddIconSvg'

/* eslint-disable @typescript-eslint/no-empty-interface */
interface NewColumnProps {}

const NewColumn: FunctionComponent<NewColumnProps> = () => {
  return (
    <>
      <button className="relative flex h-[40px] w-[250px] flex-row items-center justify-between rounded-[16px] px-[12px] py-[8x] shadow-[0_3px_4px_0] shadow-[#00000033]">
        <p className="text-right text-[16px] font-medium leading-[22.55px] text-[#1E1E1E]">
          ساختن برد جدید
        </p>

        <AddIconSvg />
      </button>
    </>
  )
}

export default NewColumn
