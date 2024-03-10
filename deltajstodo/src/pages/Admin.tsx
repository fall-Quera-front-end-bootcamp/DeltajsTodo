/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { type FunctionComponent } from 'react'
import { useGetUsersQuery } from '../features/users/usersInteractionApiSlice'
import { useDispatch } from 'react-redux'
import { setUsers } from '../features/users/usersInteractionSlice'
import { store } from '../app/store'
import { useState } from 'react'
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface AdminProps {}

const Admin: FunctionComponent<AdminProps> = () => {
  const getUsers = useGetUsersQuery(null)
  const dispatch = useDispatch()
  const [errMsg, setErrMsg] = useState('')
  const handleUsers = async (): Promise<void> => {
    try {
      const usersData = getUsers
      console.log(usersData)
      dispatch(setUsers({ users: usersData.data }))
      const users = store.getState().usersInteractions
      console.log(users)
    } catch (err: any) {
      if (err?.status === null) {
        // isLoading: true until timeout occurs
        setErrMsg('No Server Response')
      } else if (err.originalStatus === 400) {
        setErrMsg('Missing Username or Password')
      } else if (err.originalStatus === 401) {
        setErrMsg('Unauthorized')
      } else {
        setErrMsg('Login Failed')
      }
    }
  }

  return (
    <>
      <div className="flex flex-col gap-4">
        <button onClick={handleUsers}>Get Users</button>

        <div className="flex flex-row gap-2">
          {' '}
          <input type="text" placeholder="id ?" /> <button>Get A User</button>
        </div>

        <button>Update A User</button>
        <button>Delete A User</button>
      </div>
    </>
  )
}

export default Admin
