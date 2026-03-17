import Logo from '@/components/Common/Svg/Logo'
import Button from '@/components/ui/Button'
import { Link, Navigate } from 'react-router-dom'

export default function OnBoarding() {
  //   const { user, loading } = useAuth()
  //   const navigate = useNavigate()
  //   const [searchParams] = useSearchParams()

  //   useEffect(() => {
  //     const next = searchParams.get('next')
  //     if (!loading && user) {
  //       navigate(next || '/dashboard')
  //     }
  //   }, [loading, navigate, searchParams, user])

  //   if (user) {
  //     return (
  //       <div className="flex min-h-[60vh] items-center justify-center text-slate-300">
  //         در حال انتقال به فضای کار...
  //       </div>
  //     )
  //   }

  return (
    <section className="min-h-[720px] bg-black flex items-center justify-center">
      <div className="relative h-screen text-center max-w-xl flex flex-col justify-between items-center py-4 px-6">
        {/* <!-- sparkles --> */}
        <span className="absolute top-20 left-20 text-yellow-300 animate-pulse">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2L13.8 8.2L20 10L13.8 11.8L12 18L10.2 11.8L4 10L10.2 8.2L12 2Z"
              fill="#FFC857"
            />
          </svg>
        </span>
        <span className="absolute top-20 right-20 text-yellow-200 animate-pulse delay-200">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2L13.8 8.2L20 10L13.8 11.8L12 18L10.2 11.8L4 10L10.2 8.2L12 2Z"
              fill="#FFC857"
            />
          </svg>
        </span>
        <span className="absolute bottom-20 left-10 text-yellow-300 animate-pulse delay-500">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2L13.8 8.2L20 10L13.8 11.8L12 18L10.2 11.8L4 10L10.2 8.2L12 2Z"
              fill="#FFC857"
            />
          </svg>
        </span>

        <Logo />
        <div className="">
          <h1 className="text-4xl font-bold text-white mb-2">DivTime</h1>

          <p className="text-yellow-300 mb-6 text-lg">دیو تایم</p>
        </div>
        <div className="">
          {/* <!-- title --> */}
          <h2 className="text-3xl font-bold text-white mb-4">
            زمانت رو هوشمندانه تقسیم کن
          </h2>

          {/* <!-- description --> */}
          <p className="text-gray-400 mb-10 leading-relaxed">
            برنامه روزانه بساز، زمان کارت را با دوستانت به اشتراک بگذار و با چت
            صوتی با هم پیشرفت کنید.
          </p>
        </div>

        {/* <!-- button --> */}
        <Link
          onClick={() => (
            <Navigate to={'/auth/login'} state={{ from: location }} replace />
          )}
          to={"/auth/login"}
          className="relative inline-flex items-center justify-center w-full"
        >
          <div className="absolute inset-0 blur-xl bg-amber-400/30 rounded-xl"></div>

          <div className="w-full justify-center group relative flex items-center gap-2 px-8 py-3 rounded-xl font-semibold text-black bg-gradient-to-r from-amber-400 to-yellow-300 hover:from-amber-300 hover:to-yellow-200 shadow-lg shadow-amber-400/40 transition-all duration-300 hover:scale-105 active:scale-95">
            <svg
              className="w-5 h-5 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
            شروع کنید
          </div>
        </Link>
      </div>
    </section>
  )
}
