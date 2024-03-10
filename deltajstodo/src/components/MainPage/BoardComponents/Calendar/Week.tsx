import { dayOfWeek } from '../../../../constants'

const Week = ({ className }: { className?: string }): JSX.Element => {
  return (
    <>
      {dayOfWeek.map((day, x) => {
        return (
          <div className={`text-[20px] ${className}`} key={x}>
            {day}
          </div>
        )
      })}
    </>
  )
}

export default Week
