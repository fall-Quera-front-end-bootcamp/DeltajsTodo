/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable @typescript-eslint/no-confusing-void-expression */
import { useState, type FunctionComponent } from 'react'

import Layout from '../components/layout/Layout'
import AuthCard from '../components/Card/AuthCard'
import Input from '../components/Input/Input'
import FormButton from '../components/Buttons/FormButton'
import { Link, useNavigate } from 'react-router-dom'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface LoginProps {}

const Login: FunctionComponent<LoginProps> = () => {
  const [formVisible, setFormVisible] = useState(true)
  const navigate = useNavigate()

  return (
    <Layout
      buttonText={'ثبت نام'}
      linkText={'قبلا ثبت‌نام نکرده‌ای؟'}
      onClickFunction={() => navigate('/api/auth/register')}
    >
      <AuthCard>
        <h1 className="font-yekan text-center text-[32px] font-extrabold leading-[45.09px]">
          (: به کوئرا تسک منیجر خوش برگشتی
        </h1>
        <div className={`${formVisible ? 'mt-[32px]' : 'hidden'}`}>
          <Input name="نام کاربری" type="text" />
          <Input name="رمز عبور" type="password" />
          <div className="flex flex-row items-center justify-end">
            <Link to={'/api/auth/forgetPassword'}>
              رمز عبور خود را فراموش کردی؟
            </Link>
          </div>
          <FormButton
            text="ورود"
            color="bg-brand-primary"
            onClickFunction={() => {}}
          />
          <div className="flex flex-row items-center justify-center">
            <button
              onClick={() => navigate('/api/auth/register')}
              className="text-brand-primary font-yekan h-[40px] rounded-[6px] p-[10px] text-[14px] font-extrabold leading-[19.73px] "
            >
              ثبت نام
            </button>
            <span className="mr-2">ثبت‌نام نکرده‌ای؟</span>
          </div>
        </div>
      </AuthCard>
    </Layout>
  )
}

export default Login
