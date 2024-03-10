/* eslint-disable @typescript-eslint/no-floating-promises */
import { useState, type FunctionComponent } from 'react'

import Layout from '../components/layout/Layout'
import AuthCard from '../components/Card/AuthCard'
import Input from '../components/Input/Input'
import { type NavigateFunction, useNavigate } from 'react-router-dom'
import { FormProvider, useForm } from 'react-hook-form'
import Button from '../components/Buttons/Button'
import { useDispatch } from 'react-redux'
import { useResetMutation } from '../features/users/usersInteractionApiSlice'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ForgetPasswordProps {}

const ForgetPassword: FunctionComponent<ForgetPasswordProps> = () => {
  const [formVisible, setFormVisible] = useState(true)
  const navigate: NavigateFunction = useNavigate()

  const methods = useForm()
  const [forget] = useForgetMutation()
  const [reset] = useResetMutation()
  const dispatch = useDispatch()
  const [errMsg, setErrMsg] = useState('')

  const onSubmit = methods.handleSubmit((data) => {
    setFormVisible(false)
    console.log(data)
    handleSubmit(data)
  })

  const handleSubmit = async (data: any): Promise<void> => {
    try {
      const userData = await forget(data).unwrap()
      console.log(userData)

      methods.reset()
      //   navigate('/welcome')
    } catch (err: any) {
      if (err?.status === null) {
        // isLoading: true until timeout occurs
        setErrMsg('No Server Response')
      } else if (err.originalStatus === 400) {
        setErrMsg('Missing Username or Password')
      } else if (err.originalStatus === 401) {
        setErrMsg('Unauthorized')
      } else {
        setErrMsg('Login Failed')
      }
    }
  }

  // userEmail input Props
  const userEmailProps = {
    name: 'email',
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
