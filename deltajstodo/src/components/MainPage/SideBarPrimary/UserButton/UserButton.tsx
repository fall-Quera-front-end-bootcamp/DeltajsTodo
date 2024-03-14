/* eslint-disable multiline-ternary */
import { Link } from 'react-router-dom'
import { useGetUserQuery } from '../../../../features/users/usersInteractionApiSlice'
import Cookies from 'universal-cookie'
import LoadingComponent from '../../../Common/LoadingComponent/LoadingComponent'

const UserButton = (): JSX.Element => {
  // const id = store.getState().auth.user?.user_id
  const cookies = new Cookies()
  const id = cookies.get('id')

  const { data: userData, isLoading } = useGetUserQuery(id)

  const firstName: string = userData?.first_name
  const lastName: string = userData?.last_name

  return (
    <>
      {isLoading ? (
        <div className="w-full bg-gray-secondary p-4">
          <LoadingComponent />
        </div>
      ) : (
        <Link
          to={'/profile'}
          className="flex items-center justify-end gap-4 p-[16px]"
        >
          <p className="text-right text-[16px] font-medium">
            {`${firstName} ${lastName}`}
          </p>
          <div className="h-[33px] w-[36px] rounded-[100px] bg-blue-secondary px-[8px] pb-[7px] pt-[9px] text-right text-bodyxs font-normal text-[#4C6EF5]">
            {`${firstName.slice(0, 1)} ${lastName.slice(0, 1)}`}
          </div>
        </Link>
      )}
    </>
  )
}

export default UserButton
