/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-confusing-void-expression */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable tailwindcss/no-custom-classname */
import { useState, type FunctionComponent } from 'react'
import AddIconSvg from '../../Icons/AddIconSvg'
import DotsMenuIconSvg from '../../Icons/DotsMenuIconSvg'
import AddTaskLableSvg from '../../Icons/AddTaskLableSvg'

/* eslint-disable @typescript-eslint/no-empty-interface */
interface NewColumnProps {}

const NewColumn: FunctionComponent<NewColumnProps> = () => {
  const [columnMore, setColumnMore] = useState(false)

  return (
    <>
      <div className="relative">
        <button className="group">
          <div
            className={`absolute left-[-22.5px] top-[-15px] z-10  ${columnMore ? 'visible' : 'invisible'}`}
          >
            <AddTaskLableSvg />
          </div>
          <div className=" relative flex h-[40px] w-[250px] flex-row items-center justify-between rounded-[16px] border-t-[2px]  px-[12px] py-[8x] shadow-[0_3px_4px_0] shadow-[#00000033]">
            <div className="invisible  flex h-[24px] w-[48px] flex-row gap-[4px] group-hover:visible ">
              <button
                onMouseEnter={() => setColumnMore(true)}
                onMouseLeave={() => setColumnMore(false)}
              >
                <AddIconSvg />
              </button>

              <DotsMenuIconSvg />
            </div>
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
