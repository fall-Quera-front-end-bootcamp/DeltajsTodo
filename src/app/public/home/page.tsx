import { Link } from 'react-router-dom'
import Card from '@/components/ui/Card'
import { useAuth } from '@/features/auth/authProvider'

export default function HomePage() {
  const { user } = useAuth()

  return (
    <div
      dir="rtl"
      className="min-h-screen text-slate-950 bg-white dark:bg-transparent dark:text-slate-100"
    >
      <div className="mx-auto max-w-5xl px-6 py-16 space-y-10">
        {/* هدر / برند اصلی */}
        <header className="text-center space-y-3">
          <h1 className="text-4xl font-extrabold text-amber-400 tracking-tight">
            DivTime
          </h1>
          <p className="text-slate-400 text-sm">
            پلتفرمی امن برای ارتباط و تقسیم کار به صورت هوشمندانه با همکاران ،
            همکلاسی‌ها و دوستان
          </p>
        </header>

        {/* بخش معرفی خدمات */}
        <section className="grid gap-6 sm:grid-cols-2">
          <Card
            title="مدیریت هوشمند زمان"
            description="برنامه‌ریزی دقیق برای استفاده بهتر از زمان"
          >
            <p className="text-sm leading-6 text-[var(--muted)]">
              با ابزارهای مدیریت زمان، فعالیت‌های روزانه خود را برنامه‌ریزی
              کنید، اولویت‌ها را مشخص کنید و از هر لحظه بهترین استفاده را ببرید.
            </p>
          </Card>

          <Card
            title="برنامه‌ریزی هوشمند اهداف"
            description="طراحی مسیر روزانه تا اهداف سالانه"
          >
            <p className="text-sm leading-6 text-[var(--muted)]">
              اهداف روزانه، هفتگی و سالانه خود را مشخص کنید و با یک سیستم
              برنامه‌ریزی هوشمند پیشرفت خود را مرحله‌به‌مرحله دنبال کنید.
            </p>
          </Card>
        </section>

        {/* فراخوان اقدام */}
        <section className="flex flex-col items-center space-y-4 mt-10">
          {user ? (
            <Link
              to="/app/dashboard"
              className="bg-amber-400 text-black px-6 py-2 rounded-lg font-bold hover:bg-amber-300 transition"
            >
              ورود به داشبورد
            </Link>
          ) : (
            <Link
              to="/auth/login"
              className="bg-amber-400 text-black px-6 py-2 rounded-lg font-bold hover:bg-amber-300 transition"
            >
              ورود به حساب کاربری
            </Link>
          )}

          <Link
            to="/page/terms"
            className="text-sm text-slate-400 hover:text-amber-300 transition"
          >
            شرایط و قوانین استفاده
          </Link>
        </section>
      </div>
    </div>
  )
}
