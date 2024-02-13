/* eslint-disable @typescript-eslint/no-confusing-void-expression */
/* eslint-disable tailwindcss/no-custom-classname */
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
          <form className="flex flex-col  gap-2">
            <div className="flex items-center justify-center ">
              <h1 className="h-[45px] w-[382px]  text-right text-[32px] font-extrabold leading-[45.09px] text-[#1E1E1E]">
                ثبت‌نام در کوئرا تسک منیجر
              </h1>
            </div>
            <Input name="نام کاربری" type="text" />
            <Input name="ایمیل" type="email" />
            <Input name="رمز عبور" type="password" />
            <div dir="rtl" className="flex  items-center  gap-2 ">
              <div className="relative mt-1">
                <input
                  className="bg-white focus:ring-blue-100 disabled:border-steel-400 disabled:bg-steel-400
                peer relative size-4 shrink-0 cursor-pointer appearance-none
                rounded-[4px] border-[1px]
                border-gray-primary
                bg-none checked:border-brand-primary checked:bg-brand-secondary"
                  type="checkbox"
                />
                <svg
                  className="pointer-events-none absolute left-[4px] top-[4px] opacity-0 transition-opacity peer-checked:opacity-100"
                  width="9"
                  height="7"
                  viewBox="0 0 12 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 5.79297L3 7.79297"
                    stroke="#208D8E"
                    strokeLinecap="square"
                  />
                  <path
                    d="M10.5 1L3.5 8.29297"
                    stroke="#208D8E"
                    strokeLinecap="square"
                  />
                </svg>
              </div>
              <label className=" text-base h-[23px] w-[190px] text-right font-extrabold leading-[22.5px] text-[#1E1E1E] ">
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
              className="h-[48px] bg-brand-primary"
              onClickFunction={() => {}}
            />
          </form>
        </AuthCard>
      </Layout>
    </>
  )
}

export default Register
