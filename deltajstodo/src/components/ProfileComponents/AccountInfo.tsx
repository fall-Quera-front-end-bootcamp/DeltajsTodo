/* eslint-disable @typescript-eslint/no-empty-interface */
import { motion } from 'framer-motion'
import { type FunctionComponent } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import Input from '../Input/Input'

interface AccountInfoProps {}

const AccountInfo: FunctionComponent<AccountInfoProps> = () => {
  const methods = useForm()

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
    type: 'email'
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
    type: 'text'
  }

  const accountCurrentPasswordProps = {
    name: 'account_current_pass',
    validation: {
      required: {
        value: true,
        message: 'لطفا رمز عبور خود را وارد کنید'
      }
    },
    id: 'account_current_pass',
    label: 'رمز عبور فعلی',
    type: 'password'
  }

  const accountNewPasswordProps = {
    name: 'account_new_pass',
    validation: {
      required: {
        value: true,
        message: 'لطفا رمز عبور جدید خود را وارد کنید'
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
        value: true,
        message: 'لطفا تکرار رمز عبور را وارد کنید'
      }
    },
    id: 'account_repeated_new_pass',
    label: 'تکرار رمز عبور جدید',
    type: 'password'
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      exit={{
        opacity: 1,
        transition: { duration: 1 }
      }}
      onSubmit={(e) => e.preventDefault()}
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
            className="flex flex-col gap-2"
          >
            <div className="w-[354px] flex flex-col gap-4">
              <Input {...accountEmailProps} />
              <Input {...accountUserNameProps} />
              <Input {...accountCurrentPasswordProps} />
              <Input {...accountNewPasswordProps} />
              <Input {...accountRepeatedNewPasswordProps} />
            </div>
          </motion.form>
        </FormProvider>
      </div>
    </motion.div>
  )
}

export default AccountInfo
