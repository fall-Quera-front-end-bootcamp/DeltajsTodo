import { dayOfWeek } from '../../constants'

const Week: React.FC = () => {
  return (
    <>
      {dayOfWeek.map((day, x) => {
        return (
          <div className="w-[60px] text-[20px] text-gray-primary" key={x}>
            {day}
          </div>
        )
      })}
    </>
  )
}

export default Week
