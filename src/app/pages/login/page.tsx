import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSendOtp, useVerifyOtp } from '@/features/auth/api'
import Logo from '@/assets/logo.svg'
import { useAuth } from '@/features/auth/authProvider'

export default function LoginPage() {
  const { user, loading } = useAuth()

  const navigate = useNavigate()
  const [step, setStep] = useState<'phone' | 'otp'>('phone')
  const [phone, setPhone] = useState('')
  const [otp, setOtp] = useState('')
  const sendOtp = useSendOtp()
  const verifyOtp = useVerifyOtp()

  useEffect(() => {
    if (!loading && user) {
      navigate('/dashboard')
    }
  }, [loading, navigate, user])

  const handleSendOtp = (e: React.FormEvent) => {
    e.preventDefault()
    if (!phone) return

    sendOtp.mutate(phone, {
      onSuccess: () => setStep('otp')
    })
  }

  const handleVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault()
    if (!otp) return

    verifyOtp.mutate(
      { phone, code: otp },
      {
        onSuccess: () => navigate('/')
      }
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F5F5F5] px-4">
      <div className="w-full max-w-sm rounded-xl shadow-md p-8">
        <div className="flex justify-center mb-6">
          <img src={Logo} alt="logo" className="h-8" />
        </div>

        <h1 className="text-xl font-semibold text-[#23254E] mb-2">
          ورود | ثبت‌نام
        </h1>

        {step === 'phone' ? (
          <>
            <p className="text-sm text-gray-500 mb-6 leading-relaxed">
              سلام! لطفاً شماره موبایل خود را وارد کنید
            </p>

            <form onSubmit={handleSendOtp} className="space-y-4">
              <input
                type="tel"
                placeholder="شماره موبایل"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[#F9BC00]"
                required
              />

              <button
                type="submit"
                disabled={sendOtp.isPending}
                className="w-full bg-[#F9BC00] text-white font-medium py-3 rounded-lg hover:opacity-90 transition"
              >
                {sendOtp.isPending ? 'در حال ارسال...' : 'ارسال کد'}
              </button>

              {sendOtp.isError && (
                <p className="text-red-500 text-sm text-center">
                  ارسال کد با خطا مواجه شد
                </p>
              )}
            </form>
          </>
        ) : (
          <>
            <p className="text-sm text-gray-500 mb-6 leading-relaxed">
              کد ارسال‌شده به شماره {phone} را وارد کنید
            </p>

            <form onSubmit={handleVerifyOtp} className="space-y-4">
              <input
                type="text"
                maxLength={6}
                placeholder="کد ۶ رقمی"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="w-full text-center tracking-widest border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[#F9BC00]"
              />

              <button
                type="submit"
                disabled={verifyOtp.isPending}
                className="w-full bg-[#F9BC00] text-black font-medium py-3 rounded-lg hover:opacity-90 transition"
              >
                {verifyOtp.isPending ? 'در حال بررسی...' : 'تأیید'}
              </button>

              {verifyOtp.isError && (
                <p className="text-red-500 text-sm text-center">
                  کد وارد شده صحیح نیست
                </p>
              )}
            </form>
          </>
        )}

        <p className="text-xs text-gray-400 text-center mt-8 leading-relaxed">
          ورود شما به معنای پذیرش{' '}
          <span className="text-[#F9BC00] mx-1">شرایط و قوانین</span> است
        </p>
      </div>
    </div>
  )
}
