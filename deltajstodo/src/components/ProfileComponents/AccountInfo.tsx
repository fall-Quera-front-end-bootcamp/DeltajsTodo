/* eslint-disable @typescript-eslint/no-empty-interface */
import { motion } from 'framer-motion'
import { FormProvider, useForm } from 'react-hook-form'
import Input from '../Input/Input'
import {
  useGetUserQuery,
  useUpdateInfoMutation,
  useUpdatePassMutation
} from '../../features/users/usersInteractionApiSlice'
import { useEffect, useState } from 'react'
import Loading from '../Loading/Loading'
import { useAtom } from 'jotai'
import { userId } from '../../App'

interface AccountInfoProps {
  messageFunction: Function
}

const AccountInfo = ({ messageFunction }: AccountInfoProps) => {
  const [id, setId] = useAtom(userId)

  const getUser = useGetUserQuery(id)
  const [UpdateInfo] = useUpdateInfoMutation()
  const [UpdatePass] = useUpdatePassMutation()
  const methods = useForm()

  const [isLoading, setIsLoading] = useState(true)
  const [isSending, setIsSending] = useState(false)
  const [userData, setUserData] = useState(['', ''])
  const [passReqired, setPassReqired] = useState(false)

  const accountEmailProps = {
    name: 'account_email',
    validation: {
      required: {
        value: true,
        message: 'لطفا ایمیل خود را وارد کنید'
      }
    },
    id: 'account_email',
    label: 'ایمیل',
    type: 'email',
    value: `${userData[0]}`
  }

  const accountUserNameProps = {
    name: 'account_user_name',
    validation: {
      required: {
        value: true,
        message: 'لطفا نام کاربری خود را وارد کنید'
      }
    },
    id: 'account_user_name',
    label: 'نام کاربری',
    type: 'text',
    value: `${userData[1]}`
  }

  const accountCurrentPasswordProps = {
    name: 'account_current_pass',
    validation: {
      required: {
        value: passReqired,
        message: 'لطفا رمز عبور خود را وارد کنید'
      }
    },
    id: 'account_current_pass',
    label: 'رمز عبور فعلی',
    type: 'password',
    autocomplete: 'new-password'
  }

  const accountNewPasswordProps = {
    name: 'account_new_pass',
    validation: {
      required: {
        value: passReqired,
        message: 'لطفا رمز عبور خود را وارد کنید'
      }
    },
    id: 'account_new_pass',
    label: 'رمز عبور جدید',
    type: 'password'
  }

  const accountRepeatedNewPasswordProps = {
    name: 'account_repeated_new_pass',
    validation: {
      required: {
        value: passReqired,
        message: 'لطفا رمز عبور خود را وارد کنید'
      }
    },
    id: 'account_repeated_new_pass',
    label: 'تکرار رمز عبور جدید',
    type: 'password'
  }

  useEffect(() => {
    if (getUser.status === 'fulfilled') {
      setUserData([getUser.data.email, getUser.data.username])
      setIsLoading(false)
    }
  }, [getUser])

  const onSubmit = methods.handleSubmit((data) => {
    if (
      data.account_current_pass ||
      data.account_new_pass ||
      data.account_repeated_new_pass
    ) {
      console.log(1)
      setPassReqired(true)
    }
    if (
      data.account_current_pass &&
      data.account_new_pass &&
      data.account_repeated_new_pass
    ) {
      console.log(2)
      setIsSending(true)
      console.log(data)
      const updateInfo = {
        email: data.account_email,
        username: data.account_user_name
      }
      handleInfoChange(updateInfo)

      const updatePass = {
        old_password: data.account_current_pass,
        new_password: data.account_new_pass,
        new_password1: data.account_repeated_new_pass
      }
      handlePassChange(updatePass)
    } else if (
      !data.account_current_pass &&
      !data.account_new_pass &&
      !data.account_repeated_new_pass
    ) {
      setIsSending(true)
      console.log(data)
      const updateInfo = {
        email: data.account_email,
        username: data.account_user_name
      }
      handleInfoChange(updateInfo)
    }
  })

  const handleInfoChange = async (data: {
    email: string
    username: string
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

  const handlePassChange = async (data: {
    old_password: string
    new_password: string
    new_password1: string
  }): Promise<void> => {
    try {
      await UpdatePass(data).unwrap()
      messageFunction('رمز با موفقیت تغییر کرد', 'success')
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
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col gap-10"
            >
              <div className="w-[354px] flex flex-col gap-4">
                <Input {...accountEmailProps} />
                <Input {...accountUserNameProps} />
                <Input {...accountCurrentPasswordProps} />
                <Input {...accountNewPasswordProps} />
                <Input {...accountRepeatedNewPasswordProps} />
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

export default AccountInfo
