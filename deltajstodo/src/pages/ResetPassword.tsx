import { type FunctionComponent } from 'react'
import Layout from '../components/layout/Layout'
import AuthCard from '../components/Card/AuthCard'
import FormButton from '../components/Buttons/FormButton'
import Input from '../components/Input/Input'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ResetPasswordProps {}

const ResetPassword: FunctionComponent<ResetPasswordProps> = () => {
  return (
    <>
      <Layout
        buttonText={'ورود'}
        linkText={'قبلا ثبت‌نام کرده‌ای؟'}
        linkSrc={'/api/auth/resetpassword'}
      >
        <AuthCard className="flex flex-col gap-8">
          <h1 className="text-center font-yekan text-[32px] font-extrabold leading-[45.09px]">
            تغییر رمز عبور
          </h1>
          <div className="flex flex-col gap-4">
            <Input name="رمز عبور جدید را وارد کنید" type="text" />
            <Input name="رمز عبور" type="password" />
            <div className="">
              <FormButton
                className=""
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
