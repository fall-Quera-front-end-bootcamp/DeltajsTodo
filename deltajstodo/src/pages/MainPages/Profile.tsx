/* eslint-disable multiline-ternary */
/* eslint-disable @typescript-eslint/no-empty-interface */
import { useState, type FunctionComponent } from 'react'
import ProfileInfo from '../../components/MainPage/ProfileComponents/ProfileInfo'
import AccountInfo from '../../components/MainPage/ProfileComponents/AccountInfo'
import Setting from '../../components/MainPage/ProfileComponents/Setting'
import ProfileSideBar from '../../components/MainPage/ProfileComponents/ProfileSideBar'
import Message from '../../components/Common/Message/Message'

interface ProfileProps {}

const Profile: FunctionComponent<ProfileProps> = () => {
  const [section, setSection] = useState('info')
  const [title, setTitle] = useState('اطلاعات فردی')
  const [messages, setMessages] = useState<
    Array<{ text: string; type: string }>
  >([])

  const setMessage = (text: string, type: string): (() => void) => {
    setMessages((prev) => [...prev, { text, type }])
    const remove = setTimeout(() => {
      setMessages([])
    }, 5000)
    return () => {
      clearTimeout(remove)
    }
  }

  const changeSection = (e: any): void => {
    setSection(e?.target?.ariaLabel)
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
        return <ProfileInfo messageFunction={setMessage} />
      case 'account':
        return <AccountInfo messageFunction={setMessage} />
      default:
        return <Setting messageFunction={setMessage} />
    }
  }

  return (
    <div dir="rtl" className={'flex h-[100vh] w-[100%]'}>
      <div className="fixed left-[50%] top-3 z-10 translate-x-[-50%]">
        {messages.map((item, index) =>
          index < messages.length / 2 ? (
            <Message key={index} text={item.text} type={item.type} />
          ) : (
            <></>
          )
        )}
      </div>
      {/* sidebar */}
      <div className="h-[100%] w-[340px]">
        <ProfileSideBar onClickFunction={changeSection} selected={section} />
      </div>

      {/* main content */}
      <div className="relative grow-[2] overflow-y-scroll px-[58px] py-[170px] no-scrollbar">
        <div className={'flex flex-col gap-8 transition-[height] duration-700'}>
          <span className="animate-fadein text-[31px] font-bold leading-[43.68px]">
            {title}
          </span>

          {sectionRendering()}
        </div>
      </div>
    </div>
  )
}

export default Profile
