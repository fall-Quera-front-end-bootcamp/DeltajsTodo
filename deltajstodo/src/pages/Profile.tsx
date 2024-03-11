/* eslint-disable @typescript-eslint/no-empty-interface */
import { useState, type FunctionComponent } from 'react'

import ProfileSideBar from '../components/ProfileComponents/ProfileSideBar'
import ProfileInfo from '../components/ProfileComponents/ProfileInfo'
import AccountInfo from '../components/ProfileComponents/AccountInfo'
import Setting from '../components/ProfileComponents/Setting'
import Message from '../components/Message/Message'

interface ProfileProps {}

const Profile: FunctionComponent<ProfileProps> = () => {
  const [section, setSection] = useState('info')
  const [title, setTitle] = useState('اطلاعات فردی')
  const [messages, setMessages] = useState<
    Array<{ text: string; type: string }>
  >([])

  const setMessage = (text: string, type: string) => {
    setMessages((prev) => [...prev, { text: text, type: type }])
    const remove = setTimeout(() => {
      setMessages([])
    }, 5000)
    return () => clearTimeout(remove)
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
    <div dir="rtl" className={`flex w-[100%] h-[100vh]`}>
      <div className="fixed top-3 left-[50%] translate-x-[-50%] z-10">
        {messages.map((item, index) => {
          if (index < messages.length / 2) {
            return <Message key={index} text={item.text} type={item.type} />
          }
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
