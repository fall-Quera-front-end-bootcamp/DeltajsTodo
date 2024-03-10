/* eslint-disable @typescript-eslint/no-empty-interface */
import { useState, type FunctionComponent } from 'react'
import ProfileSideBar from '../../components/MainPage/ProfileComponents/ProfileSideBar'
import ProfileInfo from '../../components/MainPage/ProfileComponents/ProfileInfo'
import AccountInfo from '../../components/MainPage/ProfileComponents/AccountInfo'
import Setting from '../../components/MainPage/ProfileComponents/Setting'
interface ProfileProps {}

const Profile: FunctionComponent<ProfileProps> = () => {
  const [section, setSection] = useState('info')
  const [title, setTitle] = useState('اطلاعات فردی')

  const changeSection = (e: any): void => {
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

  const sectionRendering = (): JSX.Element => {
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
    <div dir="rtl" className="flex h-[100vh] w-[100%]">
      {/* sidebar */}
      <div className="h-[100%] w-[340px]">
        <ProfileSideBar onClickFunction={changeSection} selected={section} />
      </div>

      {/* main content */}
      <div className="grow-[2] overflow-y-scroll px-[58px] py-[170px] no-scrollbar">
        <div className={'flex flex-col gap-8 transition-[height] duration-700'}>
          <span className="text-[31px] font-bold leading-[43.68px]">
            {title}
          </span>

          <div className="flex flex-col gap-10">
            {sectionRendering()}

            <button className="w-[354px] rounded-md bg-brand-primary px-[12px] py-[8px] text-[14px] font-extrabold leading-[19.73px] text-white">
              ثبت تغییرات
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
