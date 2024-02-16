import '../../dist/output.css'

interface TermProps {
  onClickFunction: any
}

const TermsConditions = ({ onClickFunction }: TermProps): JSX.Element => {
  return (
    <div className="absolute left-[50%] top-[50%] flex h-screen w-full translate-x-[-50%] translate-y-[-50%] flex-col items-center justify-center">
      <div className="relative flex w-[800px] flex-col items-center justify-center gap-[32px] rounded-[20px] bg-white p-6 px-[24px] pb-[32px] pt-[24px] ">
        <div className=" flex w-full flex-row-reverse items-center justify-center">
          <svg
            onClick={onClickFunction}
            className="absolute left-[16px] top-[16px] cursor-pointer"
            width="32"
            height="33"
            viewBox="0 0 32 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.6666 11.1666L21.3333 21.8333"
              stroke="#323232"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M21.3333 11.1666L10.6666 21.8333"
              stroke="#323232"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <h1 className="text-right text-headingl font-[800] leading-[45px] text-[#1E1E1E]">
            قوانین و مقررات
          </h1>
        </div>
        <div className="flex flex-col gap-8 text-justify text-[20px] font-thin">
          <p className="text-right leading-[24px] text-[#1E1E1E] ">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
            متخصصان را می طلبد.
          </p>

          <ul className="mr-7 flex list-disc  flex-col gap-8 text-right">
            <li className="">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است،{' '}
            </li>
            <li className="">
              و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف
              بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد
              گذشته حال و آینده،{' '}
            </li>
            <li className="">
              شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت
              بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ
              پیشرو در زبان فارسی ایجاد کرد،
            </li>
            <li className="">
              در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه
              راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
              حروفچینی دستاوردهای اصلی، و{' '}
            </li>
            <li className="">
              جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده
              قرار گیرد.
            </li>
          </ul>
        </div>
      </div>{' '}
      <div className="absolute -z-10 h-screen w-full bg-gray-dark/70 backdrop-blur-md"></div>
    </div>
  )
}

export default TermsConditions
