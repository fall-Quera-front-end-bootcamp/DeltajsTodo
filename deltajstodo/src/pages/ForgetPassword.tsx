import { useState, type FunctionComponent } from 'react'

import Layout from '../components/layout/Layout'
import AuthCard from '../components/Card/AuthCard'
import Input from '../components/Input/Input'
import FormButton from '../components/Buttons/FormButton'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ForgetPasswordProps {}

const ForgetPassword: FunctionComponent<ForgetPasswordProps> = () => {
  const [formVisible, setFormVisible] = useState(true)

  const sendEmail = () => {
    setFormVisible(false)
  }
  return (
    <Layout
      buttonText={'ورود'}
      linkText={'قبلا ثبت‌نام کرده‌ای؟'}
      onClickFunction={() => {}}
    >
      <AuthCard>
        <h1 className="font-yekan font-extrabold text-[32px] leading-[45.09px] text-center">
          فراموشی رمز عبور
        </h1>
        <div className={`${formVisible ? 'mt-[32px]' : 'hidden'}`}>
          <Input name="ایمیل خود را وارد کنید" type="email" />
          <FormButton
            text="دریافت ایمیل بازیابی رمز عبور"
            color="bg-brand-primary"
            onClickFunction={sendEmail}
          />
          <FormButton text="بازگشت" color="transparent" />
        </div>
        <div className={`${formVisible ? 'hidden' : 'mt-[32px]'}`}>
          <span className="block text-center font-yekan font-normal text-[14px] leading-[19.73px]">
            .لینک تغییر رمز عبور برای شما ایمیل شد. لطفا ایمیل خود را بررسی کنید
          </span>
        </div>
      </AuthCard>
    </Layout>
  )
}

export default ForgetPassword
