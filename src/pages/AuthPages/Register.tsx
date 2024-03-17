/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-confusing-void-expression */
/* eslint-disable tailwindcss/no-custom-classname */
import Layout from '../../components/AuthPage/AuthComponents/layout/Layout'
import AuthCard from '../../components/AuthPage/AuthComponents/Card/AuthCard'
import Input from '../../components/Common/Input/Input'
import { type NavigateFunction, useNavigate } from 'react-router-dom'
import { useState, type FunctionComponent } from 'react'
import Checkbox from '../../components/AuthPage/AuthComponents/Checkbox'
import { FormProvider, useForm, type FieldValues } from 'react-hook-form'
import TermsConditions from '../../components/Common/Modals/TermsConditions'
import Button from '../../components/Common/Buttons/Button'
import { AnimatePresence, motion } from 'framer-motion'
import toast from 'react-hot-toast'
import { useRegisterMutation } from '../../features/users/usersInteractionApiSlice'
import LoadingComponent from '../../components/Common/LoadingComponent/LoadingComponent'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface RegisterProps {}

const Register: FunctionComponent<RegisterProps> = () => {
  const navigate: NavigateFunction = useNavigate()
  const methods = useForm()

  const [showBox, setShowBox] = useState(false)

  const [register, { isLoading }] = useRegisterMutation()

  const validateEmail = (): boolean => {
    if (
      (methods.watch('email')?.includes('@') === true &&
        methods.watch('email')?.includes('.')) === true
    ) {
      return true
    } else return false
  }

  const handleSubmit = async (data: FieldValues): Promise<void> => {
    if (validateEmail()) {
      try {
        await register({
          username: data.username,
          email: data.email,
          password: data.password
        }).unwrap()
        toast.success('با موفقیت ثبت‌نام کردید.')

        methods.reset()
        navigate('/api/auth/login')
      } catch (err: unknown) {
        console.log(err)
      }
    } else {
      toast.error('لطفا ایمیل معتبر وارد بکنید')
    }
  }
  const onSubmit = methods.handleSubmit((data) => {
    handleSubmit(data)
  })

  // userName input Props
  const userNameProps = {
    name: 'username',
    validation: {
      required: {
        value: true,
        message: 'لطفا نام کاربری خود را وارد کنید'
      }
    },
    id: 'username',
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
    <div className="relative h-screen w-full">
      <Layout
        buttonText={'ورود'}
        linkText={'ثبت‌نام کرده‌ای؟'}
        onClickFunction={() => {
          navigate('/api/auth/login')
        }}
        className={showBox ? 'bg-gray-dark/50 blur-md backdrop-blur-md' : ''}
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
                      onClick={() => setShowBox(true)}
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
                  {isLoading ? <LoadingComponent /> : 'ثبت‌نام'}
                </Button>
              </div>
            </motion.form>
          </FormProvider>
        </AuthCard>
      </Layout>
      <AnimatePresence>
        {showBox && <TermsConditions onClickFunction={setShowBox} />}
      </AnimatePresence>
    </div>
  )
}

export default Register
