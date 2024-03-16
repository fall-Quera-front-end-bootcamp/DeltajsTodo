import { AnimatePresence, motion } from 'framer-motion'
import { findInputError, isFormInvalid } from '../../../../utilities'
import { useFormContext } from 'react-hook-form'
import { MdError } from 'react-icons/md'

/* eslint-disable tailwindcss/no-custom-classname */
const Checkbox = (): JSX.Element => {
  const {
    register,
    formState: { errors }
  } = useFormContext()

  const { name, validation } = {
    name: 'checkbox',
    validation: {
      required: {
        value: true,
        message: 'لطفا فوانین و مقررات سایت را تایید بکنید'
      }
    }
  }

  const inputError = findInputError(errors, name)
  const isInvalid = isFormInvalid(inputError)
  return (
    <div className="relative mt-1">
      <input
        className="focus:ring-blue-100 disabled:border-steel-400 disabled:bg-steel-400 peer relative size-4 shrink-0 cursor-pointer appearance-none rounded-[4px] border-[1px] border-gray-primary bg-white bg-none checked:border-brand-primary checked:bg-brand-secondary"
        type="checkbox"
        required
        {...register(name, validation)}
      />
      <svg
        className="pointer-events-none absolute left-[4px] top-[4px] opacity-0 transition-opacity peer-checked:opacity-100"
        width="9"
        height="7"
        viewBox="0 0 12 9"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 5.79297L3 7.79297"
          stroke="#208D8E"
          strokeLinecap="square"
        />
        <path d="M10.5 1L3.5 8.29297" stroke="#208D8E" strokeLinecap="square" />
      </svg>
      <AnimatePresence mode="wait" initial={false}>
        {isInvalid && (
          <InputError
            message={inputError.error.message}
            key={inputError.error.message}
          />
        )}
      </AnimatePresence>
    </div>
  )
}

export default Checkbox

interface InputErrorProps {
  message: string
}

const InputError = ({ message }: InputErrorProps): JSX.Element => {
  return (
    <motion.p
      className="absolute -right-[20px] top-5 flex w-[300px] items-center gap-1 rounded-md bg-red-secondary px-2 font-semibold text-red-primary"
      {...FRAMER_ERROR}
    >
      <MdError />
      {message}
    </motion.p>
  )
}

const FRAMER_ERROR = {
  initial: { opacity: 0, x: -10, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 10 },
  transition: { duration: 0.2 }
}
