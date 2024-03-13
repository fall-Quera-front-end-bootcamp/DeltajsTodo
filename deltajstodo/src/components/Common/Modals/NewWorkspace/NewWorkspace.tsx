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
import { Permission, type Workspace } from '../../../../utilities/models'
import { useNavigate } from 'react-router-dom'
import { useCreateWorkspaceMutation } from '../../../../features/auth/authApiSlice'
import { localPageDispatchContext } from '../../../../contexts/LocalPageContextProvider'
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

interface NewWorkspaceProps {}

const NewWorkspace: FunctionComponent<NewWorkspaceProps> = () => {
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
  const [createWorkspace, { isLoading }] = useCreateWorkspaceMutation()

  const onchangeHandler = (e: any): void => {
    setForm((prev) => {
      return { ...prev, [e.target.name]: e.target.value }
    })
  }

  const onSubmitWSCreation = async (): Promise<void> => {
    console.log(form)

    try {
      const newWS = await createWorkspace({
        name: form?.name,
        color: form?.color
      }).unwrap()
      console.log(newWS)
      localPageDispatch({ type: 'closeModal' })
    } catch (err: any) {
      localPageDispatch({
        type: 'openResponseModal',
        responseData: { type: 'fail', message: err?.error ?? '' }
      })
    }

    navigate('/workspace')
  }
  return (
    <>
      <CreationWorkspaceStepContext.Provider value={creationStep}>
        <CreationWorkspaceStepDispatchContext.Provider value={dispatch}>
          <div
            dir="rtl"
            className="flex h-[316px] w-[500px] flex-col items-center gap-[40px] fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
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
            <div
              className="
         flex h-[8px] w-[40px] flex-row-reverse gap-[8px]"
            >
              <div>
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
              </div>
              <div>
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
              </div>

              <div>
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
          </div>
        </CreationWorkspaceStepDispatchContext.Provider>
      </CreationWorkspaceStepContext.Provider>
    </>
  )
}

export default NewWorkspace
