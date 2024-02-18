import { type FunctionComponent } from 'react'
import Layout from '../components/layout/Layout'
import AuthCard from '../components/Card/AuthCard'
import Input from '../components/Input/Input'
import { useNavigate } from 'react-router-dom'
import { FormProvider, useForm } from 'react-hook-form'
import Button from '../components/Buttons/Button'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ResetPasswordProps {}

const ResetPassword: FunctionComponent<ResetPasswordProps> = () => {
  const navigate = useNavigate()
  const methods = useForm()

  const onSubmit = methods.handleSubmit((data) => {
    console.log(data)
  })

  // userPassword input Props
  const userPasswordPropsFirst = {
    name: 'رمز عبور جدید را وارد کنید',
    validation: {
      required: {
        value: true,
        message: 'لطفا رمز عبور جدید خود را وارد کنید'
      },
      minLength: {
        value: 6,
        message: 'باید بیشتر از ۸ کاراکتر باشد'
      }
    },
    id: 'password',
    label: 'رمز عبور جدید را وارد کنید',
    type: 'password'
  }

  const userPasswordPropsSecond = {
    name: 'تکرار رمز عبور',
    validation: {
      required: {
        value: true,
        message: 'لطفا تکرار رمز عبور جدید خود را وارد کنید'
      },
      minLength: {
        value: 6,
        message: 'باید بیشتر از ۸ کاراکتر باشد'
      }
    },
    id: 'password',
    label: 'تکرار رمز عبور ',
    type: 'password'
  }
  return (
    <>
      <Layout
        buttonText={'ورود'}
        linkText={'قبلا ثبت‌نام کرده‌ای؟'}
        onClickFunction={() => {
          navigate('/api/auth/login')
        }}
      >
        <AuthCard>
          <h1 className="text-center   text-headingl font-extrabold">
            تغییر رمز عبور
          </h1>
          <FormProvider {...methods}>
            <form
              noValidate
              autoComplete="off"
              onSubmit={(e) => {
                e.preventDefault()
              }}
            >
              <div className="flex flex-col gap-4">
                <Input {...userPasswordPropsFirst} />
                <Input {...userPasswordPropsSecond} />
                <div className="">
                  <Button
                    formButtonLogin
                    formButtonLoginPrimary
                    textWhite
                    onClickFunction={onSubmit}
                  >
                    اعمال تغییرات
                  </Button>
                </div>
              </div>
            </form>
          </FormProvider>
        </AuthCard>
      </Layout>
    </>
  )
}

export default ResetPassword
