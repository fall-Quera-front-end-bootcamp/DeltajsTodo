import { type Dispatch, type SetStateAction, useRef } from 'react'
import '../../../dist/output.css'
import { motion } from 'framer-motion'
import Close from '../Icons/Close'
import { useOnClickOutside } from 'usehooks-ts'

interface TermProps {
  onClickFunction: Dispatch<SetStateAction<boolean>>
  className?: string
}

const TermsConditions = ({
  onClickFunction,
  className
}: TermProps): JSX.Element => {
  // Click OutSide
  const wrapperRef = useRef(null)
  const handleClickOutside = (): void => {
    onClickFunction(false)
  }
  useOnClickOutside(wrapperRef, handleClickOutside)
  return (
    <motion.div
      dir="rtl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      ref={wrapperRef}
      className={`absolute right-1/2 top-1/2 z-50 flex -translate-y-1/2 translate-x-1/2 ${className}`}
    >
      <div className="relative m-auto flex w-[800px] flex-col items-center justify-center gap-[32px] rounded-[20px] bg-white p-6 px-[24px] pb-[32px] pt-[24px]">
        <div className=" flex w-full flex-row-reverse items-center justify-center">
          <Close
            onClickFunction={handleClickOutside}
            className="absolute left-[16px] top-[16px] size-10 cursor-pointer"
          />
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
      </div>
    </motion.div>
  )
}

export default TermsConditions
