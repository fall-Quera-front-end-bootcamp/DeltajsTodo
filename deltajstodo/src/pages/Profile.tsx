/* eslint-disable @typescript-eslint/no-empty-interface */
import { useState, type FunctionComponent } from 'react'
import ProfileSideBar from '../components/ProfileComponents/ProfileSideBar'
import ProfileInfo from '../components/ProfileComponents/ProfileInfo'
import AccountInfo from '../components/ProfileComponents/AccountInfo'
import Setting from '../components/ProfileComponents/Setting'
import { Theme } from './MainLayout'
import { useAtom } from 'jotai'
import { string } from 'prop-types'
import Message from '../components/Message/Message'
interface ProfileProps {}

const Profile: FunctionComponent<ProfileProps> = () => {
  const [theme, setTheme] = useAtom(Theme)

  const [section, setSection] = useState('info')
  const [title, setTitle] = useState('اطلاعات فردی')
  const [messages, setMessages] = useState<string[][]>([])

  const setMessage = (text: string, type: string) => {
    const newValue = [...messages, [text, type]]
    setMessages(newValue)
    setTimeout(() => {}, 5000)
  }

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
        return <ProfileInfo messageFunction={setMessage} />
      case 'account':
        return <AccountInfo messageFunction={setMessage} />
      default:
        return <Setting messageFunction={setMessage} />
    }
  }

  return (
    <div
      dir="rtl"
      className={`flex w-[100%] h-[100vh] ${theme.bgColor} ${theme.textColor}`}
    >
      <div className="fixed top-3 left-[50%] translate-x-[-50%]">
        {messages.map((item) => {
          return <Message text={item[0]} type={item[1]} />
        })}
      </div>
      {/* sidebar */}
      <div className="w-[340px] h-[100%]">
        <ProfileSideBar onClickFunction={changeSection} selected={section} />
      </div>

      {/* main content */}
      <div className="relative flex-grow-[2] py-[170px] px-[58px] overflow-y-scroll no-scrollbar">
        <div className={`flex flex-col gap-8 transition-[height] duration-700`}>
          <span className="font-bold text-[31px] leading-[43.68px] animate-fadein">
            {title}
          </span>

          {sectionRendering()}
        </div>
      </div>
    </div>
  )
}

export default Profile
