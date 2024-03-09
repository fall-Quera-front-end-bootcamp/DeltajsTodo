import { useContext } from 'react'
import { UserContext } from '../../../../contexts/UserProvider'
import { Link } from 'react-router-dom'

const UserButton = (): JSX.Element => {
  const user = useContext(UserContext)
  return (
    <Link to={'/profile'} className="flex justify-end space-x-2 p-[16px]">
      <p className="text-right text-[16px] font-medium">
        {`${user?.profile?.userInformatin?.name} ${user?.profile?.userInformatin?.fmailyName}`}
      </p>
      <div className="h-[33px] w-[36px] rounded-[100px] bg-blue-secondary px-[8px] pb-[7px] pt-[9px] text-right text-bodyxs font-normal text-[#4C6EF5]">
        NM
      </div>
    </Link>
  )
}

export default UserButton
