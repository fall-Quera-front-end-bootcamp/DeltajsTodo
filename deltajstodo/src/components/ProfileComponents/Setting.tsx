/* eslint-disable @typescript-eslint/no-empty-interface */
import { type FunctionComponent } from 'react'
import ButtonColorIconSvg from '../Icons/ButtonColorIconSvg'
import ThemeToggle from '../ThemeToggle/ThemeToggle'
import { motion } from 'framer-motion'

interface SettingProps {}

const Setting: FunctionComponent<SettingProps> = () => {
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
      className="flex flex-col gap-6"
    >
      <div className="flex flex-col gap-2 w-[354px]">
        <span className="font-normal text-[14px] leading-[19.73px]">
          انتخاب تم
        </span>

        <div className="flex gap-[20.36px]">
          <ButtonColorIconSvg color="#FD7E14" name="radio" />
          <ButtonColorIconSvg color="#FAB005" name="radio" />
          <ButtonColorIconSvg color="#82C91E" name="radio" />
          <ButtonColorIconSvg color="#40C057" name="radio" />
          <ButtonColorIconSvg color="#208D8E" name="radio" />
          <ButtonColorIconSvg color="#12B886" name="radio" />
          <ButtonColorIconSvg color="#15AABF" name="radio" />
          <ButtonColorIconSvg color="#228BE6" name="radio" />
          <ButtonColorIconSvg color="#4C6EF5" name="radio" />
          <ButtonColorIconSvg color="#7950F2" name="radio" />
          <ButtonColorIconSvg color="#BE4BDB" name="radio" />
          <ButtonColorIconSvg color="#E64980" name="radio" />
          <ButtonColorIconSvg color="#FA5252" name="radio" />
        </div>
      </div>

      <ThemeToggle />
    </motion.div>
  )
}

export default Setting
