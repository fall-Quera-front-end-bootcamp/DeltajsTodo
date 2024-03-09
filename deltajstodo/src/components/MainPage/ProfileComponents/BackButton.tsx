import { Link } from 'react-router-dom'
import ArrowIconSvg from '../../Common/Icons/ArrowIconSvg'

const BackButton = (): JSX.Element => {
  return (
    <Link to={'/workspace'}>
      <button className="mt-[85px] flex items-center gap-2 rounded-lg bg-brand-primary px-[8px] py-[4px] text-white">
        <ArrowIconSvg className="size-[24px]" />
        <span className="text-[20px] font-medium leading-[28.18px]">
          بازگشت
        </span>
      </button>
    </Link>
  )
}

export default BackButton
