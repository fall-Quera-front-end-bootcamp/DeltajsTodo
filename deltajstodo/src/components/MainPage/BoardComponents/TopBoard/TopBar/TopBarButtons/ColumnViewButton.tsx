import { Views } from '../../../../../../utilities/models' 
import ColumnArtboardIconSvg from '../../../../../Common/Icons/ColumnArtboardIconSvg' 

const ColumnViewButton = ({
  handleView,
  view
}: {
  handleView: (e: any) => void
  view: Views
}): JSX.Element => {
  return (
    <>
      <button
        onClick={handleView}
        name="column"
        aria-label="column"
        className="relative my-[5px] flex flex-row justify-between gap-[5px]"
      >
        <p
          aria-label="column"
          className={`h-[23px] w-[98px] text-right font-yekan text-[16px] font-medium leading-[22.5px] text-[#1E1E1E] 
            ${view === Views.column && 'text-[#208D8E]'}`}
        >
          نمایش ستونی
        </p>
        <ColumnArtboardIconSvg
          arialabel="column"
          color={view === Views.column ? '#208D8E' : '#323232'}
        />
      </button>
    </>
  )
}

export default ColumnViewButton
