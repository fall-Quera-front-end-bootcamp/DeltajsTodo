/* eslint-disable no-trailing-spaces */
/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable tailwindcss/classnames-order */
import { type FunctionComponent } from 'react'
import AddIconSvg from '../../Icons/AddIconSvg'

/* eslint-disable @typescript-eslint/no-empty-interface */
interface NewColumnProps {}

const NewColumn: FunctionComponent<NewColumnProps> = () => {
  return (
    <>
      <div
        className="w-[250px] h-[40px]
  rounded-2xl border-[2px_12px_8px_12px] flex flex-row justify-between p-[8px_12px_8px_12px]
  items-center"
      >
        <div className="w-[125px] h-[23px] flex flex-row gap-[4px]">
          <p
            className="w-[125px] h-[23px] 
    font-yekan text-right
                 text-[16px] font-medium
                 leading-[22.55px]
                  text-[#1E1E1E]                ] "
          >
            + ساختن برد جدید
          </p>
        </div>
        <div className="w-[48px] h-[24px] flex flex-row gap-[4px]">
          <div>
            <AddIconSvg />
          </div>
          <div></div>
        </div>
      </div>
    </>
  )
}

export default NewColumn
