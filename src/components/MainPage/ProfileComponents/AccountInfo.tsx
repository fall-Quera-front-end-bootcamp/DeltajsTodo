/* eslint-disable @typescript-eslint/no-empty-interface */
import { useEffect, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import {
  useGetUserQuery,
  useUpdateInfoMutation,
  useUpdatePassMutation
} from '../../../features/users/usersInteractionApiSlice'
import Loading from '../../Common/Loading/Loading'
import Input from '../../Common/Input/Input'
import Cookies from 'universal-cookie'

interface AccountInfoProps {
  messageFunction: Function
}

const AccountInfo = ({ messageFunction }: AccountInfoProps): JSX.Element => {
  const cookies = new Cookies()
  const id = cookies.get('id')

  const getUser = useGetUserQuery(id)
  const [UpdateInfo] = useUpdateInfoMutation()
  const [UpdatePass] = useUpdatePassMutation()
  const methods = useForm()

  const [isLoading, setIsLoading] = useState(true)
  const [isSending, setIsSending] = useState(false)
  const [userData, setUserData] = useState(['', ''])

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
    initialValue: `${userData[0]}`
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
    initialValue: `${userData[1]}`,
    autocomplete: 'off'
  }

  const accountCurrentPasswordProps = {
    name: 'account_current_pass',
    validation: {
      required: {
        value: false,
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
        value: false,
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
        value: false,
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
      !data.account_current_pass &&
      !data.account_new_pass &&
      !data.account_repeated_new_pass
    ) {
      setIsSending(true)

      const updateInfo: {
        id: number | undefined
        email: string
        username: string
      } = {
        id,
        email: data.account_email,
        username: data.account_user_name
      }
      handleInfoChange(updateInfo)
    } else if (
      data.account_current_pass &&
      data.account_new_pass &&
      data.account_repeated_new_pass
    ) {
      setIsSending(true)
      const updatePass = {
        old_password: data.account_current_pass,
        new_password: data.account_new_pass,
        new_password1: data.account_repeated_new_pass
      }
      handlePassChange(updatePass)
    } else {
      messageFunction('فیلد‌های رمز عبور خالی است', 'fail')
    }
  })

  const handleInfoChange = async (data: {
    id: number | undefined
    email: string
    username: string
  }): Promise<void> => {
    try {
      await UpdateInfo(data).unwrap()
      messageFunction('اطلاعات با موفقیت تغییر کرد', 'success')
    } catch (err: any) {
      messageFunction('مشکلی در تغییر اطلاعات به وجود آمده', 'fail')
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
      messageFunction('تغییر رمز عبور موفقیت آمیز نبود', 'fail')
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
              onSubmit={(e) => {
                e.preventDefault()
              }}
              className="flex flex-col gap-10"
            >
              <div className="flex w-[354px] flex-col gap-4">
                <Input {...accountEmailProps} />
                <Input {...accountUserNameProps} />
                <Input {...accountCurrentPasswordProps} />
                <Input {...accountNewPasswordProps} />
                <Input {...accountRepeatedNewPasswordProps} />
              </div>

              <button className="flex w-[354px] justify-center rounded-md bg-brand-primary px-[12px] py-[8px] text-[14px] font-extrabold leading-[19.73px] text-white">
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
