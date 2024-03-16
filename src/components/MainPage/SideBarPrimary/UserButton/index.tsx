/* eslint-disable multiline-ternary */
import { Link } from 'react-router-dom'
import { useGetUserQuery } from '../../../../features/users/usersInteractionApiSlice'
import LoadingComponent from '../../../Common/LoadingComponent/LoadingComponent'
import Cookeis from 'universal-cookie'

const UserButton = (): JSX.Element => {
  const cookies = new Cookeis()
  const userId = cookies.get('id')
  const { data: userData, isLoading } = useGetUserQuery(userId)

  const firstName: string = userData?.first_name ?? ''
  const lastName: string = userData?.last_name ?? ''

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
          <div className="flex flex-row items-center justify-center gap-3 rounded-lg px-4 py-2  text-right text-[16px] font-medium transition-all duration-300 hover:bg-gray-secondary">
            <p className="">{`${firstName} ${lastName}`}</p>
            <div className="h-[33px] w-[36px] rounded-[100px] bg-blue-secondary px-[8px] pb-[7px] pt-[9px] text-right text-bodyxs font-normal text-[#4C6EF5]">
              {`${firstName.slice(0, 1)} ${lastName.slice(0, 1)}`}
            </div>
          </div>
        </Link>
      )}
    </>
  )
}

export default UserButton
