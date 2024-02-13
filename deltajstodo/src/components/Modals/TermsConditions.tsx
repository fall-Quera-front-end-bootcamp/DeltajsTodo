import '../../dist/output.css'
import { IoCloseOutline } from 'react-icons/io5' // react-icons

const TermsConditions = (): JSX.Element => {
  return (
    <section className="flex h-screen flex-col items-center justify-center bg-gray-dark bg-opacity-25  ">
      <div
        className="w-[800px] p-6 flex flex-col items-center justify-center rounded-[20px] pt-[24px] pr-[24px] pb-[32px] pl-[24px] gap-[32px]  bg-[#ffff] shadow-[0px_50px_100px_-20px_#32325D40,0px_30px_60px_-30px_#0000004D]
"
      >
        <div className="flex items-center justify-between">
          <IoCloseOutline className="w-[32px] h-[32px] text-[#323232] relative right-60 justify-center items-center " />
          <h1 className="text-right leading-[45.9px] font-yekan text-headingl font-extrabold text-[#1E1E1E]">
            قوانین و مقررات
          </h1>
        </div>
        <div className="flex flex-col gap-[32px] text-[16px] font-[400] leading-[24px]">
          <p className="text-right text-[#1E1E1E]">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
            متخصصان را می طلبد.
          </p>
          <ul className="text-right text-[16px] px-8 space-y-3" dir="rtl">
            <li className="list-disc text-right">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است،{' '}
            </li>
            <li className="list-disc text-right">
              و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف
              بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد
              گذشته حال و آینده،{' '}
            </li>
            <li className="list-disc text-right">
              شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت
              بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ
              پیشرو در زبان فارسی ایجاد کرد،
            </li>
            <li className="list-disc text-right">
              در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه
              راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
              حروفچینی دستاوردهای اصلی، و{' '}
            </li>
            <li className="list-disc text-right">
              جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده
              قرار گیرد.
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default TermsConditions
