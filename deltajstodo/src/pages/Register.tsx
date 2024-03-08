/* eslint-disable @typescript-eslint/space-before-function-paren */
/* eslint-disable no-extra-boolean-cast */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable spaced-comment */
/* eslint-disable @typescript-eslint/no-floating-promises */
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
import { AnimatePresence, motion } from 'framer-motion'
import axios from 'axios'
import { useRegisterMutation } from '../features/users/usersInteractionApiSlice'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface RegisterProps {}

const Register: FunctionComponent<RegisterProps> = () => {
  const navigate: NavigateFunction = useNavigate()
  const methods = useForm()
  const [showBox, setShowBox] = useState(false)
  const [register] = useRegisterMutation()
  const [errs, setErrs] = useState(null)
  const [successMsg, setSuccessMsg] = useState('')
  const fetch = async (data: any): Promise<any> => {
    const accessToken =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzA5NzgxNjU4LCJpYXQiOjE3MDk3NjAwNTgsImp0aSI6Ijk1NDk2NzA0OTAzOTQxMjk4NDQwMjc5NmM0M2ExYTdmIiwidXNlcl9pZCI6NDZ9.JU9XzQztffVBzZVW1S-ISpMqMw62RitezR25Exqrgso'
    console.log(data)

    await axios
      .post('http://185.8.174.74:8000' + '/accounts/', {
        ...data
      })
      .then((response) => {
        console.log({ response })
      })
      .catch((err) => console.log(err))
  }
  const onSubmit = methods.handleSubmit((data) => {
    console.log(data)
    //fetch(data)
    handleSubmit(data)
  })

  const handleSubmit = async (data: {
    username: string
    email: string
    password: string
  }): Promise<void> => {
    try {
      const userData = await register(data).unwrap()
      console.log(userData)
      setSuccessMsg('ثبت نام با موفقیت انجام شد')
      //dispatch(setCredentials({ ...userData, user: data.password }))
      methods.reset()
      //   navigate('/welcome')
    } catch (err: any) {
      console.log('Error in Registering', err)
      setErrs(err?.data)
      // if (err?.status === null) {
      //   // isLoading: true until timeout occurs
      //   setErrMsg('No Server Response')
      // } else if (err.originalStatus === 400) {
      //   setErrMsg('Missing Username or Password')
      // } else if (err.originalStatus === 401) {
      //   setErrMsg('Unauthorized')
      // } else {
      //   setErrMsg('Login Failed')
      // }
    }
  }

  function showBoxFunction(): void {
    setShowBox((prev) => !prev)
  }

  // userName input Props
  const userNameProps = {
    name: 'username',
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
    name: 'password',
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
            <motion.form
              initial={{ opacity: 0, y: '25px' }}
              animate={{ transform: 'translateY(0)', opacity: 1 }}
              transition={{ duration: 1 }}
              exit={{
                opacity: 1,
                transform: 'translateY(25px)',
                transition: { duration: 1 }
              }}
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
            </motion.form>
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
