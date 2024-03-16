import moment from 'jalali-moment'
import ArrowDownIconSvg from '../../../../Common/Icons/ArrowDownIconSvg'
import { toFarsiNumber } from '../../../../../utilities/toFarsiNumber'

interface CalendarNextPrevProps {
  date: string
  onClickPrevious?: () => void
  onClickNext?: () => void
}

const CalendarNextPrev = ({
  date,
  onClickPrevious,
  onClickNext
}: CalendarNextPrevProps): JSX.Element => {
  return (
    <div className="absolute left-[390px] top-[100px] flex flex-row items-center justify-center gap-5 text-[24px]">
      <div className="">
        {' '}
        {`${moment(date).format('MMM')} ${toFarsiNumber(`${moment(date).format('YYYY')}`)}`}
      </div>
      <div className="flex flex-row">
        <button onClick={onClickPrevious}>
          <ArrowDownIconSvg className="-rotate-90" color="#7D828C" />
        </button>
        <button onClick={onClickNext}>
          <ArrowDownIconSvg className="rotate-90" color="#7D828C" />
        </button>
      </div>
      <div className="">امروز</div>
    </div>
  )
}

export default CalendarNextPrev
