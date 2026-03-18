'use client';

import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { useAuth } from "@/auth/AuthProvider";

export default function SettingsPage() {
  const { user, theme, setTheme, logout } = useAuth();

  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs uppercase tracking-[0.25em] text-amber-200">تنظیمات</p>
        <h1 className="text-3xl font-semibold text-slate-50">پروفایل و ترجیحات</h1>
        <p className="text-sm text-slate-400">
          نگهبان سمت کلاینت منتظر `/api/auth/me` می‌ماند. تم در حالت ورود در بک‌اند و لوکال ذخیره می‌شود.
        </p>
      </div>

      <Card title="پروفایل">
        {user ? (
          <div className="space-y-2 text-sm text-slate-200">
            <p>
              <span className="text-slate-400">نام:</span> {user.name}
            </p>
            {user.email && (
              <p>
                <span className="text-slate-400">ایمیل:</span> {user.email}
              </p>
            )}
            {user.provider && (
              <p>
                <span className="text-slate-400">ارائه‌دهنده:</span> {user.provider}
              </p>
            )}
          </div>
        ) : (
          <p className="text-slate-500">کاربری بارگذاری نشده.</p>
        )}
      </Card>

      <Card title="ظاهر">
        <div className="flex items-center gap-3">
          <Button variant="secondary" onClick={() => setTheme("light")}>
            روشن
          </Button>
          <Button variant="secondary" onClick={() => setTheme("dark")}>
            تاریک
          </Button>
          <span className="text-sm text-slate-400">حالت فعلی: {theme === "dark" ? "تاریک" : "روشن"}</span>
        </div>
      </Card>

      <Card title="خروج">
        <Button variant="ghost" onClick={() => logout()}>
          خروج
        </Button>
      </Card>
    </div>
  );
}
