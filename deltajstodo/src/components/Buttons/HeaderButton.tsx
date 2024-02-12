import '../../dist/output.css'
import { NavLink } from 'react-router-dom'

function HeaderButton({
  text,
  src,
}: {
  text: string
  src: string
}): JSX.Element {
  return (
    <button
      className={
        'bg-brand-primary text-[white] font-yekan font-extrabold text-[14px] leading-[19.73px] rounded-[6px] p-[10px] w-[95px] h-[40px] mr-[6px]'
      }
    >
      <NavLink to={src}>{text}</NavLink>
    </button>
  )
}

export default HeaderButton
