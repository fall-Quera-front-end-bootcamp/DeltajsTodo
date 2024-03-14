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
    <div className="w-[100%] h-[100%] border-l-[0.5px] border-l-[#AAAAAA] pt-[40px] pr-[50px]">
      <p className="text-headingl leading-[45.09px] font-extrabold text-cyan-primary text-right">
        کوئرا تسک منیجر
      </p>

      <button className="flex items-center gap-2 mt-[85px] rounded-lg py-[4px] px-[8px] text-white bg-brand-primary">
        <ArrowIconSvg className="w-[24px] h-[24px]" />
        <span className="font-medium text-[20px] leading-[28.18px]">
          بازگشت
        </span>
      </button>

      <div className="flex flex-col gap-8 w-[266px] mt-[43px]">
        <button
          name="info"
          className={`relative flex gap-[11px] rounded-[4px] py-[4px] px-[8px] ${selected === 'info' ? 'bg-[#C2F7FA]' : 'bg-white'} cursor-pointer transition-all duration-700`}
          onClick={(e) => onClickFunction(e)}
        >
          <div
            className="absolute inset-0 w-[100%] h-[100%]"
            aria-label="info"
          ></div>

          <ProfileEditUserIconSvg className="w-[24px] h-[24px]" />

          <span
            className={`${selected === 'info' ? 'font-[800]' : 'font-[500]'} text-[20px] leading-[28.18px] text-[#1E1E1E] transition-all duration-700`}
          >
            اطلاعات فردی
          </span>
        </button>

        <button
          className={`relative flex gap-[11px] rounded-[4px] py-[4px] px-[8px] ${selected === 'account' ? 'bg-[#C2F7FA]' : 'bg-white'} cursor-pointer transition-all duration-700`}
          onClick={(e) => onClickFunction(e)}
        >
          <div
            className="absolute inset-0 w-[100%] h-[100%]"
            aria-label="account"
          ></div>

          <ProfileCheckmarkUserIconSvg className="w-[24px] h-[24px]" />

          <span
            className={`${selected === 'account' ? 'font-[800]' : 'font-[500]'} text-[20px] leading-[28.18px] text-[#1E1E1E] transition-all duration-700`}
          >
            اطلاعات حساب
          </span>
        </button>

        <button
          className={`relative flex gap-[11px] rounded-[4px] py-[4px] px-[8px] ${selected === 'setting' ? 'bg-[#C2F7FA]' : 'bg-white'} cursor-pointer transition-all duration-700`}
          onClick={(e) => onClickFunction(e)}
        >
          <div
            className="absolute inset-0 w-[100%] h-[100%]"
            aria-label="setting"
          ></div>

          <SettingIconSvg className="w-[24px] h-[24px]" />

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
