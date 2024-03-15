/* eslint-disable spaced-comment */
/* eslint-disable multiline-ternary */
import { AnimatePresence, motion } from 'framer-motion'
import type React from 'react'
import { useContext, useRef, useState } from 'react'
import DateRangePicker from '../../Calendar/DateRangePicker'
import {
  useCreateTaskMutation,
  useGetProjectsQuery
} from '../../../../../features/auth/authApiSlice'
import { toast } from 'react-hot-toast'
import { localPageDispatchContext } from '../../../../../contexts/LocalPageContextProvider'
import { FieldError, FieldValues, FormProvider, useForm } from 'react-hook-form'
import NewTaskBoxTwo from './NewTaskComponents/Boxs/Box2/NewTaskBoxTwo'
import NewTaskDescription from './NewTaskComponents/Boxs/Box3/NewTaskDescription'
import BoxOne from './NewTaskComponents/Boxs/Box1/BoxOne'
import BoxFourUpload from './NewTaskComponents/Boxs/Box4/BoxFourUpload'
import BoxFive from './NewTaskComponents/Boxs/Box5/BoxFive'
import NewTaskContextProvider, {
  NewTaskContext
} from '../../../../../contexts/NewTaskContextProvider'
import { store } from '../../../../../app/store'
import axios from 'axios'

interface NewTaskProps {
  WID?: number //this is workspace id you need
  PID?: number //this is project id you
  BID?: number
  className?: string
}

interface FormDataProps {
  BID?: number
  name: string
  description?: string
  deadline?: string
  priority?: number
  attachment?: File | null | undefined
  thumbnail?: File | null
}

const NewTask = ({ WID, BID, PID, className }: NewTaskProps): JSX.Element => {
  const methods = useForm()
  const localPageDispatch: any = useContext(localPageDispatchContext)
  const { selected, setSelected } = useContext(NewTaskContext)
  // UseState hook
  const [showCalendar, setShowCalendar] = useState(false)
  const [textAreaValue, setTextAreaValue] = useState('')
  const [selectedAttachmentFile, setSelectedAttachmentFile] =
    useState<FormData | null>(null)
  const [selectedCoverFile, setSelectedCoverFile] = useState<FormData | null>(
    null
  )
  // Ref hook
  const inputRefFirstUpload = useRef<HTMLInputElement | null>(null)
  const inputRefSecondUpload = useRef<HTMLInputElement | null>(null)

  const onChooseFileFirst = (): void => {
    inputRefFirstUpload.current?.click()
  }
  const onChooseFileSecond = (): void => {
    inputRefSecondUpload.current?.click()
  }

  const handleOnChangeFirst = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const formData = new FormData()
    const selectedFile = event.target.files?.[0]
    console.log(selectedFile)
    if (selectedFile !== null && selectedFile !== undefined) {
      formData.append('thumbnail', selectedFile, selectedFile.name)
      setSelectedAttachmentFile(formData)
    }
  }
  const handleOnChangeSecond = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const formData = new FormData()
    const selectedFile = event.target.files?.[0]
    console.log(selectedFile)
    if (selectedFile !== null && selectedFile !== undefined) {
      formData.append('attachment', selectedFile, selectedFile.name)
      setSelectedCoverFile(formData)
    }
  }

  const removeFileFirst = (): void => {
    setSelectedAttachmentFile(null)
  }
  const removeFileSecond = (): void => {
    setSelectedCoverFile(null)
  }

  const handleShowCalendar = (): void => {
    setShowCalendar(true)
  }

  const handleSetDesc = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setTextAreaValue(e.target.value)
  }

  const [Task, { isLoading, isError, isSuccess, error }] =
    useCreateTaskMutation()

  const { data: projects } = useGetProjectsQuery({
    workspace_id: WID
  })

  const handleSubmit = async (
    data: FieldValues | FormDataProps
  ): Promise<void> => {
    try {
      await Task({
        workspace_id: WID,
        project_id: PID,
        board_id: BID,
        name: data.name,
        description: data.description,
        priority: 1,
        attachment: data.attachment,
        thumbnail: selectedCoverFile,
        order: 12
      }).unwrap()
      localPageDispatch({ type: 'closeModal' })
    } catch (err: any) {
      console.log(err)
    }
  }

  const onSubmit = methods.handleSubmit((data) => {
    if (selected === 0) {
      toast.error('لطفا یکی از ستون‌ها رو انتخاب بکن')
    } else {
      void toast.promise(
        handleSubmit(data),
        {
          loading: '... در حال بررسی',
          success: 'تسک شما ساخته شد',
          error: data?.error
        },
        {
          style: {
            minWidth: '250px'
          },
          loading: {
            style: { backgroundColor: '#ffffff80' }
          },
          success: {
            duration: 3000,
            style: {
              border: '2px',
              borderStyle: 'solid',
              borderColor: 'rgb(130, 201, 30)'
            }
          },
          error: {
            style: {
              border: '2px',
              borderStyle: 'solid',
              borderColor: 'red'
            }
          }
        }
      )
    }
  })

  return (
    <AnimatePresence>
      <FormProvider {...methods}>
        <motion.form
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.1 }}
          autoComplete="off"
          noValidate
          onSubmit={(e) => {
            e.preventDefault()
          }}
          dir="rtl"
          className={`absolute left-1/2 top-1/2 z-50 flex w-[1153px] -translate-x-1/2 -translate-y-1/2 flex-col gap-xl rounded-[20px] bg-white p-l shadow-[0px_2px_4px_0px_#00000066,0px_7px_6px_-3px_#0000004D,0px_-3px_0px_0px_#00000033_inset] ${className}`}
        >
          {/* Box 1 */}
          {/* Top New Task  */}
          <BoxOne
            selected={selected}
            setSelected={setSelected}
            WID={WID}
            PID={PID}
            BID={BID}
          />
          {/* Box 2 */}
          <NewTaskBoxTwo projects={projects} />
          {/* Box 3 : Description */}
          <NewTaskDescription handleSetDesc={handleSetDesc} />
          {/* Box 4  */}
          <BoxFourUpload
            handleOnChangeFirst={handleOnChangeFirst}
            removeFileFirst={removeFileFirst}
            inputRefFirstUpload={inputRefFirstUpload}
            onChooseFileFirst={onChooseFileFirst}
            selectedAttachmentFile={selectedAttachmentFile}
            handleOnChangeSecond={handleOnChangeSecond}
            removeFileSecond={removeFileSecond}
            inputRefSecondUpload={inputRefSecondUpload}
            onChooseFileSecond={onChooseFileSecond}
            selectedCoverFile={selectedCoverFile}
          />
          {/* Bottom Box 5 */}
          <BoxFive
            handleShowCalendar={handleShowCalendar}
            isLoading={isLoading}
            onSubmit={onSubmit}
          />
          <div
            className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ${showCalendar ? '' : 'hidden'}`}
          >
            <DateRangePicker setShowCalendar={setShowCalendar} />
          </div>
        </motion.form>
      </FormProvider>
    </AnimatePresence>
  )
}

export default NewTask
