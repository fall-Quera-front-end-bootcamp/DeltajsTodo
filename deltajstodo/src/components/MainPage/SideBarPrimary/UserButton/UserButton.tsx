import { Link } from 'react-router-dom'

const UserButton = (): JSX.Element => {
  return (
    <Link to={'/profile'} className="flex justify-end space-x-2 p-[16px]">
      <p className="text-right text-[16px] font-medium">
        {/* {`${getUser.data?.first_name} ${getUser.data?.last_name}`} */}{' '}
        FirstName-LastName
      </p>
      <div className="h-[33px] w-[36px] rounded-[100px] bg-blue-secondary px-[8px] pb-[7px] pt-[9px] text-right text-bodyxs font-normal text-[#4C6EF5]">
        NM
      </div>
    </Link>
  )
}

export default UserButton
