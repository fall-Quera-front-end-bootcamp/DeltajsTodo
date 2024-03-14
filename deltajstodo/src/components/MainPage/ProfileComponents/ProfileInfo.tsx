/* eslint-disable @typescript-eslint/no-empty-interface */
import { useEffect, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { motion } from 'framer-motion'

import axios from 'axios'

import { store } from '../../../app/store'
import {
  useGetUserQuery,
  useUpdateInfoMutation
} from '../../../features/users/usersInteractionApiSlice'

import Loading from '../../Common/Loading/Loading'
import Input from '../../Common/Input/Input'

interface ProfileInfoProps {
  messageFunction: Function
}

const ProfileInfo = ({ messageFunction }: ProfileInfoProps) => {
  const id = store.getState().auth.user?.user_id

  const getUser = useGetUserQuery(id)
  const [UpdateInfo] = useUpdateInfoMutation()
  const methods = useForm()

  const [isLoading, setIsLoading] = useState(true)
  const [isSending, setIsSending] = useState(false)
  const [userData, setUserData] = useState(['', '', ''])

  const [profileImageURL, setProfileImageURL] = useState('')
  const [profileImageFile, setProfileImageFile] = useState<File | null>(null)

  const uploadImage = (e: any) => {
    const imageFile = e.target.files[0]
    setProfileImageFile(imageFile)

    const imageurl = URL.createObjectURL(imageFile)
    setProfileImageURL(imageurl)
  }

  const clearImage = (e: any) => (e.target.value = '')

  const deleteProfileImage = () => {
    setProfileImageURL('')
    setProfileImageFile(null)
  }

  const profileNameProps = {
    name: 'profile_name',
    validation: {
      required: {
        value: false,
        message: 'لطفا نام خود را وارد کنید'
      }
    },
    id: 'profile_name',
    label: 'نام',
    type: 'text',
    initialValue: `${userData[0]}`
  }

  const profileLastNameProps = {
    name: 'profile_last_name',
    validation: {
      required: {
        value: false,
        message: 'لطفا نام خانوادگی خود را وارد کنید'
      }
    },
    id: 'profile_last_name',
    label: 'نام خانوادگی',
    type: 'text',
    initialValue: `${userData[1]}`
  }

  const profilePhoneProps = {
    name: 'profile_phone',
    validation: {
      required: {
        value: false,
        message: 'لطفا شماره موبایل خود را وارد کنید'
      }
    },
    id: 'profile_phone',
    label: 'شماره موبایل',
    type: 'text',
    initialValue: `${userData[2]}`
  }

  useEffect(() => {
    if (getUser.status === 'fulfilled') {
      setUserData([
        getUser.data.first_name,
        getUser.data.last_name,
        getUser.data.phone_number || ''
      ])
      console.log(getUser.data.thumbnail)
      setProfileImageURL(getUser.data.thumbnail)
      setIsLoading(false)
    }
  }, [getUser])

  const onSubmit = methods.handleSubmit((data) => {
    setIsSending(true)

    if (profileImageFile) {
      const updateData = new FormData()
      updateData.append('thumbnail', profileImageFile, profileImageFile.name)
      handleImageSubmit(updateData)
    }

    const updateData = {
      id,
      first_name: data.profile_name,
      last_name: data.profile_last_name,
      phone_number: data.profile_phone
    }
    handleInfoSubmit(updateData)
  })

  const handleImageSubmit = async (data: FormData): Promise<void> => {
    const accessToken = store.getState().auth.user?.access
    const url = 'http://185.8.174.74:8000/accounts/86/'

    await axios
      .patch(url, data, {
        headers: {
          'content-type': 'multipart/form-data',
          Authorization: `Bearer ${accessToken}`
        }
      })
      .then(() => {
        messageFunction('عکس پروفایل تغییر کرد', 'success')
      })
      .catch(() => {
        messageFunction('مشکلی در تغییر عکس پروفایل پیش آمده', 'fail')
      })

    setIsSending(false)
  }

  const handleInfoSubmit = async (data: {
    id?: number
    first_name?: string
    last_name?: string
    phone_number?: string
    thumbnail?: null
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
          <div className="h-[93.71px] w-[100.71px] overflow-hidden rounded-[285.71px]">
            {profileImageURL
              ? (
              <img
                src={profileImageURL}
                alt=""
                className="size-[100%] object-cover"
              />
                )
              : (
              <span className="flex size-[100%] items-center justify-center bg-[#FFF3BF] pt-2 text-[34.29px] font-medium leading-[48.31px] text-[#FAB005]">
                NM
              </span>
                )}
          </div>

          <div className="flex h-[93.71px] flex-col justify-center gap-3">
            {profileImageURL
              ? (
              <span
                className="cursor-pointer text-[15px] text-red-primary"
                onClick={deleteProfileImage}
              >
                حذف تصویر پروفایل
              </span>
                )
              : (
              <></>
                )}

            <label
              htmlFor="image_input"
              className="relative cursor-pointer py-[10px]"
            >
              <input
                type="file"
                accept="image/*"
                id="image_input"
                hidden
                onChange={uploadImage}
                onClick={clearImage}
              />
              <span className="rounded-lg border border-[#208D8E] p-[10px] text-[20px] font-medium leading-[28.18px] text-[#208D8E]">
                ویرایش تصویر پروفایل
              </span>
            </label>

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
              onSubmit={onSubmit}
              className="flex flex-col gap-10"
            >
              <div
                className="flex w-[354px] flex-col gap-4"
                key={`${isLoading}`}
              >
                <Input {...profileNameProps} />
                <Input {...profileLastNameProps} />
                <Input {...profilePhoneProps} />
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

export default ProfileInfo
