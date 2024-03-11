/* eslint-disable @typescript-eslint/no-empty-interface */
import { useEffect, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { motion } from 'framer-motion'

import axios from 'axios'

import { store } from '../../app/store'
import {
  useGetUserQuery,
  useUpdateInfoMutation
} from '../../features/users/usersInteractionApiSlice'

import Loading from '../Loading/Loading'
import Input from '../Input/Input'

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

  useEffect(() => {
    if (getUser.status === 'fulfilled') {
      setUserData([
        getUser.data.first_name,
        getUser.data.last_name,
        getUser.data.phone_number || ''
      ])
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
    } else {
      const updateData = {
        thumbnail: null
      }
      handleInfoSubmit(updateData)
    }

    const updateData = {
      first_name: data.profile_name,
      last_name: data.profile_last_name,
      phone_number: data.profile_phone
    }
    handleInfoSubmit(updateData)
  })

  const handleImageSubmit = async (data: FormData): Promise<void> => {
    const accessToken = store.getState().auth.user?.access
    const url = `http://185.8.174.74:8000/accounts/${id}/`

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
      .catch(() =>
        messageFunction('مشکلی در تغییر عکس پروفایل پیش آمده', 'fail')
      )

    setIsSending(false)
  }

  const handleInfoSubmit = async (data: {
    first_name?: string
    last_name?: string
    phone_number?: string
    thumbnail?: null
  }): Promise<void> => {
    try {
      await UpdateInfo({ data, id }).unwrap()
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
          <div className="w-[100.71px] h-[93.71px] rounded-[285.71px] overflow-hidden">
            {profileImageURL ? (
              <img
                src={profileImageURL}
                alt=""
                className="w-[100%] h-[100%] object-cover"
              />
            ) : (
              <span className="w-[100%] h-[100%] bg-[#FFF3BF] pt-2 flex justify-center items-center font-medium text-[34.29px] leading-[48.31px] text-[#FAB005]">
                NM
              </span>
            )}
          </div>

          <div className="flex flex-col justify-center h-[93.71px] gap-3">
            {profileImageURL ? (
              <span
                className="text-[15px] text-red-primary cursor-pointer"
                onClick={deleteProfileImage}
              >
                حذف تصویر پروفایل
              </span>
            ) : (
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
              <span className="p-[10px] rounded-lg border border-[#208D8E] font-medium text-[20px] leading-[28.18px] text-[#208D8E]">
                ویرایش تصویر پروفایل
              </span>
            </label>

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
