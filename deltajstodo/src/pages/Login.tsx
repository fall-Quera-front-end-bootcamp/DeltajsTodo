import { useState, type FunctionComponent } from 'react'

import Layout from '../components/layout/Layout'
import AuthCard from '../components/Card/AuthCard'
import Input from '../components/Input/Input'
import FormButton from '../components/Buttons/FormButton'
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface LoginProps {}

const Login: FunctionComponent<LoginProps> = () => {
  const [formVisible, setFormVisible] = useState(true)

  return (
    <Layout
      buttonText={'ورود'}
      linkText={'قبلا ثبت‌نام کرده‌ای؟'}
      linkSrc={'/api/auth/Login'}
    >
      <AuthCard>
        <h1 className="font-yekan font-extrabold text-[32px] leading-[45.09px] text-center">
        (: به کوئرا تسک منیجر خوش برگشتی 
        </h1>
        <div className={`${formVisible ? 'mt-[32px]' : 'hidden'}`}>
          <Input name="نام کاربری" type="text" />
          <Input name="رمز عبور" type="password" />
          <div className="flex flex-row items-center justify-end"> 
          <a href="">رمز عبور خود را فراموش کردی؟</a>
          </div>
          <FormButton
            text="ورود"
            color="bg-brand-primary"
            onClickFunction={() => {}}
          />
          <div className="flex flex-row items-center justify-center"> 
          <button className="text-brand-primary font-yekan font-extrabold text-[14px] leading-[19.73px] rounded-[6px] p-[10px] h-[40px] ">ثبت نام</button>
            <span className="mr-2">ثبت‌نام نکرده‌ای؟</span>

          </div>
        </div>
      </AuthCard>
    </Layout>
  )
}

export default Login