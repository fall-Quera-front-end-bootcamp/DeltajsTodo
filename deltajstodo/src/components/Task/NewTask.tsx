import DropdownMenu from '../DropDownMenu/DropdownMenu'
import DisabledIconSvg from '../Icons/DisabledIconSvg'
import { AnimatePresence, motion } from 'framer-motion'
import ProfileAddUserIconSvg from '../Icons/ProfileAddUserIconSvg'
import { useState } from 'react'
import UploadButton from '../Upload/UploadButton'
import Button from '../Buttons/Button'
import PriorityFlag from '../Icons/PriorityFlag'
import CalendarIconSvg from '../Icons/CalendarIconSvg'
import BookmarkTagIconSvg from '../Icons/BookmarkTagIconSvg'

const NewTask = (): JSX.Element => {
  const [showBox, setShowBox] = useState(true)

  return (
    <>
      <AnimatePresence>
        {showBox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
            dir="rtl"
            className="absolute left-1/2 top-1/2 flex w-[1153px] -translate-x-1/2 -translate-y-1/2 flex-col gap-xl rounded-[20px] bg-white p-l"
          >
            {/* Box 1 */}
            {/* Top New Task  */}
            <div className="flex w-full justify-between">
              <div className="flex flex-row items-center justify-center gap-[13px]">
                <span className="inline-block size-4 bg-[#D9D9D9]"></span>
                <span className="text-bodyxl font-[500] leading-8">
                  عنوان تسک
                </span>
              </div>
              <button
                onClick={() => {
                  setShowBox(!showBox)
                }}
              >
                <DisabledIconSvg />
              </button>
            </div>
            {/* Box 2 */}
            <div className="flex flex-row items-center gap-xs text-[16px] font-[500]">
              <p className="inline-block">در </p>
              <DropdownMenu buttonClassName="mr-[10px] inline-block w-[158px] rounded-md border border-[#E9EBF0] px-2 pb-[4px] pt-[5px] text-right">
                <motion.ul
                  initial={{ opacity: 0, translate: 0 }}
                  animate={{ opacity: 1, translateY: '5px' }}
                  exit={{ opacity: 0, translateY: '-5px' }}
                  className="absolute left-[-5px] top-[35px] flex w-full flex-col gap-2 rounded-md bg-gray-secondary"
                >
                  <li className="cursor-pointer p-1 hover:bg-gray-primary">
                    پروژه اول
                  </li>
                  <li className="cursor-pointer p-1 hover:bg-gray-primary">
                    پروژه دوم
                  </li>
                  <li className="cursor-pointer p-1 hover:bg-gray-primary">
                    پروژه سوم
                  </li>
                </motion.ul>
              </DropdownMenu>{' '}
              <p className="inline-block">برای</p>
              <div className="flex size-[34px] items-center justify-center rounded-full border border-dashed border-[#C1C1C1]">
                <ProfileAddUserIconSvg />
              </div>
            </div>
            {/* Box 3 */}
            <div className="">
              <textarea
                name=""
                id=""
                placeholder="توضیحاتی برای این تسک بنویسید"
                className="h-[191px] max-h-[191px] min-h-[191px] w-full rounded-xl border border-[#E2E2E2] p-6 text-[16px]"
              ></textarea>
            </div>
            {/* Box 4 */}
            <div className="flex flex-row items-center">
              <div className="">افزودن پیوست</div>
              <UploadButton />
            </div>
            {/* Box 5 */}
            <div className="flex flex-row items-center">
              <div className="">افزودن کاور</div>
              <UploadButton />
            </div>
            {/* Bottom Box 6 */}
            <div className="flex items-center justify-between">
              <div className="flex flex-row items-center justify-between gap-6">
                <div className="flex size-[50px] cursor-pointer items-center justify-center rounded-full border border-dashed border-[#C1C1C1]">
                  <PriorityFlag className="size-[30px]" color="#C1C1C1" />
                </div>
                <div className="flex size-[50px] cursor-pointer items-center justify-center rounded-full border border-dashed border-[#C1C1C1]">
                  <CalendarIconSvg className="size-[30px]" color="#C1C1C1" />
                </div>
                <div className="flex size-[50px] cursor-pointer items-center justify-center rounded-full border border-dashed border-[#C1C1C1]">
                  <BookmarkTagIconSvg className="size-[30px]" />
                </div>
              </div>
              <Button newTask>ساختن تسک</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default NewTask
