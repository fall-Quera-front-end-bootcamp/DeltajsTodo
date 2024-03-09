import { useState, type FunctionComponent } from 'react'

import Layout from '../components/AuthPage/AuthComponents/layout/Layout'
import AuthCard from '../components/AuthPage/AuthComponents/Card/AuthCard'
import Input from '../components/Common/Input/Input'
import { type NavigateFunction, useNavigate } from 'react-router-dom'
import { FormProvider, useForm } from 'react-hook-form'
import Button from '../components/Common/Buttons/Button'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ForgetPasswordProps {}

const ForgetPassword: FunctionComponent<ForgetPasswordProps> = () => {
  const [formVisible, setFormVisible] = useState(true)
  const navigate: NavigateFunction = useNavigate()

  const methods = useForm()

  const onSubmit = methods.handleSubmit(() => {
    setFormVisible(false)
    // console.log(data)
  })
  // userEmail input Props
  const userEmailProps = {
    name: 'ایمیل',
    validation: {
      required: {
        value: true,
        message: 'لطفا ایمیل خود را وارد کنید'
      }
    },
    id: 'email',
    label: 'ایمیل',
    type: 'email'
  }

  return (
    <Layout
      buttonText={'ورود'}
      linkText={'قبلا ثبت‌نام کرده‌ای؟'}
      onClickFunction={() => {
        navigate('/api/auth/login')
      }}
    >
      <AuthCard>
        <h1 className="text-center text-[32px] font-extrabold leading-[45.09px]">
          فراموشی رمز عبور
        </h1>
        <FormProvider {...methods}>
          <form
            onSubmit={(e) => {
              e.preventDefault()
            }}
            noValidate
          >
            <div
              className={`${formVisible ? 'mt-[32px] flex flex-col gap-4' : 'hidden'}`}
            >
              <Input {...userEmailProps} />
              <Button
                formButtonLogin
                formButtonLoginPrimary
                textWhite
                onClickFunction={onSubmit}
              >
                دریافت ایمیل بازیابی رمز عبور
              </Button>
              <Button
                formButtonLogin
                formButtonLoginPrimary
                bgTransparent
                textBrandPrimary
                onClickFunction={() => {
                  navigate('/api/auth/login')
                }}
              >
                بازگشت
              </Button>
            </div>
            <div className={`${formVisible ? 'hidden' : 'mt-[32px]'}`}>
              <span className="block text-center   text-[14px] font-normal leading-[19.73px]">
                .لینک تغییر رمز عبور برای شما ایمیل شد. لطفا ایمیل خود را بررسی
                کنید
              </span>
            </div>
          </form>
        </FormProvider>
      </AuthCard>
    </Layout>
  )
}

export default ForgetPassword
