/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-confusing-void-expression */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable tailwindcss/no-custom-classname */

import { type FunctionComponent } from 'react'
import { localPageDispatchContext } from '../../../../../../contexts/LocalPageContextProvider'

/* eslint-disable @typescript-eslint/no-empty-interface */
interface NewColumnProps {
  onClickFunc: () => void
}

const NewColumn: FunctionComponent<NewColumnProps> = ({ onClickFunc }) => {
  return (
    <>
      <div className="relative">
        <button
          onClick={onClickFunc}
          className="group hover:bg-black hover:shadow-2xl"
        >
          <div className=" relative flex h-[40px] w-[250px] flex-row-reverse items-center justify-start rounded-[16px] border-t-[2px] px-[12px]  py-[8x] shadow-[0_3px_4px_0] shadow-[#00000033] ">
            <div className="flex h-[23px] w-[125px] flex-row gap-[4px]">
              <p className="font-yekan h-[23px] w-[125px] text-right text-[16px] font-medium leading-[22.55px] text-[#1E1E1E]">
                ساختن برد جدید +
              </p>
            </div>
          </div>
        </button>
      </div>
    </>
  )
}

export default NewColumn
function useContext(localPageDispatchContext: Context<unknown>): any {
  throw new Error('Function not implemented.')
}
