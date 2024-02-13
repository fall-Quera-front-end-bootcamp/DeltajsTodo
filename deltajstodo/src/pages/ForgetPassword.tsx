import { useState, type FunctionComponent } from 'react'

import Layout from '../components/layout/Layout'
import AuthCard from '../components/Card/AuthCard'
import Input from '../components/Input/Input'
import FormButton from '../components/Buttons/FormButton'
import { type NavigateFunction, useNavigate } from 'react-router-dom'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ForgetPasswordProps {}

const ForgetPassword: FunctionComponent<ForgetPasswordProps> = () => {
  const [formVisible, setFormVisible] = useState(true)
  const navigate: NavigateFunction = useNavigate()

  const sendEmail = (): void => {
    setFormVisible(false)
  }
  return (
    <Layout
      buttonText={'ورود'}
      linkText={'قبلا ثبت‌نام کرده‌ای؟'}
      onClickFunction={() => {}}
    >
      <AuthCard>
        <h1 className="text-center text-[32px] font-extrabold leading-[45.09px]">
          فراموشی رمز عبور
        </h1>
        <div
          className={`${formVisible ? 'mt-[32px] flex flex-col gap-4' : 'hidden'}`}
        >
          <Input name="ایمیل خود را وارد کنید" type="email" />
          <FormButton
            text="دریافت ایمیل بازیابی رمز عبور"
            color="bg-brand-primary"
            onClickFunction={sendEmail}
          />
          <FormButton
            text="بازگشت"
            color="transparent"
            onClickFunction={() => {
              navigate('/api/auth/login')
            }}
          />
        </div>
        <div className={`${formVisible ? 'hidden' : 'mt-[32px]'}`}>
          <span className="block text-center font-yekan text-[14px] font-normal leading-[19.73px]">
            .لینک تغییر رمز عبور برای شما ایمیل شد. لطفا ایمیل خود را بررسی کنید
          </span>
        </div>
      </AuthCard>
    </Layout>
  )
}

export default ForgetPassword
