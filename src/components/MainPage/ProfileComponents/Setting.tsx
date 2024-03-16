/* eslint-disable @typescript-eslint/no-empty-interface */
import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

import {
  useGetSettingsQuery,
  useSetSettingsMutation
} from '../../../features/users/usersInteractionApiSlice'

import ButtonColorIconSvg from '../../Common/Icons/ButtonColorIconSvg'
import ThemeToggle from '../../Common/Buttons/ThemeToggle'
import Loading from '../../Common/Loading/Loading'

interface SettingProps {
  messageFunction: Function
}

const Setting = ({ messageFunction }: SettingProps) => {
  const getSettings = useGetSettingsQuery(1)
  const [setSettings] = useSetSettingsMutation()

  const [isLoading, setIsLoading] = useState(true)
  const [isSending, setIsSending] = useState(false)

  const [chosedColor, setChosedColor] = useState('#208D8E')

  const colorsPalet = useRef<any>([
    '#FD7E14',
    '#FAB005',
    '#82C91E',
    '#40C057',
    '#208D8E',
    '#12B886',
    '#15AABF',
    '#228BE6',
    '#4C6EF5',
    '#7950F2',
    '#BE4BDB',
    '#E64980',
    '#FA5252'
  ])

  const changeThemeHandler = (e: any) => {
    setChosedColor(e.target.value)
  }

  useEffect(() => {
    if (getSettings.status === 'fulfilled') {
      setChosedColor(getSettings.data[0].theme)
      setIsLoading(false)
    }
  }, [getSettings])

  const onSubmit = () => {
    setIsSending(true)
    const updateData = {
      theme: chosedColor
    }
    handleSubmit(updateData)
  }

  const handleSubmit = async (data: { theme: string }): Promise<void> => {
    try {
      await setSettings(data).unwrap()
      messageFunction('تغییرات با موفقیت اعمال شد', 'success')
    } catch (err: any) {
      messageFunction('تغییرات موفقیت آمیز نبود', 'fail')
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
        className="flex flex-col gap-6"
      >
        <div className="flex w-[354px] flex-col gap-2">
          <span className="text-[14px] font-normal leading-[19.73px]">
            انتخاب تم
          </span>

          <div className="flex gap-[20.36px]">
            {colorsPalet.current.map((color: string, x) => {
              const checked = color === chosedColor
              return (
                <ButtonColorIconSvg
                  key={x}
                  id={color}
                  name={'color'}
                  color={color}
                  value={color}
                  checked={checked}
                  onChangeHandler={changeThemeHandler}
                />
              )
            })}
          </div>
        </div>

        <ThemeToggle />

        <button
          className="mt-[40px] flex w-[354px] justify-center rounded-md bg-brand-primary px-[12px] py-[8px] text-[14px] font-extrabold leading-[19.73px] text-white"
          onClick={onSubmit}
        >
          {isSending ? <Loading /> : <span>ثبت تغییرات</span>}
        </button>
      </motion.div>
    )
  }
}

export default Setting
