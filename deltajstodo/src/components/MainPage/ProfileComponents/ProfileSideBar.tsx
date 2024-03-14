/* eslint-disable @typescript-eslint/no-empty-interface */
import { type FunctionComponent } from 'react'
import ArrowIconSvg from '../../Common/Icons/ArrowIconSvg'
import ProfileEditUserIconSvg from '../../Common/Icons/ProfileEditUserIconSvg'
import ProfileCheckmarkUserIconSvg from '../../Common/Icons/ProfileCheckmarkUserIconSvg'
import SettingIconSvg from '../../Common/Icons/SettingIconSvg'
interface ProfileSideBarProps {
  onClickFunction: any
  selected: string
}

const ProfileSideBar: FunctionComponent<ProfileSideBarProps> = ({
  onClickFunction,
  selected
}) => {
  return (
    <div className="size-[100%] border-l-[0.5px] border-l-[#AAAAAA] pr-[50px] pt-[40px]">
      <p className="text-right text-headingl font-extrabold leading-[45.09px] text-cyan-primary">
        کوئرا تسک منیجر
      </p>

      <button className="mt-[85px] flex items-center gap-2 rounded-lg bg-brand-primary px-[8px] py-[4px] text-white">
        <ArrowIconSvg className="size-[24px]" />
        <span className="text-[20px] font-medium leading-[28.18px]">
          بازگشت
        </span>
      </button>

      <div className="mt-[43px] flex w-[266px] flex-col gap-8">
        <button
          name="info"
          className={`relative flex gap-[11px] rounded-[4px] px-[8px] py-[4px] ${selected === 'info' ? 'bg-[#C2F7FA]' : 'bg-white'} cursor-pointer transition-all duration-700`}
          onClick={(e) => onClickFunction(e)}
        >
          <div
            className="absolute inset-0 size-[100%]"
            aria-label="info"
          ></div>

          <ProfileEditUserIconSvg className="size-[24px]" />

          <span
            className={`${selected === 'info' ? 'font-[800]' : 'font-[500]'} text-[20px] leading-[28.18px] text-[#1E1E1E] transition-all duration-700`}
          >
            اطلاعات فردی
          </span>
        </button>

        <button
          className={`relative flex gap-[11px] rounded-[4px] px-[8px] py-[4px] ${selected === 'account' ? 'bg-[#C2F7FA]' : 'bg-white'} cursor-pointer transition-all duration-700`}
          onClick={(e) => onClickFunction(e)}
        >
          <div
            className="absolute inset-0 size-[100%]"
            aria-label="account"
          ></div>

          <ProfileCheckmarkUserIconSvg className="size-[24px]" />

          <span
            className={`${selected === 'account' ? 'font-[800]' : 'font-[500]'} text-[20px] leading-[28.18px] text-[#1E1E1E] transition-all duration-700`}
          >
            اطلاعات حساب
          </span>
        </button>

        <button
          className={`relative flex gap-[11px] rounded-[4px] px-[8px] py-[4px] ${selected === 'setting' ? 'bg-[#C2F7FA]' : 'bg-white'} cursor-pointer transition-all duration-700`}
          onClick={(e) => onClickFunction(e)}
        >
          <div
            className="absolute inset-0 size-[100%]"
            aria-label="setting"
          ></div>

          <SettingIconSvg className="size-[24px]" />

          <span
            className={`${selected === 'setting' ? 'font-[800]' : 'font-[500]'} text-[20px] leading-[28.18px] text-[#1E1E1E] transition-all duration-700`}
          >
            تنظیمات
          </span>
        </button>
      </div>
    </div>
  )
}

export default ProfileSideBar
