/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-confusing-void-expression */
/* eslint-disable @typescript-eslint/space-before-function-paren */
/* eslint-disable spaced-comment */
/* eslint-disable no-trailing-spaces */
/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable @typescript-eslint/no-empty-interface */
import {
  type FunctionComponent,
  useReducer,
  createContext,
  useState,
  useContext
} from 'react'

import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'
import { Permission, type Workspace } from '../../../../../utilities/models'
import { useNavigate } from 'react-router-dom'
import {
  useCreateBoardMutation,
  useCreateWorkspaceMutation,
  useGetBoardsQuery
} from '../../../../../features/auth/authApiSlice'
import { localPageDispatchContext } from '../../../../../contexts/LocalPageContextProvider'
import toast from 'react-hot-toast'
////////////////////// 🟨Local Context🟥 //////////////////////////
export const CreationWorkspaceStepContext = createContext<number | null>(null)
export const CreationWorkspaceStepDispatchContext = createContext<unknown>(null)
function CreationWorkspaceStepReducer(step: number, action: any): number {
  switch (action?.type) {
    case 'back': {
      if (step === 1) {
        return step
      }
      return step - 1
    }

    case 'next': {
      if (step === 3) {
        return step
      }
      return step + 1
    }

    default: {
      throw Error('Unknown action: ' + action.type)
    }
  }
}
////////////////////// 🟨🟥 //////////////////////////

interface NewBoardProps {
  WID: number
  PID: number
  className?: string
}

const NewBoard: FunctionComponent<NewBoardProps> = ({
  WID,
  PID,
  className
}) => {
  const [creationStep, dispatch] = useReducer(CreationWorkspaceStepReducer, 1)
  const [form, setForm] = useState<Workspace>({
    id: -1,
    name: '',
    color: '#7D828C',
    status: Permission.manager,
    projects: []
  })
  const navigate = useNavigate()
  const localPageDispatch: any = useContext(localPageDispatchContext)
  const [createBoard, { isLoading }] = useCreateBoardMutation()
  const {
    data: boards,
    isSuccess,
    isError,
    error
  } = useGetBoardsQuery({
    workspace_id: WID,
    project_id: PID
  })

  const onchangeHandler = (e: any): void => {
    setForm((prev) => {
      return { ...prev, [e.target.name]: e.target.value }
    })
  }

  const onSubmitWSCreation = async (): Promise<void> => {
    try {
      await createBoard({
        workspace_id: WID,
        project_id: PID,
        name: form?.name,
        order: boards.length + 1,
        color: form?.color,
        is_archive: false,
        tasks: [],
        tasks_count: 0
      }).unwrap()
      toast.success('ستون با موفقیت ساخته شد', {
        duration: 4000,
        style: {
          border: '2px',
          borderStyle: 'solid',
          borderColor: 'rgb(130, 201, 30)'
        }
      })
      localPageDispatch({ type: 'closeModal' })
    } catch (err: any) {
      localPageDispatch({
        type: 'openResponseModal',
        responseData: { type: 'fail', message: err?.error ?? '' }
      })
    }
  }
  return (
    <>
      <CreationWorkspaceStepContext.Provider value={creationStep}>
        <CreationWorkspaceStepDispatchContext.Provider value={dispatch}>
          <div
            dir="rtl"
            className={`fixed left-1/2 top-1/2 flex w-[500px] -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-[40px] ${className}`}
          >
            {creationStep === 1 && (
              <Step1 value={form.name} onchangeHandler={onchangeHandler} />
            )}
            {creationStep === 2 && (
              <Step2 value={form.color} onChangeHandler={onchangeHandler} />
            )}
            {creationStep === 3 && (
              <Step3
                form={form}
                onSubmitWSCreation={onSubmitWSCreation}
                disablity={isLoading}
              />
            )}
            {/**⚫⚫⚪ */}
            <div className="flex flex-row-reverse items-center justify-between gap-[8px] rounded-3xl bg-gray-secondary px-4 py-2">
              <svg
                width="8"
                height="8"
                viewBox="0 8 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="4"
                  cy="4"
                  r="4"
                  fill={creationStep === 1 ? '#ffffff' : '#8A8989'}
                />
              </svg>

              <svg
                width="8"
                height="8"
                viewBox="0 0 8 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="4"
                  cy="4"
                  r="4"
                  fill={creationStep === 2 ? '#ffffff' : '#8A8989'}
                />
              </svg>

              <svg
                width="8"
                height="8"
                viewBox="0 0 8 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="4"
                  cy="4"
                  r="4"
                  fill={creationStep === 3 ? '#ffffff' : '#8A8989'}
                />
              </svg>
            </div>
          </div>
        </CreationWorkspaceStepDispatchContext.Provider>
      </CreationWorkspaceStepContext.Provider>
    </>
  )
}

export default NewBoard
