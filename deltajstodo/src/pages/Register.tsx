/* eslint-disable @typescript-eslint/no-confusing-void-expression */
/* eslint-disable tailwindcss/no-custom-classname */
// import { NavLink } from 'react-router-dom'
import Layout from '../components/layout/Layout'
import AuthCard from '../components/Card/AuthCard'
import Input from '../components/Input/Input'
import FormButton from '../components/Buttons/FormButton'
import { type NavigateFunction, useNavigate } from 'react-router-dom'
import { type FunctionComponent } from 'react'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface RegisterProps {}

const Register: FunctionComponent<RegisterProps> = () => {
  const navigate: NavigateFunction = useNavigate()

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
          <div className="flex flex-col  gap-2">
            <div className="flex items-center justify-center ">
              <h1 className="h-[45px] w-[382px]  text-right text-[32px] font-extrabold leading-[45.09px] text-[#1E1E1E]">
                ثبت‌نام در کوئرا تسک منیجر
              </h1>
            </div>

            <Input name="نام کاربری" type="text" />
            <Input name="ایمیل" type="email" />
            <Input name="رمز عبور" type="password" />
            <div dir="rtl" className="flex  items-center  gap-2 ">
              <input
                className="size-[20px]  rounded border-[#999999]  bg-[#999999] "
                type="checkbox"
              ></input>{' '}
              <label className=" h-[23px] w-[190px] text-right text-base font-extrabold leading-[22.5px] text-[#1E1E1E] ">
                <p className="inline  underline underline-offset-4">
                  {' '}
                  قوانین و مقررات
                </p>{' '}
                را می پذیرم .
              </label>
            </div>
            <FormButton
              color={'bg-brand-primary'}
              text={'ثبت نام'}
              height="h-[48px]"
            />
          </div>
        </AuthCard>
      </Layout>

      {/* {<div>
        <p>Registering...</p>
      </div>
      <button>
        <NavLink to="/api/auth/Login">Click To Login</NavLink>
      </button>} */}
    </>
  )
}

export default Register
