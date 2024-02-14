/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable @typescript-eslint/no-confusing-void-expression */
import { useState, type FunctionComponent } from 'react'
import Layout from '../components/layout/Layout'
import AuthCard from '../components/Card/AuthCard'
import Input from '../components/Input/Input'
import FormButton from '../components/Buttons/FormButton'
import { Link, useNavigate } from 'react-router-dom'
import { FormProvider, useForm } from 'react-hook-form'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface LoginProps {}

const Login: FunctionComponent<LoginProps> = () => {
  const methods = useForm()

  const onSubmit = methods.handleSubmit((data) => {
    console.log(data)
  })

  const [formVisible, setFormVisible] = useState(true)
  const navigate = useNavigate()

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

  return (
    <Layout
      buttonText={'ثبت نام'}
      linkText={'قبلا ثبت‌نام نکرده‌ای؟'}
      onClickFunction={() => navigate('/api/auth/register')}
    >
      <AuthCard>
        <h1 className="text-center font-yekan text-[32px] font-extrabold leading-[45.09px]">
          (: به کوئرا تسک منیجر خوش برگشتی
        </h1>
        <FormProvider {...methods}>
          <form
            onSubmit={(e) => e.preventDefault()}
            noValidate
            autoComplete="off"
            className={`${formVisible ? 'mt-[32px]' : 'hidden'}`}
          >
            <Input {...userNameProps} />
            <Input {...userPasswordProps} />
            <div className="flex flex-row items-center justify-end">
              <Link to={'/api/auth/forgetPassword'}>
                رمز عبور خود را فراموش کردی؟
              </Link>
            </div>
            <FormButton
              text="ورود"
              color="bg-brand-primary"
              onClickFunction={onSubmit}
            />
            <div className="flex flex-row items-center justify-center">
              <button
                onClick={() => navigate('/api/auth/register')}
                className="h-[40px] rounded-[6px] p-[10px] font-yekan text-[14px] font-extrabold leading-[19.73px] text-brand-primary "
              >
                ثبت نام
              </button>
              <span className="mr-2">ثبت‌نام نکرده‌ای؟</span>
            </div>
          </form>
        </FormProvider>
      </AuthCard>
    </Layout>
  )
}

export default Login
