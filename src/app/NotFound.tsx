import { type FunctionComponent } from 'react'
import { Link } from 'react-router-dom'

import Card from '@/components/ui/Card2'
import Button from '@/components/ui/Button'

interface NotFoundProps {}

const NotFound: FunctionComponent<NotFoundProps> = () => {
  return (
    <div className="flex min-h-[70vh] items-center justify-center">
      <Card
        title="صفحه پیدا نشد"
        description="کدی که درخواست کرده‌اید وجود ندارد یا مسیر اشتباه است."
        className="max-w-xl w-full text-center"
      >
        <div className="space-y-6">
          <div>
            <p className="text-7xl font-bold text-amber-300">404</p>
            <p className="mt-2 text-sm text-slate-400">
              ممکن است آدرس را اشتباه وارد کرده باشید یا صفحه حذف شده باشد.
            </p>
          </div>

          <div className="flex justify-center gap-3">
            <Link to="/">
              <Button>بازگشت به داشبورد</Button>
            </Link>

            <Button variant="secondary" onClick={() => window.history.back()}>
              بازگشت
            </Button>
          </div>

          <div className="text-xs text-slate-500">
            مسیر فعلی در سیستم پیدا نشد.
          </div>
        </div>
      </Card>
    </div>
  )
}

export default NotFound
