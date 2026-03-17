import Input from '@/components/Common/Input/Input'
import Button from '@/components/ui/Button'
import { useState } from 'react'

export default function LoginPage() {
  const [enter, setEnter] = useState<Boolean>(false)
  const [value, setValue] = useState<string>('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let input = e.target.value

    // فقط عدد
    input = input.replace(/[^0-9]/g, '')

    setValue(input)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // جلوگیری از e , E , + , -
    if (['e', 'E', '+', '-'].includes(e.key)) {
      e.preventDefault()
    }
  }

  return (
    <div className="mx-auto flex min-h-[70vh] max-w-3xl flex-col justify-center gap-8 px-4 py-10">
      <div className="space-y-3 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-200">
          برای ادامه وارد شوید
        </p>
        <h1 className="text-4xl font-bold text-slate-50 sm:text-5xl">
          خوش آمدید
        </h1>
      </div>
      {enter ? (
        <Input
          id="phone"
          label="شماره تلفن"
          name="phone"
          type="number"
          placeholder='مثلا 09120213021'
          pattern="[0-9]*"
          initialValue={value}
          onKeyDown={handleKeyDown}
          onChange={handleChange}
          className='w-60'
        />
      ) : (
        <Button onClick={() => setEnter(true)}>ادامه با شماره موبایل</Button>
      )}

      <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4 text-xs text-slate-500">
        <p className="font-semibold text-slate-300">چرا باید وارد شوید؟</p>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>ذخیره تایمرها، تاریخچه پومودورو و کارهای برنامه‌ریز.</li>
          <li>دریافت پیام‌های زنده تیمی.</li>
          <li>پیوستن به اتاق‌های صوتی .</li>
        </ul>
      </div>
    </div>
  )
}
