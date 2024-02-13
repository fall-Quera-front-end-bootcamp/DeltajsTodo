import '../../dist/output.css'
import cn from 'classnames'
import { findInputError, isFormInvalid } from '../../utilities'
import { useFormContext } from 'react-hook-form'
import { AnimatePresence, motion } from 'framer-motion'
import { MdError } from 'react-icons/md'

// interface InputProps {
//   name: string
//   type: string
// }

// // eslint-disable-next-line @typescript-eslint/space-before-function-paren
// function Input({ name, type }: InputProps): JSX.Element {
//   return (
//     <div dir="rtl">
//       <label
//         htmlFor=""
//         className="mb-2 block text-[14px] font-normal leading-[19.73px]"
//       >
//         {name}
//       </label>
//       <input
//         type={type}
//         className="w-[100%] rounded-[6px] border-[1px] border-solid border-gray-primary bg-[white] p-2"
//         required
//       />
//     </div>
//   )
// }

// export default Input

interface InputProps {
  label: string
  type: string
  id: string
  placeholder?: string
}

const Input = ({ label, type, id, placeholder }: InputProps): JSX.Element => {
  return (
    <div dir="rtl">
      <label
        htmlFor=""
        className="mb-2 block text-[14px] font-normal leading-[19.73px]"
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className="w-[100%] rounded-[6px] border-[1px] border-solid border-gray-primary bg-[white] p-2"
        required
      />
    </div>
  )
}

const InputError = () => {
  return (
    <div className="">
      <div className="">Error</div>
    </div>
  )
}

const FRAMER_ERROR = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 10 },
  transition: { duration: 0.2 }
}

export default Input
