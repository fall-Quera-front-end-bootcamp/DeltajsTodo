/* eslint-disable @typescript-eslint/no-empty-interface */
import { useState, type FunctionComponent } from 'react'
import ProfileSideBar from '../components/ProfileComponents/ProfileSideBar'
import ProfileInfo from '../components/ProfileComponents/ProfileInfo'
import AccountInfo from '../components/ProfileComponents/AccountInfo'
import Setting from '../components/ProfileComponents/Setting'
interface ProfileProps {}

const Profile: FunctionComponent<ProfileProps> = () => {
  const [section, setSection] = useState('info')
  const [title, setTitle] = useState('اطلاعات فردی')

  const changeSection = (e: any) => {
    setSection(e.target.ariaLabel)
    switch (e.target.ariaLabel) {
      case 'info':
        setTitle('اطلاعات فردی')
        break
      case 'account':
        setTitle('اطلاعات حساب')
        break
      default:
        setTitle('تنظیمات')
    }
  }

  const sectionRendering = () => {
    switch (section) {
      case 'info':
        return <ProfileInfo />
      case 'account':
        return <AccountInfo />
      default:
        return <Setting />
    }
  }

  return (
    <div dir="rtl" className="flex w-[100%] h-[100vh]">
      {/* sidebar */}
      <div className="w-[340px] h-[100%]">
        <ProfileSideBar onClickFunction={changeSection} selected={section} />
      </div>

      {/* main content */}
      <div className="flex-grow-[2] py-[170px] px-[58px] overflow-y-scroll no-scrollbar">
        <div className={`flex flex-col gap-8 transition-[height] duration-700`}>
          <span className="font-bold text-[31px] leading-[43.68px] animate-fadein">
            {title}
          </span>

          <div className="flex flex-col gap-10">
            {sectionRendering()}

            <button className="w-[354px] rounded-md py-[8px] px-[12px] bg-brand-primary text-white font-extrabold text-[14px] leading-[19.73px]">
              ثبت تغییرات
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
