/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-trailing-spaces */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable tailwindcss/enforces-shorthand */
/* eslint-disable tailwindcss/classnames-order */
/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable spaced-comment */
/* eslint-disable @typescript-eslint/no-confusing-void-expression */
/* eslint-disable @typescript-eslint/no-empty-interface */
import {
  useContext,
  type FunctionComponent,
  useRef,
  useState,
  useEffect
} from 'react'
import LeftArrow from '../../Icons/LeftArrow'
import Close from '../../Icons/Close'

import { localPageDispatchContext } from '../../../pages/MainLayout'
import ButtonColorIconSvg from '../../Icons/ButtonColorIconSvg'
import {
  useDeleteWorkspaceMutation,
  useUpdataWorkspaceMutation
} from '../../../features/auth/authApiSlice'

interface ResponseProps {
  responsetype?: 'success' | 'fail'
  message?: string
}

const Response: FunctionComponent<ResponseProps> = ({
  responsetype = 'success',
  message = ''
}) => {
  ////////////////////////////////////////////////////////////////
  const [deleteWorkspace, { isLoading }] = useDeleteWorkspaceMutation()

  const [err, setErr] = useState()
  const handleApiSubmit = async (data: { id: number }): Promise<void> => {
    try {
      const userData = await deleteWorkspace(data).unwrap()
      console.log(userData)
    } catch (err: any) {
      setErr(err)
    }
  }

  ///////////////////////////////////////////////////
  const localPageDispatch: any = useContext(localPageDispatchContext)

  const onSubmitHandler = (): void => {}
  useEffect(() => {}, [])
  return (
    <>
      <div
        dir="rtl"
        className={` bg-white h-[286px] w-[501px]
            rounded-lg p-[24px]
             flex flex-col items-center
              gap-[40px]
              ${responsetype === 'fail' ? 'border-l-green-primary' : 'border-l-red-primary'}
            `}
      >
        <div
          className="bg-white 
            h-[158px] w-[453px]
             flex flex-col items-center
              gap-[40px]"
        >
          {/* header */}
          <div
            className="bg-white 
            h-[32px] w-[453px]
             flex flex-row justify-between "
          >
            <div>
              <button onClick={() => localPageDispatch({ type: 'closeModal' })}>
                <Close />
              </button>
            </div>
            <div>
              <p
                className="font-yekan w-[245px] h-[32px]
                 text-center text-[24px] font-extrabold 
                 leading-[32px]  text-[#1E1E1E] "
              ></p>
            </div>
            <div className="invisible">
              <button onClick={() => {}}>
                <LeftArrow />
              </button>
            </div>
          </div>
          {/* colerPalet */}
          <div
            className="w-[453px] h-[86px]
                flex flex-row gap-[16px]
                "
          >
            <p
              className="font-yekan w-[245px] h-[32px]
                 text-center text-[24px] font-extrabold 
                 leading-[32px]  text-[#1E1E1E]"
            >
              {message}
            </p>

            {/*--------------------------------------------------------------- */}
          </div>
        </div>

        {/* ادامه*/}
        <div
          className="bg-white 
            h-[40px] w-[415px] rounded-md    flex gap-[10px] "
        >
          <button
            onClick={onSubmitHandler}
            className="bg-[#8ac1c2] h-[40px] w-[415px] rounded-md flex flex-row items-center justify-center"
          >
            <p className="font-yekan w-[30px] h-[20px] text-right text-[14px] font-extrabold leading-[19.73px]  text-[#FFFFFF] ">
              متوجه شدم
            </p>
          </button>
        </div>
      </div>
    </>
  )
}
export default Response
