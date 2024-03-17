/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable multiline-ternary */
/* eslint-disable @typescript-eslint/no-confusing-void-expression */
/* eslint-disable spaced-comment */
/* eslint-disable no-trailing-spaces */
/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable @typescript-eslint/no-empty-interface */
import {
  useContext,
  type FunctionComponent,
  useCallback,
  useState
} from 'react'
import LeftArrow from '../../../Icons/LeftArrow'
import Close from '../../../Icons/Close'
import { localPageDispatchContext } from '../../../../../contexts/LocalPageContextProvider'
import { CreationWorkspaceStepDispatchContext } from '../NewWorkspace'
import {
  type TaskMembers,
  type User,
  type Workspace
} from '../../../../../utilities/models'
import LoadingComponent from '../../../LoadingComponent/LoadingComponent'
import { BiUser } from 'react-icons/bi'
import {
  useCreateWorkspaceMemberMutation,
  useGetWorkspaceMembersQuery
} from '../../../../../features/auth/authApiSlice'
import toast from 'react-hot-toast'
import { useGetUsersQuery } from '../../../../../features/users/usersInteractionApiSlice'

interface Step3Props {
  form: Workspace
  onSubmitWSCreation: () => void
  isLoading: boolean
  WID?: number
}

const Step3: FunctionComponent<Step3Props> = ({
  form,
  onSubmitWSCreation,
  isLoading,
  WID
}) => {
  const localPageDispatch: any = useContext(localPageDispatchContext)
  const creationWorkspaceDispatch: any = useContext(
    CreationWorkspaceStepDispatchContext
  )

  // const cookies = new Cookies()
  // const id = cookies.get('id')
  const [showAddUser, setShowAddUser] = useState<boolean>(false)

  const { data: accounts } = useGetUsersQuery({})

  const { data: members } = useGetWorkspaceMembersQuery({
    workspace_id: WID
  })

  // Set Task Members
  const [WM] = useCreateWorkspaceMemberMutation({})

  const handleWM = useCallback(
    (userName: string): void => {
      WM({
        workspace_id: WID,
        user: userName
      })
        .unwrap()
        .then(() => {
          toast.success(userName + ' الان ورک اسپیس رو داره ', {
            style: {
              direction: 'rtl',
              width: '300px',
              border: '2px',
              borderStyle: 'solid',
              borderColor: 'rgb(130, 201, 30)'
            }
          })
        })
        .catch((err) => {
          toast.error(err?.data?.non_field_errors, {
            style: {
              direction: 'rtl'
            }
          })

          console.log(err)
        })
    },
    [WID]
  )

  return (
    <div className="flex h-[365px] w-[501px] flex-col items-center gap-[40px] rounded-lg bg-white p-[24px] shadow-[0_3px_4px_0] shadow-[#00000033]">
      <div
        className="flex 
        h-[32px] w-[453px] flex-row justify-between bg-white "
      >
        <div>
          <button onClick={() => localPageDispatch({ type: 'closeModal' })}>
            <Close />
          </button>
        </div>
        <div>
          <p className="h-[32px] w-[129px] text-center font-yekan text-[24px] font-extrabold leading-[32px]  text-[#1E1E1E] ">
            مرور اطلاعات‌
          </p>
        </div>
        <div>
          <button onClick={() => creationWorkspaceDispatch({ type: 'back' })}>
            <LeftArrow />
          </button>
        </div>
      </div>

      <div
        className="flex h-[165px]
            w-[453px] flex-col gap-[16px] rounded-lg border-[0.5px] border-[#AAAAAA] 
            px-[12px]  py-[16px]
            "
      >
        {/*title */}
        <div className="flex h-[34px] w-[429px] flex-row items-center justify-between">
          <div className="h-[20px] w-[93px]">
            <p className="h-[20px] w-[93px] text-right font-yekan text-[14px] font-extrabold leading-[19.73px]  text-[#1E1E1E] ">
              نام ورک‌اسپیس‌
            </p>
          </div>
          <div className="h-[20px] min-w-[64px]">
            <p className="h-[20px] max-w-[164px] text-right font-yekan text-[14px] font-extrabold leading-[19.73px]  text-[#1E1E1E] ">
              {form.name}‌
            </p>
          </div>
        </div>

        {/*color */}
        <div className="flex h-[34px] w-[429px] flex-row items-center justify-between">
          <div className="h-[20px] w-[98px]">
            <p className="h-[20px] w-[98px] text-right font-yekan text-[14px] font-extrabold leading-[19.73px]  text-[#1E1E1E] ">
              رنگ ورک‌اسپیس‌
            </p>
          </div>
          <div className="mx-[8px] mb-[7px] mt-[9px] size-[15px]">
            <svg
              width="15"
              height="16"
              viewBox="0 0 15 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect y="0.5" width="15" height="15" rx="2" fill={form.color} />
            </svg>
          </div>
        </div>

        {/*teamworkers */}
        <div className="flex h-[33px] w-[429px] flex-row items-center justify-between">
          <div className="h-[20px] w-[27px]">
            <p className="h-[20px] w-[27px] text-right font-yekan text-[14px] font-extrabold leading-[19.73px]  text-[#1E1E1E] ">
              اعضا‌
            </p>
          </div>
          <button
            onClick={() => {
              setShowAddUser((p) => !p)
            }}
            className=" flex  h-[33px] w-[36px] items-center justify-center rounded-full border-2"
          >
            <BiUser />
          </button>
          {showAddUser && (
            <div
              onMouseLeave={() => {
                setShowAddUser(false)
              }}
              onMouseEnter={() => {
                setShowAddUser(true)
              }}
              className="absolute left-[-150px] top-10 h-[200px] w-[250px] overflow-y-auto rounded-md bg-white p-1 shadow-[0_3px_4px_0] shadow-[#00000033] scrollbar-thin"
            >
              <div className="cursor-pointer p-1">
                {accounts.map((user: User) => {
                  return (
                    <div
                      onClick={() => {
                        setShowAddUser(false)
                      }}
                      key={user?.id}
                      className="flex w-full flex-row justify-between"
                    >
                      <button
                        onClick={() => {
                          handleWM(user.username)
                        }}
                        className="w-[170px] truncate rounded-md p-2 text-left transition-all duration-300 hover:bg-gray-secondary"
                      >
                        {user.username}
                      </button>
                      <div className="flex flex-row">
                        {members?.map((m: TaskMembers) => {
                          if (m?.user.username === user.username) {
                            return (
                              <button
                                key={m?.id}
                                onClick={() => {
                                  // handleDeleteSub(m?.id, user.username)
                                }}
                                className="w-[50px] rounded-sm bg-red-primary text-[12px] text-white"
                              >
                                حذف
                              </button>
                            )
                          } else {
                            return <></>
                          }
                        })}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          )}
        </div>
      </div>

      <div
        className="flex 
        h-[40px] w-[415px] gap-[29px]    rounded-md bg-white "
      >
        <button
          disabled={isLoading}
          onClick={onSubmitWSCreation}
          className="flex h-[40px] w-[415px] flex-row items-center justify-center gap-[10px] rounded-md bg-[#208D8E]"
        >
          {isLoading ? (
            <LoadingComponent />
          ) : (
            <p className="h-[20px] w-[117px] text-right font-yekan text-[14px] font-extrabold leading-[19.73px]  text-[#FFFFFF] ">
              ساختن ورک‌اسپیس
            </p>
          )}
        </button>
      </div>
    </div>
  )
}

export default Step3
