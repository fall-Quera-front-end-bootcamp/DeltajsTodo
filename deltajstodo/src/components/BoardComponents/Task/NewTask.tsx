import DropdownMenu from '../DropDownMenu/DropdownMenu'
import DisabledIconSvg from '../../Common/Icons/DisabledIconSvg'
import { AnimatePresence, motion } from 'framer-motion'
import ProfileAddUserIconSvg from '../../Common/Icons/ProfileAddUserIconSvg'
import { useCallback, useContext, useMemo, useRef, useState } from 'react'
import Button from '../../Buttons/Button'
import PriorityFlag from '../../Common/Icons/PriorityFlag'
import CalelndarEndIconSvg from '../../Common/Icons/CalendarIcons/CalendarEndIconSvg'
import BookmarkTagIconSvg from '../../Common/Icons/BookmarkTagIconSvg'
import DateRangePicker from '../Calendar/DateRangePicker'
import LinkCopyIconSvg from '../../Common/Icons/LinkCopyIconSvg'
import DatepickerContext from '../../../contexts/DatepickerContext'
import axios from 'axios'

const NewTask = (): JSX.Element => {
  // Context
  const { period } = useContext(DatepickerContext)
  // UseState hook
  const [showBox, setShowBox] = useState(true)
  const [showCalendar, setShowCalendar] = useState(false)
  const [showInputValue, setShowInputValue] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [textAreaValue, setTextAreaValue] = useState('')
  const [selectedAttachmentFile, setSelectedAttachmentFile] = useState(null)
  const [selectedCoverFile, setSelectedCoverFile] = useState(null)
  // Ref hook
  const inputRefFirst = useRef(null)
  const inputRefFirstUpload = useRef(null)
  const inputRefSecondUpload = useRef(null)
  const priorityRef = useRef(null)

  function handleSubmit(e): void {
    e.preventDefault()
    if (inputRefFirst?.current.value === null) setShowInputValue(false)
    else if (inputRefFirst?.current.value.replaceAll(' ', '') !== '') {
      setShowInputValue(true)
      setInputValue(inputRefFirst?.current.value)
    }
  }

  const onChooseFileFirst = (): void => {
    inputRefFirstUpload.current.click()
  }
  const onChooseFileSecond = (): void => {
    inputRefSecondUpload.current.click()
  }

  const handleOnChangeFirst = (event): void => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedAttachmentFile(event.target.files[0])
    }
  }
  const handleOnChangeSecond = (event): void => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedCoverFile(event.target.files[0])
    }
  }

  const removeFileFirst = (): void => {
    setSelectedAttachmentFile(null)
  }
  const removeFileSecond = (): void => {
    setSelectedCoverFile(null)
  }

  const newTaskData = useCallback(() => {
    const data = [
      inputValue,
      textAreaValue,
      selectedAttachmentFile,
      selectedCoverFile,
      period
    ]
    return data
  }, [
    inputValue,
    textAreaValue,
    selectedAttachmentFile,
    selectedCoverFile,
    period
  ])

  const contextValues = useMemo(() => {
    return { period }
  }, [period])

  const priorityHandle = (): void => {}

  return (
    <>
      <DatepickerContext.Provider value={contextValues}>
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
                {/* Task Title Handle */}
                <div className="relative flex flex-row items-center justify-center gap-[13px]">
                  <span className="inline-block size-4 bg-[#D9D9D9]"></span>
                  <form onSubmit={handleSubmit}>
                    {showInputValue ? (
                      <span
                        onClick={() => {
                          setShowInputValue(false)
                        }}
                        className="text-bodyxl font-[500] leading-8"
                      >
                        {inputValue}
                      </span>
                    ) : (
                      <input
                        ref={inputRefFirst}
                        type="text"
                        className="absolute right-5 top-0 px-5 text-bodyxl placeholder:text-black"
                        placeholder="عنوان تسک"
                        value={inputValue}
                        onChange={(e) => {
                          setInputValue(e.target.value)
                        }}
                      />
                    )}
                  </form>
                </div>
                {/* Leave New Task Box */}
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
              {/* Box 3 : Description */}
              <div className="">
                <textarea
                  onChange={(e) => {
                    setTextAreaValue(e.target.value)
                  }}
                  name=""
                  id=""
                  placeholder="توضیحاتی برای این تسک بنویسید"
                  className="h-[191px] max-h-[191px] min-h-[191px] w-full rounded-xl border border-[#E2E2E2] p-6 text-[16px]"
                ></textarea>
              </div>
              {/* Box 4 */}
              <div className="flex flex-row items-center gap-5">
                <div className="">افزودن پیوست</div>
                <Button onClickFunction={onChooseFileFirst} UploadButton>
                  <LinkCopyIconSvg color="#208D8E" />
                  آپلود فایل
                  <input
                    type="file"
                    ref={inputRefFirstUpload}
                    onChange={handleOnChangeFirst}
                    style={{ display: 'none' }}
                  />
                </Button>
                {selectedAttachmentFile && (
                  <>
                    <div className="">
                      <p>{selectedAttachmentFile.name}</p>
                    </div>
                    <button
                      onClick={removeFileFirst}
                      className="rounded-[4px] border border-red-primary px-4"
                    >
                      حذف کردن فایل آپلود شده
                    </button>
                  </>
                )}
              </div>
              {/* Box 5 */}
              <div className="flex flex-row items-center gap-5">
                <div className="">افزودن کاور</div>
                <Button onClickFunction={onChooseFileSecond} UploadButton>
                  <LinkCopyIconSvg color="#208D8E" />
                  آپلود فایل
                  <input
                    type="file"
                    ref={inputRefSecondUpload}
                    onChange={handleOnChangeSecond}
                    style={{ display: 'none' }}
                  />
                </Button>
                {selectedCoverFile && (
                  <>
                    <div className="">
                      <p>{selectedCoverFile.name}</p>
                    </div>
                    <button
                      onClick={removeFileSecond}
                      className="rounded-[4px] border border-red-primary px-4"
                    >
                      حذف کردن فایل آپلود شده
                    </button>
                  </>
                )}
              </div>
              {/* Bottom Box 6 */}
              <div className="flex items-center justify-between">
                <div className="relative flex flex-row items-center justify-between gap-6">
                  <div
                    onClick={priorityHandle}
                    className="flex size-[50px] cursor-pointer items-center justify-center rounded-full border border-dashed border-[#C1C1C1]"
                  >
                    <PriorityFlag className="size-[30px]" color="#C1C1C1" />
                  </div>

                  {/* <Priority
                    ref={priorityRef}
                    className="absolute right-0 top-[-190px] bg-white shadow-[0px_12px_32px_0px_#00000040]"
                  /> */}
                  <div
                    onClick={() => {
                      setShowCalendar(true)
                    }}
                    className="flex size-[50px] cursor-pointer items-center justify-center rounded-full border border-dashed border-[#C1C1C1]"
                  >
                    <CalelndarEndIconSvg
                      className="size-[30px]"
                      color="#C1C1C1"
                    />
                  </div>
                  <div className="flex size-[50px] cursor-pointer items-center justify-center rounded-full border border-dashed border-[#C1C1C1]">
                    <BookmarkTagIconSvg className="size-[30px]" />
                  </div>
                </div>
                <Button newTask>ساختن تسک</Button>
              </div>
              {showCalendar && (
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <DateRangePicker setShowCalendar={setShowCalendar} />
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </DatepickerContext.Provider>
    </>
  )
}

export default NewTask
