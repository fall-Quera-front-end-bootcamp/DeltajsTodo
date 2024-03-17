/* eslint-disable @typescript-eslint/indent */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable multiline-ternary */
import Cookies from 'universal-cookie'
import {
  useGetUserQuery,
  useGetUsersQuery
} from '../../../../../features/users/usersInteractionApiSlice'
import ProfileAddUserIconSvg from '../../../../Common/Icons/ProfileAddUserIconSvg'
import ShareIconSvg from '../../../../Common/Icons/ShareIconSvg'
import { taskPriority } from '../../BoardViews/RowView/RowComponents/TaskPriorityFunction'

import NoUser from './TaskInformationComponents/NoUser'
import { useCallback, useState } from 'react'
import {
  useDeleteTaskMemberMutation,
  useGetTaskMembersQuery,
  useUpdataTaskMembersMutation
} from '../../../../../features/auth/authApiSlice'
import { type TaskMembers, type User } from '../../../../../utilities/models'
import toast from 'react-hot-toast'
import { toFarsiNumber } from '../../../../../utilities/toFarsiNumber'
import { BiUser } from 'react-icons/bi'

interface TopRightProps {
  priority?: number
  WID?: number
  PID?: number
  BID?: number
  taskID?: number
}

function TopRightSide ({
  priority,
  WID,
  PID,
  BID,
  taskID
}: TopRightProps): JSX.Element {
  const cookies = new Cookies()
  const id = cookies.get('id')
  const [showAddUser, setShowAddUser] = useState<boolean>(false)

  const { data: members } = useGetTaskMembersQuery({
    workspace_id: WID,
    project_id: PID,
    board_id: BID,
    id: taskID
  })

  const { data: accounts } = useGetUsersQuery({})

  const { data: user } = useGetUserQuery(id)

  const handleAddUser = (): void => {
    setShowAddUser((p) => !p)
  }

  // Set Task Members
  const [setTaskMembers] = useUpdataTaskMembersMutation({})

  const handleSetTaskMembers = useCallback(
    (setUser: string): void => {
      setTaskMembers({
        workspace_id: WID,
        project_id: PID,
        board_id: BID,
        id: taskID,
        user: setUser
      })
        .unwrap()
        .then(() => {
          toast.success(setUser + ' الان تسک رو داره ', {
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
    [taskID]
  )

  // Delete Task Members
  const [deleteTaskMember] = useDeleteTaskMemberMutation({})

  const handleDeleteSub = useCallback(
    (id: number, dUser: string): void => {
      deleteTaskMember({
        workspace_id: WID,
        project_id: PID,
        board_id: BID,
        taskID,
        id
      })
        .unwrap()
        .then(() => {
          toast.success(dUser + ' الان تسک رو نداره ', {
            style: {
              direction: 'rtl',
              width: '300px',
              border: '2px',
              borderStyle: 'solid',
              borderColor: 'red'
            },
            icon: '😂'
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
    [taskID]
  )

  return (
    <div className="flex w-[100%] items-center justify-between px-[16px]">
      <div className="flex items-center gap-[5px]">
        <span className="text-[16px] font-medium leading-[22.55px]">
          اشتراک‌گذاری
        </span>

        <ShareIconSvg color="#BDBDBD" className="size-[24px]" />
      </div>

      <div className="flex gap-4">
        {taskPriority(
          priority,
          'size-[34px] rounded-[50%] border-[0.94px] border-dashed p-[4.53px]',
          true,
          '',
          true
        )}

        <div className="relative flex flex-row gap-2">
          <ProfileAddUserIconSvg
            onClick={handleAddUser}
            className="size-[34px] cursor-pointer rounded-[50%] border-[0.94px] border-dashed border-[#C1C1C1] p-[4.53px]"
          />
          <div className="flex flex-row">
            {members?.length === 0 ? (
              <></>
            ) : (
              <p className="text-gray-primary">
                {toFarsiNumber(`+${members?.length}`)}
              </p>
            )}
            {members?.map((m: User) => {
              if (m?.thumbnail !== undefined) {
                return (
                  <img
                    key={m?.id}
                    src={m?.thumbnail}
                    alt="profile"
                    className="absolute right-0 size-[34px] rounded-[50%] object-cover"
                  />
                )
              } else if (Number(m?.id) < 4) {
                return (
                  <div
                    key={m?.id}
                    className="flex h-[33px] w-[36px] flex-col items-center justify-center rounded-[100px] bg-blue-secondary px-[8px] pb-[7px] pt-[9px] text-right text-bodyxs font-normal text-[#4C6EF5]"
                  >
                    {m?.first_name === undefined ||
                    m?.last_name === undefined ? (
                      <BiUser color="#C1C1C1" size={20} />
                    ) : (
                      `${m?.first_name?.slice(0, 1)} ${m?.last_name?.slice(0, 1)}`
                    )}
                  </div>
                )
              } else {
                return <></>
              }
            })}
            {user?.thumbnail !== null ? <></> : <NoUser className="z-50" />}
          </div>

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
                          handleSetTaskMembers(user.username)
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
                                  handleDeleteSub(m?.id, user.username)
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

        <button className="h-[30px] w-[111px] rounded bg-[#F84747] text-[12px] font-normal leading-[16.91px] text-white">
          Open
        </button>
      </div>
    </div>
  )
}

export default TopRightSide
