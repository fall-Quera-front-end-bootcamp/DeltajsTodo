import { type FunctionComponent } from 'react'
import Layout from '../components/layout/Layout'
import AuthCard from '../components/Card/AuthCard'
import FormButton from '../components/Buttons/FormButton'
import Input from '../components/Input/Input'
import { useNavigate } from 'react-router-dom'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ResetPasswordProps {}

const ResetPassword: FunctionComponent<ResetPasswordProps> = () => {
  const navigate = useNavigate()
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
          <h1 className="text-center font-yekan text-headingl font-extrabold">
            تغییر رمز عبور
          </h1>
          <div className="flex flex-col gap-4">
            <Input name="رمز عبور جدید را وارد کنید" type="text" />
            <Input name="رمز عبور" type="password" />
            <div className="">
              <FormButton
                className="h-[48px]"
                text="اعمال تغییرات"
                color="bg-brand-primary"
                onClickFunction={() => {}}
              />
            </div>
          </div>
        </AuthCard>
      </Layout>
    </>
  )
}

export default ResetPassword
