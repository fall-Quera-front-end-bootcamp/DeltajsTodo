/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable @typescript-eslint/no-confusing-void-expression */
import { useState, type FunctionComponent } from 'react'
import Layout from '../../components/AuthPage/AuthComponents/layout/Layout'
import AuthCard from '../../components/AuthPage/AuthComponents/Card/AuthCard'
import Input from '../../components/Common/Input/Input'
import { Link, useNavigate } from 'react-router-dom'
import { FormProvider, useForm } from 'react-hook-form'
import Button from '../../components/Common/Buttons/Button'
import { motion } from 'framer-motion'
import { useLoginMutation } from '../../features/auth/authApiSlice'
import { useDispatch } from 'react-redux'
import { setCredentials } from '../../features/auth/authSlice'
import LoadingComponent from '../../components/Common/LoadingComponent/LoadingComponent'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface LoginProps {}

const Login: FunctionComponent<LoginProps> = () => {
  const methods = useForm()

  // ---------------
  const [login, { isLoading, isError, isSuccess }] = useLoginMutation()
  const dispatch = useDispatch()
  const [err, setErr] = useState()
  const handleSubmit = async (
    data = {
      username: 'any',
      password: 'any'
    }
  ): Promise<void> => {
    try {
      const userData = await login({
        username: data.username,
        password: data.password
      }).unwrap()
      console.log(userData)

      dispatch(
        setCredentials({ accessToken: userData.access, user: { ...userData } })
      )

      methods.reset()
      navigate('/workspace')
    } catch (err: any) {
      setErr(err)
    }
  }
  const onSubmit = methods.handleSubmit((data) => {
    handleSubmit(data)
  })

  const [formVisible, setFormVisible] = useState(true)
  const navigate = useNavigate()

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

  return (
    <Layout
      buttonText={'ثبت نام'}
      linkText={'قبلا ثبت‌نام نکرده‌ای؟'}
      onClickFunction={() => navigate('/api/auth/register')}
    >
      <AuthCard>
        <FormProvider {...methods}>
          <motion.form
            initial={{ opacity: 0, y: '-25px' }}
            animate={{ transform: 'translateY(0)', opacity: 1 }}
            transition={{ duration: 1 }}
            exit={{
              opacity: 1,
              transform: 'translateY(-25px)',
              transition: { duration: 1 }
            }}
            onSubmit={(e) => e.preventDefault()}
            noValidate
            autoComplete="off"
            className={`${formVisible ? 'mt-[32px]' : 'hidden'}`}
          >
            {' '}
            <div className="flex flex-col items-center justify-center">
              <svg
                className="h-[45px]"
                xmlns="http://www.w3.org/2000/svg"
                width="507"
                height="37"
                viewBox="0 0 507 37"
                fill="none"
              >
                <path
                  d="M9.51364 5.85636C9.3197 6.07939 9.10636 6.36545 8.87364 6.71455C8.65061 7.05394 8.39364 7.46606 8.10273 7.95091C7.81182 8.43576 7.51606 8.98364 7.21546 9.59455C6.94394 10.1473 6.66758 10.7776 6.38636 11.4855C6.10515 12.1836 5.84818 12.9448 5.61545 13.7691C5.38273 14.5933 5.19364 15.4709 5.04818 16.4018C4.90273 17.3327 4.83 18.2976 4.83 19.2964C4.83 20.2952 4.90273 21.2552 5.04818 22.1764C5.19364 23.0976 5.38273 23.9703 5.61545 24.7945C5.84818 25.6091 6.10515 26.3655 6.38636 27.0636C6.66758 27.7618 6.94394 28.3873 7.21546 28.94C7.51606 29.5509 7.80697 30.0939 8.08818 30.5691C8.37909 31.0539 8.8203 31.723 9.41182 32.5764L6.32818 35.1509C6.30879 35.1315 6.21182 35.0152 6.03727 34.8018C5.87242 34.5885 5.65424 34.2879 5.38273 33.9C5.12091 33.5121 4.82515 33.0418 4.49545 32.4891C4.16576 31.9364 3.82636 31.3158 3.47727 30.6273C2.67242 29.0079 2.03242 27.3448 1.55727 25.6382C1.26636 24.5812 1.04818 23.5242 0.902727 22.4673C0.757273 21.4103 0.684546 20.3533 0.684546 19.2964C0.684546 18.2394 0.757273 17.1824 0.902727 16.1255C1.04818 15.0588 1.26636 13.9921 1.55727 12.9255C1.79 12.0721 2.06636 11.2285 2.38636 10.3945C2.70636 9.56061 3.07 8.73152 3.47727 7.90727C3.82636 7.20909 4.16576 6.58364 4.49545 6.03091C4.83485 5.47818 5.13545 5.00788 5.39727 4.62C5.66879 4.22242 5.88697 3.91697 6.05182 3.70364C6.21667 3.4903 6.30879 3.37394 6.32818 3.35455L9.51364 5.85636ZM15.7251 22.3945C16.5591 22.3945 17.2475 22.6418 17.7906 23.1364C18.3433 23.6309 18.6197 24.2612 18.6197 25.0273C18.6197 25.803 18.3433 26.4382 17.7906 26.9327C17.2475 27.4273 16.5591 27.6745 15.7251 27.6745C14.8815 27.6745 14.1833 27.4273 13.6306 26.9327C13.0875 26.4285 12.816 25.7933 12.816 25.0273C12.816 24.2709 13.0875 23.6455 13.6306 23.1509C14.1833 22.6467 14.8815 22.3945 15.7251 22.3945ZM15.7251 9.92909C16.5591 9.92909 17.2475 10.1764 17.7906 10.6709C18.3433 11.1655 18.6197 11.7958 18.6197 12.5618C18.6197 13.3376 18.3433 13.9727 17.7906 14.4673C17.2475 14.9618 16.5591 15.2091 15.7251 15.2091C14.8815 15.2091 14.1833 14.957 13.6306 14.4527C13.0875 13.9485 12.816 13.3182 12.816 12.5618C12.816 11.8055 13.0875 11.18 13.6306 10.6855C14.1833 10.1812 14.8815 9.92909 15.7251 9.92909ZM38.2097 19.66C37.0848 22.0261 36.5224 24.1061 36.5224 25.9C36.5224 26.0745 36.5272 26.2588 36.5369 26.4527C36.5563 26.6952 36.5903 26.9327 36.6388 27.1655C36.7454 27.7764 36.9297 28.3194 37.1915 28.7945C37.9381 30.1327 39.1891 30.8018 40.9442 30.8018H44.9587C46.966 30.8018 48.3769 30.5352 49.1915 30.0018C49.5988 29.7303 49.8072 29.4636 49.8169 29.2018C48.44 28.397 46.5442 27.7667 44.1297 27.3109V22.9473H57.4242V27.7182H53.9188C54.1321 28.0576 54.2388 28.5376 54.2388 29.1582C54.2388 29.3812 54.2291 29.6042 54.2097 29.8273C54.1709 30.1376 54.1127 30.4382 54.0351 30.7291C53.8218 31.5339 53.4533 32.2467 52.9297 32.8673C51.4072 34.6612 48.7503 35.5582 44.9587 35.5582H40.9442C37.7151 35.5582 35.2812 34.4285 33.6424 32.1691C32.3721 30.4139 31.7369 28.3242 31.7369 25.9C31.7369 24.1158 32.1006 22.1958 32.8278 20.14C33.1963 19.1121 33.56 18.2636 33.9188 17.5945L38.2097 19.66ZM64.7163 14.1909L61.8653 11.3109L64.6872 8.40182L67.5963 11.3109L64.7163 14.1909ZM58.6217 14.2055L55.7708 11.3255L58.5781 8.41636L61.4872 11.3255L58.6217 14.2055ZM65.6181 21.6236C65.6181 22.0891 65.7296 22.4188 65.9526 22.6127C66.2047 22.8358 66.6508 22.9473 67.2908 22.9473H69.4144V27.7182H67.2908C66.6605 27.7182 66.0641 27.6503 65.5017 27.5145C65.0556 27.4079 64.6387 27.2576 64.2508 27.0636C63.8047 26.8503 63.4702 26.637 63.2472 26.4236C63.0241 26.637 62.6653 26.8503 62.1708 27.0636C61.1914 27.5 60.0278 27.7182 58.6799 27.7182H53.7926V22.9473H59.0144C59.7126 22.9473 60.2023 22.8309 60.4835 22.5982C60.7356 22.3945 60.8617 22.0697 60.8617 21.6236V17.6673H65.6181V21.6236ZM78.9243 22.9473C79.4189 22.9473 79.7873 22.8455 80.0298 22.6418C80.3595 22.3703 80.5243 21.8903 80.5243 21.2018V17.6673H85.2952V21.2018C85.2952 21.8321 85.3825 22.2588 85.557 22.4818C85.7801 22.7921 86.2358 22.9473 86.9243 22.9473C87.4189 22.9473 87.7873 22.8455 88.0298 22.6418C88.3498 22.3703 88.5098 21.8903 88.5098 21.2018V17.6673H93.2807V21.2018C93.2807 21.803 93.3922 22.2297 93.6152 22.4818C93.877 22.7921 94.357 22.9473 95.0552 22.9473H96.917V27.7182H95.0552C93.0577 27.7182 91.6661 27.277 90.8807 26.3945C89.7267 27.277 88.408 27.7182 86.9243 27.7182C85.0237 27.7182 83.6807 27.277 82.8952 26.3945C81.7413 27.277 80.4419 27.7182 78.997 27.7182C77.4649 27.7182 76.1219 27.277 74.968 26.3945C74.1825 27.277 72.791 27.7182 70.7934 27.7182H68.6989V22.9473H70.7934C71.4916 22.9473 71.9716 22.7921 72.2334 22.4818C72.4564 22.2297 72.568 21.803 72.568 21.2018V17.6673H77.3389V21.2018C77.3389 21.8903 77.5037 22.3703 77.8334 22.6418C78.0661 22.8455 78.4298 22.9473 78.9243 22.9473ZM82.6189 11.6455L79.7389 14.5545L76.8589 11.6745L79.7389 8.76546L82.6189 11.6455ZM88.9316 11.6018L86.0807 14.4818L83.128 11.6309L86.037 8.72182L88.9316 11.6018ZM85.4407 7.84909L82.9098 10.38L80.408 7.87818L82.9389 5.34727L85.4407 7.84909ZM113.872 8.40182L104.344 12.7364C105.178 13.5606 106.347 14.7679 107.85 16.3582C109.139 17.7448 110.046 19.0345 110.57 20.2273C110.929 21.0612 111.108 21.8612 111.108 22.6273V22.7436C111.098 23.3642 110.977 23.9412 110.744 24.4745C110.531 24.9788 110.226 25.4345 109.828 25.8418C109.314 26.3655 108.664 26.7824 107.879 27.0927C106.793 27.5097 105.469 27.7182 103.908 27.7182H96.1989V22.9473H103.908C105.411 22.9473 106.308 22.8648 106.599 22.7C106.579 22.6127 106.531 22.4867 106.453 22.3218C106.356 22.1376 106.226 21.9242 106.061 21.6818C105.644 21.0515 105.081 20.363 104.373 19.6164C102.686 17.8224 101.222 16.3242 99.9807 15.1218C99.7673 14.9182 99.5637 14.7291 99.3698 14.5545C99.2243 14.4091 99.0837 14.2782 98.948 14.1618C98.8995 14.1133 98.851 14.0697 98.8025 14.0309L98.7007 13.9291L98.657 13.9L98.6425 13.8709L98.6134 13.8564L99.1661 9.87091L111.893 4.05273L113.872 8.40182ZM99.4716 5.62364L110.148 0.881819L110.904 2.51091L99.2825 7.68909L99.4716 5.62364ZM123.296 17.6527V21.6236C123.296 22.0406 123.509 22.3752 123.936 22.6273C124.275 22.8406 124.62 22.9473 124.969 22.9473H125.638V27.7182H124.969C124.406 27.7182 123.81 27.6261 123.18 27.4418C122.898 29.5848 122.176 31.3109 121.012 32.62C119.315 34.5497 116.833 35.5145 113.565 35.5145H112.125V30.7436H113.565C115.349 30.7436 116.62 30.3412 117.376 29.5364C118.142 28.7315 118.525 27.3836 118.525 25.4927V17.6527H123.296ZM134.969 20.3291C135.046 20.7945 135.085 21.2406 135.085 21.6673C135.085 22.9861 134.707 24.1691 133.95 25.2164C132.738 26.8842 130.765 27.7182 128.03 27.7182H124.918V22.9473H127.929C128.801 22.9473 129.417 22.8309 129.776 22.5982C130.144 22.3752 130.329 22.0212 130.329 21.5364C130.329 21.3909 130.309 21.2309 130.27 21.0564C130.173 20.5618 130.076 20.0576 129.979 19.5436C129.941 19.3497 129.902 19.1412 129.863 18.9182L129.805 18.6418L129.761 18.3655C129.616 17.5703 129.504 17.003 129.427 16.6636L133.979 15.2818C134.27 16.6491 134.6 18.3315 134.969 20.3291ZM126.634 32.78L129.659 29.7255L132.743 32.8091L129.689 35.8636L126.634 32.78ZM185.411 20.14C185.508 20.557 185.556 20.9933 185.556 21.4491C185.556 21.8176 185.522 22.2006 185.454 22.5982C185.289 23.5 184.965 24.3194 184.48 25.0564C183.326 26.8309 181.643 27.7182 179.432 27.7182C178.434 27.7182 177.498 27.5679 176.625 27.2673C176.034 27.0442 175.496 26.7533 175.011 26.3945C173.857 27.277 172.533 27.7182 171.04 27.7182C170.216 27.7182 169.469 27.6261 168.8 27.4418C168.732 29.6236 168.102 31.4079 166.909 32.7945C166.114 33.7255 165.086 34.4236 163.825 34.8891C162.565 35.3352 161.134 35.5582 159.534 35.5582H156.233C154.662 35.5582 153.231 35.2091 151.942 34.5109C150.652 33.8224 149.614 32.8479 148.829 31.5873C148.296 30.7048 147.913 29.7497 147.68 28.7218C147.496 27.8879 147.403 27.0055 147.403 26.0745C147.403 25.8418 147.408 25.6091 147.418 25.3764C147.563 22.9424 148.325 20.3485 149.702 17.5945L153.963 19.7036C152.868 21.9339 152.271 23.917 152.174 25.6527C152.165 25.8273 152.16 25.997 152.16 26.1618C152.16 27.3352 152.402 28.3048 152.887 29.0709C153.285 29.7109 153.823 30.1715 154.502 30.4527C155.016 30.6758 155.593 30.7873 156.233 30.7873H159.534C161.357 30.7873 162.584 30.4867 163.214 29.8855C163.767 29.3618 164.043 28.3921 164.043 26.9764V17.6673H168.8V21.2018C168.8 22.3655 169.44 22.9473 170.72 22.9473C171.253 22.9473 171.675 22.8455 171.985 22.6418C172.422 22.3606 172.64 21.8806 172.64 21.2018V17.6673H177.411V21.2018C177.411 21.803 177.522 22.2297 177.745 22.4818C178.007 22.7921 178.487 22.9473 179.185 22.9473C180.291 22.9473 180.843 22.5642 180.843 21.7982C180.843 21.6333 180.819 21.4491 180.771 21.2455C180.218 18.9667 179.859 17.4394 179.694 16.6636L184.32 15.5582C184.601 16.7218 184.965 18.2491 185.411 20.14ZM174.662 11.3691L171.782 14.2782L168.902 11.3982L171.782 8.48909L174.662 11.3691ZM180.974 11.3255L178.123 14.2055L175.171 11.3545L178.08 8.44545L180.974 11.3255ZM177.483 7.57273L174.952 10.1036L172.451 7.60182L174.982 5.07091L177.483 7.57273ZM196.268 22.9618V21.4636C196.268 20.5715 196.079 19.8636 195.701 19.34C195.323 18.8261 194.809 18.5691 194.159 18.5691C193.5 18.5691 192.976 18.8261 192.588 19.34C192.229 19.8152 192.05 20.4309 192.05 21.1873C192.05 21.2745 192.055 21.3667 192.064 21.4636C192.094 21.9776 192.326 22.3655 192.763 22.6273C193.131 22.8503 193.597 22.9618 194.159 22.9618H196.268ZM194.159 13.7982C196.302 13.7982 198.009 14.5788 199.279 16.14C200.452 17.5655 201.039 19.34 201.039 21.4636V22.9618H202.479V27.7182H200.995C200.753 30.7339 199.279 32.8915 196.574 34.1909C195.517 34.6952 194.28 35.0588 192.864 35.2818C191.749 35.4661 190.542 35.5582 189.243 35.5582V30.7873C191.667 30.7873 193.49 30.4479 194.712 29.7691C195.701 29.2261 196.195 28.5424 196.195 27.7182H194.159C192.433 27.7182 190.964 27.2527 189.752 26.3218C188.297 25.197 187.57 23.5776 187.57 21.4636C187.57 19.4564 188.055 17.7545 189.024 16.3582C190.198 14.6515 191.909 13.7982 194.159 13.7982ZM210.11 14.1618C210.906 14.2782 212.884 14.7727 216.045 15.6455C217.15 15.9461 218.319 16.2709 219.55 16.62C220.52 16.9012 221.267 17.1194 221.79 17.2745L222.532 21.4782C218.78 24.2321 215.958 25.9339 214.067 26.5836C211.837 27.34 207.74 27.7182 201.776 27.7182V22.9473C205.626 22.9473 208.409 22.8115 210.125 22.54C212.2 22.2103 214.052 21.5267 215.681 20.4891L214.62 20.1982L213.601 19.9073C212.767 19.6648 212.142 19.4903 211.725 19.3836C210.445 19.0345 209.64 18.86 209.31 18.86C209.049 18.86 208.801 19.0103 208.569 19.3109C208.326 19.6018 208.142 19.9994 208.016 20.5036L203.405 19.2964C203.851 17.5703 204.68 16.237 205.892 15.2964C206.92 14.4915 208.026 14.0891 209.209 14.0891C209.5 14.0891 209.8 14.1133 210.11 14.1618ZM206.169 9.15818L209.194 6.10364L212.278 9.18727L209.209 12.2418L206.169 9.15818ZM244.233 17.6527V21.6236C244.233 22.0406 244.447 22.3752 244.873 22.6273C245.213 22.8406 245.557 22.9473 245.906 22.9473H246.575V27.7182H245.906C245.344 27.7182 244.747 27.6261 244.117 27.4418C243.836 29.5848 243.113 31.3109 241.95 32.62C240.253 34.5497 237.77 35.5145 234.503 35.5145H233.062V30.7436H234.503C236.287 30.7436 237.557 30.3412 238.313 29.5364C239.079 28.7315 239.463 27.3836 239.463 25.4927V17.6527H244.233ZM254.19 14.1618C254.985 14.2782 256.963 14.7727 260.124 15.6455C261.23 15.9461 262.398 16.2709 263.63 16.62C264.599 16.9012 265.346 17.1194 265.87 17.2745L266.611 21.4782L266.19 21.7982L265.768 22.0891C265.428 22.3412 265.167 22.5352 264.982 22.6709C265.477 22.797 266.175 22.8794 267.077 22.9182C267.397 22.9279 267.741 22.9376 268.11 22.9473H268.866V27.7182C265.889 27.7182 263.77 27.4224 262.51 26.8309C261.773 26.4915 261.167 26.0358 260.691 25.4636C259.877 25.9097 259.028 26.283 258.146 26.5836C255.916 27.34 251.819 27.7182 245.855 27.7182V22.9473C249.705 22.9473 252.488 22.8115 254.204 22.54C256.279 22.2103 258.131 21.5267 259.761 20.4891L258.699 20.1982L257.681 19.9073C256.847 19.6648 256.221 19.4903 255.804 19.3836C254.524 19.0345 253.719 18.86 253.39 18.86C253.128 18.86 252.881 19.0103 252.648 19.3109C252.405 19.6018 252.221 19.9994 252.095 20.5036L247.484 19.2964C247.93 17.5703 248.759 16.237 249.971 15.2964C250.999 14.4915 252.105 14.0891 253.288 14.0891C253.579 14.0891 253.879 14.1133 254.19 14.1618ZM253.215 32.7073L256.241 29.6527L259.324 32.7364L256.27 35.7909L253.215 32.7073ZM279.962 21.6236C279.962 22.0891 280.073 22.4188 280.296 22.6127C280.548 22.8358 280.995 22.9473 281.635 22.9473H283.758V27.7182H281.635C281.004 27.7182 280.408 27.6503 279.845 27.5145C279.399 27.4079 278.982 27.2576 278.595 27.0636C278.148 26.8503 277.814 26.637 277.591 26.4236C277.368 26.637 277.009 26.8503 276.515 27.0636C275.535 27.5 274.372 27.7182 273.024 27.7182H268.136V22.9473H273.358C274.056 22.9473 274.546 22.8309 274.827 22.5982C275.079 22.3945 275.205 22.0697 275.205 21.6236V17.6673H279.962V21.6236ZM278.056 36.1255L275.205 33.2455L278.027 30.3364L280.936 33.2455L278.056 36.1255ZM271.918 36.14L269.067 33.26L271.875 30.3509L274.784 33.26L271.918 36.14ZM292.715 21.6236C292.715 22.0891 292.827 22.4188 293.05 22.6127C293.302 22.8358 293.748 22.9473 294.388 22.9473H294.97V27.7182H294.388C293.758 27.7182 293.161 27.6503 292.599 27.5145C292.153 27.4079 291.736 27.2576 291.348 27.0636C290.902 26.8503 290.567 26.637 290.344 26.4236C290.121 26.637 289.763 26.8503 289.268 27.0636C288.289 27.5 287.125 27.7182 285.777 27.7182H283.043V22.9473H286.112C286.81 22.9473 287.3 22.8309 287.581 22.5982C287.833 22.3945 287.959 22.0697 287.959 21.6236V17.6673H292.715V21.6236ZM286.272 10.9618L289.297 7.90727L292.381 10.9909L289.312 14.0455L286.272 10.9618ZM306.056 23.5436C306.182 23.1945 306.245 22.8164 306.245 22.4091C306.245 22.3024 306.24 22.1958 306.23 22.0891C306.182 21.3424 305.963 20.6976 305.576 20.1545C305.178 19.6018 304.717 19.3255 304.194 19.3255C303.476 19.3255 302.885 19.7521 302.419 20.6055C302.254 20.8964 302.104 21.2552 301.968 21.6818C301.92 21.8176 301.866 21.9824 301.808 22.1764L301.75 22.3945L301.692 22.5836C302.254 23.0685 302.972 23.4709 303.845 23.7909C304.562 24.043 305.134 24.1691 305.561 24.1691C305.736 24.1691 305.9 23.9606 306.056 23.5436ZM304.194 14.5545C306.443 14.5545 308.16 15.4952 309.343 17.3764C309.799 18.1036 310.143 18.9279 310.376 19.8491C310.57 20.6345 310.666 21.3812 310.666 22.0891C310.666 24.4455 310.075 26.2103 308.892 27.3836C308.446 27.8394 307.922 28.1885 307.321 28.4309C306.836 28.6248 306.346 28.7364 305.852 28.7655C305.755 28.7752 305.619 28.78 305.445 28.78C304.233 28.78 302.943 28.4794 301.576 27.8782C301.11 27.6842 300.611 27.437 300.077 27.1364L299.757 26.9618L299.466 26.8018C299.243 26.6661 299.083 26.5739 298.986 26.5255C298.191 27.3206 296.868 27.7182 295.016 27.7182H294.23V22.9473H294.826C295.806 22.9473 296.451 22.7436 296.761 22.3364C296.897 22.1521 297.168 21.4248 297.576 20.1545C297.605 20.0673 297.634 19.9848 297.663 19.9073C297.692 19.8006 297.731 19.6939 297.779 19.5873C297.876 19.3158 297.988 19.0539 298.114 18.8018C298.443 18.0939 298.831 17.4685 299.277 16.9255C300.567 15.3448 302.206 14.5545 304.194 14.5545ZM351.102 27.7182C348.823 27.7182 346.908 27.117 345.357 25.9145C344.93 25.5752 344.542 25.2261 344.193 24.8673C343.592 25.6527 342.806 26.2976 341.837 26.8018C340.654 27.4224 339.374 27.7327 337.997 27.7327H332.746C329.701 27.7327 327.795 27.6648 327.029 27.5291C325.536 27.277 324.397 26.5545 323.611 25.3618C323.117 24.6152 322.806 23.7618 322.68 22.8018C322.642 22.4527 322.622 22.0891 322.622 21.7109C322.622 21.2939 322.646 20.8624 322.695 20.4164C322.763 19.8152 322.942 18.957 323.233 17.8418C323.32 17.483 323.417 17.1194 323.524 16.7509C323.563 16.6248 323.597 16.5085 323.626 16.4018C323.645 16.3145 323.66 16.2612 323.669 16.2418L328.251 17.5364C327.757 19.3012 327.427 20.7461 327.262 21.8709C327.252 21.9485 327.248 22.0261 327.248 22.1036C327.248 22.2879 327.282 22.4479 327.349 22.5836C327.466 22.8358 327.674 22.9618 327.975 22.9618H337.997C338.54 22.9618 339.059 22.8455 339.553 22.6127C340.048 22.38 340.377 22.0988 340.542 21.7691C340.62 21.6042 340.659 21.4248 340.659 21.2309C340.659 20.7267 340.406 20.1061 339.902 19.3691L339.422 18.7145C338.763 17.9 337.914 16.8333 336.877 15.5145C336.489 15.0297 336.145 14.5982 335.844 14.22C335.572 13.8709 335.432 13.6915 335.422 13.6818L336.266 10.06L348.877 3.98L350.942 8.27091L341.008 13.0564C341.492 13.6673 342.991 15.6164 345.502 18.9036C346.763 20.62 347.684 21.7012 348.266 22.1473C348.964 22.6806 349.909 22.9473 351.102 22.9473H351.32V27.7182H351.102ZM360.831 22.9473C361.325 22.9473 361.694 22.8455 361.936 22.6418C362.266 22.3703 362.431 21.8903 362.431 21.2018V17.6673H367.201V21.2018C367.201 21.8321 367.289 22.2588 367.463 22.4818C367.686 22.7921 368.142 22.9473 368.831 22.9473C369.325 22.9473 369.694 22.8455 369.936 22.6418C370.256 22.3703 370.416 21.8903 370.416 21.2018V17.6673H375.187V21.2018C375.187 21.803 375.298 22.2297 375.521 22.4818C375.783 22.7921 376.263 22.9473 376.961 22.9473H378.823V27.7182H376.961C374.964 27.7182 373.572 27.277 372.787 26.3945C371.633 27.277 370.314 27.7182 368.831 27.7182C366.93 27.7182 365.587 27.277 364.801 26.3945C363.648 27.277 362.348 27.7182 360.903 27.7182C359.371 27.7182 358.028 27.277 356.874 26.3945C356.089 27.277 354.697 27.7182 352.7 27.7182H350.605V22.9473H352.7C353.398 22.9473 353.878 22.7921 354.14 22.4818C354.363 22.2297 354.474 21.803 354.474 21.2018V17.6673H359.245V21.2018C359.245 21.8903 359.41 22.3703 359.74 22.6418C359.972 22.8455 360.336 22.9473 360.831 22.9473ZM390.731 20.3291C390.808 20.7945 390.847 21.2406 390.847 21.6673C390.847 22.9861 390.469 24.1691 389.712 25.2164C388.5 26.8842 386.527 27.7182 383.792 27.7182H378.105V22.9473H383.691C384.563 22.9473 385.179 22.8309 385.538 22.5982C385.906 22.3752 386.091 22.0212 386.091 21.5364C386.091 21.3909 386.071 21.2309 386.032 21.0564C385.935 20.5618 385.838 20.0576 385.741 19.5436C385.703 19.3497 385.664 19.1412 385.625 18.9182L385.567 18.6418L385.523 18.3655C385.378 17.5703 385.266 17.003 385.189 16.6636L389.741 15.2818C390.032 16.6491 390.362 18.3315 390.731 20.3291ZM387.734 13.0709L384.883 10.1909L387.705 7.28182L390.614 10.1909L387.734 13.0709ZM381.64 13.0855L378.789 10.2055L381.596 7.29636L384.505 10.2055L381.64 13.0855ZM408.288 27.7182H403.517V6.74364H408.288V27.7182ZM419.171 17.6527V21.6236C419.171 22.0406 419.384 22.3752 419.811 22.6273C420.15 22.8406 420.495 22.9473 420.844 22.9473H421.513V27.7182H420.844C420.281 27.7182 419.685 27.6261 419.055 27.4418C418.773 29.5848 418.051 31.3109 416.887 32.62C415.19 34.5497 412.708 35.5145 409.44 35.5145H408V30.7436H409.44C411.224 30.7436 412.495 30.3412 413.251 29.5364C414.017 28.7315 414.4 27.3836 414.4 25.4927V17.6527H419.171ZM433.418 20.3291C433.496 20.7945 433.534 21.2406 433.534 21.6673C433.534 22.9861 433.156 24.1691 432.4 25.2164C431.188 26.8842 429.214 27.7182 426.48 27.7182H420.793V22.9473H426.378C427.251 22.9473 427.867 22.8309 428.225 22.5982C428.594 22.3752 428.778 22.0212 428.778 21.5364C428.778 21.3909 428.759 21.2309 428.72 21.0564C428.623 20.5618 428.526 20.0576 428.429 19.5436C428.39 19.3497 428.351 19.1412 428.313 18.9182L428.254 18.6418L428.211 18.3655C428.065 17.5703 427.954 17.003 427.876 16.6636L432.429 15.2818C432.72 16.6491 433.05 18.3315 433.418 20.3291ZM422.785 15.2673V13.1L424.589 12.5182C424.298 12.2176 424.056 11.8782 423.862 11.5C423.677 11.1218 423.585 10.7194 423.585 10.2927C423.585 9.96303 423.644 9.63818 423.76 9.31818C423.876 8.99818 424.036 8.70242 424.24 8.43091C424.444 8.15939 424.681 7.92182 424.953 7.71818C425.234 7.51455 425.53 7.36909 425.84 7.28182C426.005 7.23333 426.17 7.19939 426.334 7.18C426.509 7.15091 426.679 7.13636 426.844 7.13636C427.193 7.13636 427.498 7.18 427.76 7.26727C428.031 7.34485 428.284 7.42727 428.516 7.51455L428.764 7.63091L428.327 9.43455C428.191 9.40545 428.041 9.36667 427.876 9.31818C427.711 9.2697 427.547 9.23091 427.382 9.20182C427.217 9.17273 427.052 9.15818 426.887 9.15818C426.732 9.14849 426.591 9.16303 426.465 9.20182C426.33 9.2503 426.194 9.31818 426.058 9.40545C425.932 9.49273 425.825 9.59455 425.738 9.71091C425.651 9.81758 425.593 9.94364 425.564 10.0891C425.544 10.1473 425.534 10.2055 425.534 10.2636C425.534 10.3606 425.554 10.4576 425.593 10.5545C425.67 10.8067 425.85 11.02 426.131 11.1945C426.422 11.3691 426.824 11.4564 427.338 11.4564C427.435 11.4564 427.537 11.4515 427.644 11.4418C427.76 11.4321 427.91 11.4079 428.094 11.3691C428.279 11.3206 428.511 11.2576 428.793 11.18C429.084 11.0927 429.452 10.9764 429.898 10.8309L430.014 12.8818L422.785 15.2673ZM444.487 22.9618V21.4636C444.487 20.5715 444.298 19.8636 443.92 19.34C443.541 18.8261 443.027 18.5691 442.378 18.5691C441.718 18.5691 441.195 18.8261 440.807 19.34C440.448 19.8152 440.269 20.4309 440.269 21.1873C440.269 21.2745 440.273 21.3667 440.283 21.4636C440.312 21.9776 440.545 22.3655 440.981 22.6273C441.35 22.8503 441.815 22.9618 442.378 22.9618H444.487ZM442.378 13.7982C444.521 13.7982 446.227 14.5788 447.498 16.14C448.671 17.5655 449.258 19.34 449.258 21.4636V22.9618H450.698V27.7182H449.214C448.972 30.7339 447.498 32.8915 444.792 34.1909C443.735 34.6952 442.499 35.0588 441.083 35.2818C439.968 35.4661 438.761 35.5582 437.461 35.5582V30.7873C439.886 30.7873 441.709 30.4479 442.93 29.7691C443.92 29.2261 444.414 28.5424 444.414 27.7182H442.378C440.652 27.7182 439.183 27.2527 437.97 26.3218C436.516 25.197 435.789 23.5776 435.789 21.4636C435.789 19.4564 436.273 17.7545 437.243 16.3582C438.417 14.6515 440.128 13.7982 442.378 13.7982ZM467.653 8.40182L458.126 12.7364C458.96 13.5606 460.128 14.7679 461.631 16.3582C462.921 17.7448 463.827 19.0345 464.351 20.2273C464.71 21.0612 464.889 21.8612 464.889 22.6273V22.7436C464.88 23.3642 464.758 23.9412 464.526 24.4745C464.312 24.9788 464.007 25.4345 463.609 25.8418C463.095 26.3655 462.446 26.7824 461.66 27.0927C460.574 27.5097 459.25 27.7182 457.689 27.7182H449.98V22.9473H457.689C459.192 22.9473 460.089 22.8648 460.38 22.7C460.361 22.6127 460.312 22.4867 460.235 22.3218C460.138 22.1376 460.007 21.9242 459.842 21.6818C459.425 21.0515 458.863 20.363 458.155 19.6164C456.467 17.8224 455.003 16.3242 453.762 15.1218C453.549 14.9182 453.345 14.7291 453.151 14.5545C453.006 14.4091 452.865 14.2782 452.729 14.1618C452.681 14.1133 452.632 14.0697 452.584 14.0309L452.482 13.9291L452.438 13.9L452.424 13.8709L452.395 13.8564L452.947 9.87091L465.675 4.05273L467.653 8.40182ZM487.018 21.4782C487.541 21.0515 487.803 20.4891 487.803 19.7909V19.7182C487.793 19.4273 487.735 19.0394 487.629 18.5545C487.599 18.4091 487.551 18.1861 487.483 17.8855L487.396 17.5073L487.309 17.1145C485.767 17.6479 484.749 18.1618 484.254 18.6564C483.798 19.1121 483.57 19.6115 483.57 20.1545V20.2564C483.599 20.8285 483.852 21.2939 484.327 21.6527C484.627 21.8758 485.015 21.9873 485.49 21.9873C486.082 21.9873 486.591 21.8176 487.018 21.4782ZM491.992 16.2709C492.07 16.6006 492.167 17.0224 492.283 17.5364L492.429 18.1327L492.559 18.7C492.763 19.5727 492.957 20.3582 493.141 21.0564C493.355 21.8418 493.738 22.3509 494.29 22.5836C494.62 22.7291 495.042 22.8309 495.556 22.8891C495.905 22.9279 496.37 22.9473 496.952 22.9473V27.7182C496.079 27.7182 495.328 27.6745 494.698 27.5873C493.825 27.4709 493.039 27.2576 492.341 26.9473C491.41 26.5206 490.635 25.9388 490.014 25.2018L489.839 24.9982C489.345 25.4345 488.782 25.7836 488.152 26.0455C487.347 26.3655 486.494 26.5255 485.592 26.5255L485.447 26.5109H485.287C484.181 26.4624 483.178 26.1958 482.276 25.7109C480.589 24.8285 479.551 23.4418 479.163 21.5509C479.056 21.0467 479.003 20.5473 479.003 20.0527C479.003 19.403 479.095 18.7679 479.279 18.1473C479.638 17.0515 480.264 16.077 481.156 15.2236C482.135 14.283 483.837 13.4248 486.261 12.6491L485.985 11.3691L490.639 10.3073C491.192 12.7315 491.643 14.7194 491.992 16.2709ZM506.281 20.3291C506.359 20.7945 506.397 21.2406 506.397 21.6673C506.397 22.9861 506.019 24.1691 505.263 25.2164C504.051 26.8842 502.077 27.7182 499.343 27.7182H496.23V22.9473H499.241C500.114 22.9473 500.73 22.8309 501.088 22.5982C501.457 22.3752 501.641 22.0212 501.641 21.5364C501.641 21.3909 501.622 21.2309 501.583 21.0564C501.486 20.5618 501.389 20.0576 501.292 19.5436C501.253 19.3497 501.214 19.1412 501.176 18.9182L501.117 18.6418L501.074 18.3655C500.928 17.5703 500.817 17.003 500.739 16.6636L505.292 15.2818C505.583 16.6491 505.913 18.3315 506.281 20.3291ZM497.946 32.78L500.972 29.7255L504.056 32.8091L501.001 35.8636L497.946 32.78Z"
                  fill="#1E1E1E"
                />
              </svg>
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                <Input {...userNameProps} />
                <div className="flex flex-col gap-2">
                  <Input {...userPasswordProps} />
                  <div className="flex flex-row items-center justify-end text-bodys">
                    <Link
                      className="border-b-[1px] font-thin text-[#1e1e1e]"
                      to={'/api/auth/forgetPassword'}
                    >
                      رمز عبور خود را فراموش کردی؟
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <Button
                  formButtonLogin
                  formButtonLoginSecondary
                  textWhite
                  onClickFunction={onSubmit}
                >
                  {isLoading
                    ? (
                    <div className="flex h-[20px] w-full flex-row items-center justify-center">
                      <LoadingComponent />
                    </div>
                      )
                    : (
                        'ورود'
                      )}
                </Button>
                <div className="flex flex-row items-center justify-center text-[19px]">
                  <button
                    onClick={() => navigate('/api/auth/register')}
                    className="p-[10px] font-extrabold leading-[19.73px] text-brand-primary"
                  >
                    ثبت‌نام
                  </button>
                  <span className=" font-thin">ثبت‌نام نکرده‌ای؟</span>
                </div>
              </div>
            </div>
          </motion.form>
        </FormProvider>
      </AuthCard>
    </Layout>
  )
}

export default Login
