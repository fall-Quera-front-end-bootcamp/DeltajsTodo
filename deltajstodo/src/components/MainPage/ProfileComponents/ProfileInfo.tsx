/* eslint-disable @typescript-eslint/no-empty-interface */
import { type FunctionComponent } from 'react'
import Input from '../../Common/Input/Input'
import { FormProvider, useForm } from 'react-hook-form'
import { motion } from 'framer-motion'

interface ProfileInfoProps {}

const ProfileInfo: FunctionComponent<ProfileInfoProps> = () => {
  const methods = useForm()

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
    type: 'text'
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
    type: 'text'
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
    type: 'text'
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
      onSubmit={(e) => {
        e.preventDefault()
      }}
      className="flex flex-col gap-8"
    >
      <div className="flex items-center gap-4">
        <div className="rounded-[285.71px] bg-[#FFF3BF] px-[22.86px] pb-[20px] pt-[25.71px]">
          <span className="text-[34.29px] font-medium leading-[48.31px] text-[#FAB005]">
            NM
          </span>
        </div>

        <div className="flex flex-col items-center gap-4">
          <button className="rounded-lg border border-[#208D8E] p-[10px] text-[20px] font-medium leading-[28.18px] text-[#208D8E]">
            ویرایش تصویر پروفایل
          </button>
          <span className="text-[12px] font-normal leading-[16.91px]">
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
            onSubmit={(e) => {
              e.preventDefault()
            }}
            className="flex flex-col gap-2"
          >
            <div className="flex w-[354px] flex-col gap-4">
              <Input {...profileNameProps} />
              <Input {...profileLastNameProps} />
              <Input {...profilePhoneProps} />
            </div>
          </motion.form>
        </FormProvider>
      </div>
    </motion.div>
  )
}

export default ProfileInfo
