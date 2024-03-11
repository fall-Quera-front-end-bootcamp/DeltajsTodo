import { useState, type FunctionComponent } from 'react'
import AddIconSvg from '../../../../../Common/Icons/AddIconSvg'

/* eslint-disable @typescript-eslint/no-empty-interface */
interface NewColumnProps {}

const NewColumn: FunctionComponent<NewColumnProps> = () => {
  const [newBoard, setNewBoard] = useState(true)

  // const [login, { isLoading }] = useLoginMutation()
  // const dispatch = useDispatch()
  // const [err, setErr] = useState()
  // const handleSubmit = async (
  //   data = {
  //     username: 'any',
  //     password: 'any'
  //   }
  // ): Promise<void> => {
  //   try {
  //     const userData = await login({
  //       username: data.username,
  //       password: data.password
  //     }).unwrap()
  //     console.log(userData)

  //     dispatch(
  //       setCredentials({ accessToken: userData.access, user: { ...userData } })
  //     )

  //     methods.reset()
  //     navigate('/workspace')
  //   } catch (err: any) {
  //     setErr(err)
  //   }
  // }
  // const onSubmit = methods.handleSubmit((data) => {
  //   console.log(data)
  //   //  fetch(data)
  //   handleSubmit(data)
  //   // handleUsers()
  // })

  const handleNewBoard = (): void => {
    setNewBoard((p) => !p)
  }
  return (
    <>
      <button
        onClick={handleNewBoard}
        className="relative flex h-[40px] w-[250px] flex-row items-center justify-between rounded-[16px] px-[12px] py-[8x] shadow-[0_3px_4px_0] shadow-[#00000033]"
      >
        <p className="w-full text-right text-[16px] font-medium leading-[22.55px] text-[#1E1E1E]">
          ساختن برد چدید
        </p>
        <AddIconSvg />
      </button>
    </>
  )
}

export default NewColumn
