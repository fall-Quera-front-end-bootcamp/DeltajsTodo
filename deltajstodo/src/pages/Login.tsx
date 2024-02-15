import { useState, type FunctionComponent } from 'react'

import Layout from '../components/layout/Layout'
import AuthCard from '../components/Card/AuthCard'
import Input from '../components/Input/Input'
import FormButton from '../components/Buttons/FormButton'
import { Link } from 'react-router-dom'
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface LoginProps {}

const Login: FunctionComponent<LoginProps> = () => {
  const [formVisible] = useState(true)

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
          <Input name="رمز عبور" type="password" className={"mb-1"} />
          <div className="flex flex-row items-center justify-end">
            <Link className={"underline mb-6 text-[#1E1E1E] text-[14px]"} to={"/api/auth/forgetPassword"}>
              رمز عبور خود را فراموش کردی؟
            </Link>
          </div>
          <FormButton
            text="ورود"
            color="bg-brand-primary"
            onClickFunction={() => {}}
          />

          <div className="flex flex-row items-center justify-center">
            <Link to={"/api/auth/register"}>
            <FormButton
              text="ثبت نام"
              color="transparent"
              onClickFunction={() => {
              }}
              className={"w-auto mb-0"}
            />
            </Link>

            <span className="mr-2">ثبت‌نام نکرده‌ای؟</span>

          </div>
        </div>
      </AuthCard>
    </Layout>
  )
}

export default Login
