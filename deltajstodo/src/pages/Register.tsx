/* eslint-disable @typescript-eslint/no-confusing-void-expression */
/* eslint-disable tailwindcss/no-custom-classname */
import Layout from '../components/layout/Layout'
import AuthCard from '../components/Card/AuthCard'
import Input from '../components/Input/Input'
import { type NavigateFunction, useNavigate } from 'react-router-dom'
import { useState, type FunctionComponent } from 'react'
import Checkbox from '../components/Checkbox'
import { FormProvider, useForm } from 'react-hook-form'
import TermsConditions from '../components/Modals/TermsConditions'
import Button from '../components/Buttons/Button'
import { AnimatePresence } from 'framer-motion'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface RegisterProps {}

const Register: FunctionComponent<RegisterProps> = () => {
  const navigate: NavigateFunction = useNavigate()
  const methods = useForm()
  // const [success, setSuccess] = useState(false)

  const [showBox, setShowBox] = useState(false)

  const onSubmit = methods.handleSubmit((data) => {
    console.log(data)
    methods.reset()
    // setSuccess(true)
  })

  function showBoxFunction (): void {
    setShowBox((prev) => !prev)
  }

  // userName input Props
  const userNameProps = {
    name: 'نام کاربری',
    validation: {
      required: {
        value: true,
        message: 'لطفا نام کاربری خود را وارد کنید'
      }
    },
    id: 'text',
    label: 'نام کاربری',
    type: 'text'
  }
  // userPassword input Props
  const userPasswordProps = {
    name: 'رمز عبور',
    validation: {
      required: {
        value: true,
        message: 'لطفا رمز عبور خود را وارد کنید'
      },
      minLength: {
        value: 6,
        message: 'باید بیشتر از ۸ کاراکتر باشد'
      }
    },
    id: 'password',
    label: 'رمز عبور',
    type: 'password'
  }
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
    <>
      <Layout
        buttonText={'ورود'}
        linkText={'ثبت‌نام کرده‌ای؟'}
        onClickFunction={() => {
          navigate('/api/auth/login')
        }}
      >
        <AuthCard>
          <FormProvider {...methods}>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col gap-2"
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-center ">
                  <h1 className="h-[45px] w-[382px]  text-right text-[32px] font-extrabold leading-[45.09px] text-[#1E1E1E]">
                    ثبت‌نام در کوئرا تسک منیجر
                  </h1>
                </div>
                <Input {...userNameProps} />
                <Input {...userEmailProps} />
                <Input {...userPasswordProps} />
                <div dir="rtl" className="flex items-center gap-2 ">
                  <Checkbox />
                  <label className="text-base h-[23px] w-[190px] text-right font-normal leading-[22.5px] text-[#1E1E1E] ">
                    <p
                      className="inline cursor-pointer underline underline-offset-4"
                      onClick={showBoxFunction}
                    >
                      {' '}
                      قوانین و مقررات
                    </p>{' '}
                    را می پذیرم .
                  </label>
                </div>
                <Button
                  formButtonLogin
                  formButtonLoginPrimary
                  textWhite
                  onClickFunction={onSubmit}
                >
                  ثبت‌نام
                </Button>
              </div>
            </form>
          </FormProvider>
        </AuthCard>
        <AnimatePresence>
          {showBox && <TermsConditions onClickFunction={showBoxFunction} />}
        </AnimatePresence>
      </Layout>
    </>
  )
}

export default Register
