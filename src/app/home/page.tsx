import { Link } from 'react-router-dom'
import Card from '@/components/ui/Card'
import { useAuth } from '@/features/auth/authProvider'

export default function HomePage() {
  const { user } = useAuth()

  return (
    <div dir="rtl" className="min-h-screen text-slate-100">
      <div className="mx-auto max-w-5xl px-6 py-16 space-y-10">
        {/* هدر / برند اصلی */}
        <header className="text-center space-y-3">
          <h1 className="text-4xl font-extrabold text-amber-400 tracking-tight">
            سامانه احراز هویت مبتنی بر کوکی
          </h1>
          <p className="text-slate-400 text-sm">
            پلتفرمی امن برای ورود با شماره موبایل، استفاده از کوکی‌های httpOnly
            و مدیریت نشست کاربر
          </p>
        </header>

        {/* بخش معرفی خدمات */}
        <section className="grid sm:grid-cols-2 gap-6">
          <Card title="ورود ایمن" description="بدون نیاز به رمز عبور">
            <p>
              ورود کاربران تنها با شماره موبایل و کد یک‌بارمصرف انجام می‌شود تا
              امنیت و سرعت افزایش یابد.
            </p>
          </Card>

          <Card title="مدیریت نشست‌ها" description="بر پایه توکن و کوکی">
            <p>
              نشست‌ها با توکن‌های امن در کوکی ذخیره می‌شوند و از لو رفتن اطلاعات
              جلوگیری می‌کنند.
            </p>
          </Card>

          <Card title="معماری مدرن" description="NestJS + React Query">
            <p>
              بک‌اند و فرانت‌اند با فناوری روز طراحی شده‌اند تا اجرای سریع و
              توسعه‌پذیری بالا داشته باشند.
            </p>
          </Card>

          <Card
            title="تجربه کاربری بهینه"
            description="طراحی الهام‌گرفته از دیجیکالا"
          >
            <p>
              رابط کاربری تاریک با تم زرد و مشکی، طراحی شده برای تمرکز و خوانایی
              بالا در محیط‌های مدرن.
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
