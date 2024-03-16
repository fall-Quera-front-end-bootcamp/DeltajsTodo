/* eslint-disable multiline-ternary */
import Cookies from 'universal-cookie'
import {
  useGetUserQuery,
  useGetUsersQuery
} from '../../../../../features/users/usersInteractionApiSlice'
import PriorityFlag from '../../../../Common/Icons/PriorityFlag'
import ProfileAddUserIconSvg from '../../../../Common/Icons/ProfileAddUserIconSvg'
import ShareIconSvg from '../../../../Common/Icons/ShareIconSvg'
import { taskPriority } from '../../BoardViews/RowView/RowComponents/TaskPriorityFunction'
import { BiUser } from 'react-icons/bi'
import NoUser from './TaskInformationComponents/NoUser'
import { useState } from 'react'
import { useGetTaskMembersQuery } from '../../../../../features/auth/authApiSlice'
import { type User } from '../../../../../utilities/models'

interface TopRightProps {
  priority?: number
  WID?: number
  PID?: number
  BID?: number
  taskID?: number
}

function TopRightSide({
  priority,
  WID,
  PID,
  BID,
  taskID
}: TopRightProps): JSX.Element {
  const [showAddUser, setShowAddUser] = useState(false)
  const [usersList, setUsersList] = useState({})
  const [userList, setUserList] = useState({})

  const { data: members } = useGetTaskMembersQuery({
    workspace_id: WID,
    project_id: PID,
    board_id: BID,
    id: taskID
  })

  const { data: accounts } = useGetUsersQuery({})

  // const { data: accounts } = useGetUsersQuery({})
  console.log(members)
  console.log(accounts)

  const cookies = new Cookies()
  const id = cookies.get('id')
  const { data: user } = useGetUserQuery(id)
  // setUsersList(user)
  console.log(user?.thumbnail)

  const handleAddUser = (): void => {
    setShowAddUser((p) => !p)
  }

  console.log(userList)

  return (
    <div className="flex h-[57px] w-[100%] items-center justify-between px-[16px]">
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

        <div className="relative w-[61px]">
          <ProfileAddUserIconSvg
            onClick={handleAddUser}
            className="absolute left-0 size-[34px] cursor-pointer rounded-[50%] border-[0.94px] border-dashed border-[#C1C1C1] p-[4.53px]"
          />

          {user?.thumbnail !== null ? <></> : <NoUser />}
          {/* <img
            alt="profile"
            className="absolute right-0 size-[34px] rounded-[50%] object-cover"
          /> */}
          {showAddUser && (
            <div
              onMouseLeave={() => {
                setShowAddUser(false)
              }}
              onMouseEnter={() => {
                setShowAddUser(true)
              }}
              className="absolute left-[-150px] top-10 h-[200px] w-[250px] overflow-y-auto border-2 bg-white p-1"
            >
              <div className="cursor-pointer px-3 py-1 ">
                {accounts.map((user: User) => {
                  return (
                    <div
                      onClick={() => {
                        setUserList(user)
                        setShowAddUser(false)
                      }}
                      key={user?.id}
                      className="hover:bg-gray-secondary"
                    >
                      {user.username}
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
