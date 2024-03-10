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
  useEffect,
  useContext
} from 'react'

import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'
import { Permission, type Workspace } from '../../../../utilities/models'
import {
  UserContext,
  UserDispatchContext
} from '../../../../contexts/UserProvider'
import { useNavigate } from 'react-router-dom'

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
// eslint-disable-next-line @typescript-eslint/ban-types

interface NewWorkspaceProps {}

const NewWorkspace: FunctionComponent<NewWorkspaceProps> = () => {
  const [creationStep, dispatch] = useReducer(CreationWorkspaceStepReducer, 1)
  const [form, setForm] = useState<Workspace>({
    id: '',
    title: '',
    color: '#7D828C',
    status: Permission.manager,
    projects: []
  })
  const user = useContext(UserContext)
  const userDispatch: any = useContext(UserDispatchContext)

  const onchangeHandler = (e: any): void => {
    setForm((prev) => {
      return { ...prev, [e.target.name]: e.target.value }
    })
  }
  const navigate = useNavigate()
  const onSubmitWSCreation = (): void => {
    userDispatch({
      type: 'AddWorkspace',
      new_workspace: {
        id: ((user?.workspaces?.length ?? 0) + 1).toString(),
        title: form.title,
        color: form.color,
        status: Permission.manager,
        projects: []
      }
    })
    navigate('/workspace')
  }
  return (
    <>
      <CreationWorkspaceStepContext.Provider value={creationStep}>
        <CreationWorkspaceStepDispatchContext.Provider value={dispatch}>
          <div
            dir="rtl"
            className="flex h-[316px] w-[500px] flex-col items-center gap-[40px] "
          >
            {creationStep === 1 && (
              <Step1 value={form.title} onchangeHandler={onchangeHandler} />
            )}
            {creationStep === 2 && (
              <Step2 value={form.color} onChangeHandler={onchangeHandler} />
            )}
            {creationStep === 3 && (
              <Step3 form={form} onSubmitWSCreation={onSubmitWSCreation} />
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