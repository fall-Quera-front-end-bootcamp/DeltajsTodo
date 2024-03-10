/* eslint-disable @typescript-eslint/no-empty-interface */
import { useEffect, useState } from 'react'
import Input from '../Input/Input'
import { FormProvider, useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import {
  useGetUserQuery,
  useUpdateInfoMutation
} from '../../features/users/usersInteractionApiSlice'
import Loading from '../Loading/Loading'
import { useAtom } from 'jotai'
import { userId } from '../../App'
import { store } from '../../app/store'

interface ProfileInfoProps {
  messageFunction: Function
}

const ProfileInfo = ({ messageFunction }: ProfileInfoProps) => {
  const [id, setId] = useAtom(userId)
  console.log(id)

  const getUser = useGetUserQuery(id)
  const [UpdateInfo] = useUpdateInfoMutation()
  const methods = useForm()

  const [isLoading, setIsLoading] = useState(true)
  const [isSending, setIsSending] = useState(false)
  const [userData, setUserData] = useState(['', '', ''])

  const profileNameProps = {
    name: 'profile_name',
    validation: {
      required: {
        value: true,
        message: 'لطفا نام خود را وارد کنید'
      }
    },
    id: 'profile_name',
    label: 'نام',
    type: 'text',
    value: `${userData[0]}`
  }

  const profileLastNameProps = {
    name: 'profile_last_name',
    validation: {
      required: {
        value: true,
        message: 'لطفا نام خانوادگی خود را وارد کنید'
      }
    },
    id: 'profile_last_name',
    label: 'نام خانوادگی',
    type: 'text',
    value: `${userData[1]}`
  }

  const profilePhoneProps = {
    name: 'profile_phone',
    validation: {
      required: {
        value: true,
        message: 'لطفا شماره موبایل خود را وارد کنید'
      }
    },
    id: 'profile_phone',
    label: 'شماره موبایل',
    type: 'text',
    value: `${userData[2]}`
  }

  // const user = store.getState().auth.user

  useEffect(() => {
    if (getUser.status === 'fulfilled') {
      setUserData([
        getUser.data.first_name,
        getUser.data.last_name,
        getUser.data.phone_number || ''
        // store.getState().auth.user.first_name,
        // store.getState().auth.user.last_name,
        // store.getState().auth.user.phone_number
      ])
      setIsLoading(false)
    }
    console.log(getUser.status)
  }, [getUser])

  const onSubmit = methods.handleSubmit((data) => {
    setIsSending(true)
    const updateData = {
      first_name: data.profile_name,
      last_name: data.profile_last_name,
      phone_number: data.profile_phone
    }
    handleSubmit(updateData)
  })

  const handleSubmit = async (data: {
    first_name: string
    last_name: string
    phone_number: string
  }): Promise<void> => {
    try {
      await UpdateInfo({ data, id }).unwrap()
      messageFunction('تغییرات با موفقیت اعمال شد', 'success')
    } catch (err: any) {
      messageFunction('تغییرات موفقیت آمیز نبود', 'fail')
      methods.reset
    }
    setIsSending(false)
  }

  if (isLoading) {
    return (
      <Loading classNames="bg-brand-primary rounded-[30px]">
        <span className="text-white">Loading</span>
        <></>
      </Loading>
    )
  } else {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        exit={{
          opacity: 1,
          transition: { duration: 1 }
        }}
        onSubmit={onSubmit}
        className="flex flex-col gap-8"
      >
        <div className="flex items-center gap-4">
          <div className="bg-[#FFF3BF] px-[22.86px] pt-[25.71px] pb-[20px] rounded-[285.71px]">
            <span className="font-medium text-[34.29px] leading-[48.31px] text-[#FAB005]">
              NM
            </span>
          </div>

          <div className="flex flex-col items-center gap-4">
            <button className="p-[10px] rounded-lg border border-[#208D8E] font-medium text-[20px] leading-[28.18px] text-[#208D8E]">
              ویرایش تصویر پروفایل
            </button>
            <span className="font-normal text-[12px] leading-[16.91px]">
              این تصویر برای عموم قابل نمایش است.
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <FormProvider {...methods}>
            <motion.form
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              exit={{
                opacity: 1,
                transition: { duration: 1 }
              }}
              onSubmit={onSubmit}
              className="flex flex-col gap-10"
            >
              <div
                className="w-[354px] flex flex-col gap-4"
                key={`${isLoading}`}
              >
                <Input {...profileNameProps} />
                <Input {...profileLastNameProps} />
                <Input {...profilePhoneProps} />
              </div>

              <button className="flex justify-center w-[354px] rounded-md py-[8px] px-[12px] bg-brand-primary text-white font-extrabold text-[14px] leading-[19.73px]">
                {isSending ? <Loading /> : <span>ثبت تغییرات</span>}
              </button>
            </motion.form>
          </FormProvider>
        </div>
      </motion.div>
    )
  }
}

export default ProfileInfo
