import Card from '@/components/ui/Card2'

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <Card
        title="شرایط و قوانین استفاده از خدمات"
        description="لطفاً پیش از استفاده از سرویس، این موارد را با دقت مطالعه نمایید."
      >
        <div className="space-y-6 text-sm leading-7 text-slate-300">
          <section>
            <h4 className="font-semibold text-slate-100 mb-2">
              1. پذیرش شرایط
            </h4>
            <p>
              ورود، ثبت‌نام و استفاده از خدمات به معنای پذیرش کامل این شرایط و
              قوانین است. در صورت عدم موافقت، لطفاً از استفاده از خدمات خودداری
              نمایید.
            </p>
          </section>

          <section>
            <h4 className="font-semibold text-slate-100 mb-2">
              2. حساب کاربری
            </h4>
            <p>
              کاربر موظف است اطلاعات صحیح و به‌روز ارائه دهد. مسئولیت حفظ امنیت
              حساب کاربری، از جمله کدهای ورود یک‌بارمصرف (OTP)، بر عهده کاربر
              است.
            </p>
          </section>

          <section>
            <h4 className="font-semibold text-slate-100 mb-2">
              3. استفاده مجاز
            </h4>
            <p>
              کاربر متعهد می‌شود از خدمات صرفاً برای مقاصد قانونی استفاده کرده و
              از هرگونه سوءاستفاده، تلاش برای نفوذ، یا اختلال در عملکرد سیستم
              خودداری نماید.
            </p>
          </section>

          <section>
            <h4 className="font-semibold text-slate-100 mb-2">4. حریم خصوصی</h4>
            <p>
              اطلاعات کاربران مطابق با سیاست حفظ حریم خصوصی پردازش و نگهداری
              می‌شود و بدون رضایت کاربر در اختیار اشخاص ثالث قرار نخواهد گرفت،
              مگر به حکم قانون.
            </p>
          </section>

          <section>
            <h4 className="font-semibold text-slate-100 mb-2">
              5. کوکی‌ها و احراز هویت
            </h4>
            <p>
              این سرویس از کوکی‌های امن و httpOnly جهت احراز هویت و افزایش امنیت
              استفاده می‌کند. با ادامه استفاده از خدمات، شما با استفاده از این
              کوکی‌ها موافقت می‌نمایید.
            </p>
          </section>

          <section>
            <h4 className="font-semibold text-slate-100 mb-2">
              6. محدودیت مسئولیت
            </h4>
            <p>
              خدمات به صورت «همان‌گونه که هست» ارائه می‌شود و هیچ تضمینی نسبت به
              عدم قطعی یا خطاهای احتمالی وجود ندارد.
            </p>
          </section>

          <section>
            <h4 className="font-semibold text-slate-100 mb-2">
              7. تغییرات در شرایط
            </h4>
            <p>
              این شرایط ممکن است در هر زمان به‌روزرسانی شود و ادامه استفاده از
              خدمات به منزله پذیرش نسخه جدید خواهد بود.
            </p>
          </section>

          <section>
            <h4 className="font-semibold text-slate-100 mb-2">8. قطع خدمات</h4>
            <p>
              در صورت نقض شرایط، این سرویس حق دارد دسترسی کاربر را به صورت موقت
              یا دائم محدود یا مسدود نماید.
            </p>
          </section>
        </div>
      </Card>
    </div>
  )
}
