import { useContext } from 'react'
import FilterSettingIconSvg from '../../../../Common/Icons/FilterIconSvg'
import SearchIconSvg from '../../../../Common/Icons/SearchIconSvg'
import LayoutBar from '../LayoutBar'
import VerticalLine from '../TopBar/LineComponents/VerticalLine'
import { localPageDispatchContext } from '../../../../../contexts/LocalPageContextProvider'
import ReArchiveButton from './ReArchiveButton'

const FilterBar = ({ WID, PID }: { WID: number, PID: number }): JSX.Element => {
  const handleSearch = (): void => {}
  const localPageDispatch: any = useContext(localPageDispatchContext)
  return (
    <LayoutBar>
      <div
        dir="rtl"
        className="flex w-full flex-row items-center justify-center"
      >
        <div className="group relative flex flex-row items-center">
          <button onClick={handleSearch} className="">
            <SearchIconSvg />
          </button>
          <input
            dir="rtl"
            type="text"
            name=""
            id=""
            className="ml-2 w-[240px] px-2 py-1 outline-gray-secondary dark:bg-gray-primary dark:placeholder:text-white"
            placeholder="جستجو بین تسک‌ها"
          />
          <p className="absolute left-[11px] top-[45px] z-[1000] rounded-full bg-gray-dark p-3 text-[12px] text-white  opacity-0 transition-all duration-300 group-hover:opacity-100 dark:bg-gray-secondary dark:text-black">
            برای جستجو اینتر بزنید یا آیکون سرچ را کلیک کنید
          </p>
          <span className="absolute left-[140px] top-[37px] size-0   border-x-[6px] border-b-[8px] border-x-transparent border-b-gray-dark opacity-0 transition-all duration-300 group-hover:opacity-100 dark:bg-gray-secondary"></span>
        </div>
        <VerticalLine />
        <div className="flex w-full flex-row justify-between">
          <button
            onClick={() => {
              localPageDispatch({ type: 'openFilter' })
            }}
            className="mr-4 flex flex-row gap-2"
          >
            <FilterSettingIconSvg className="mr-4" />
            <p className="">فیلتر</p>
          </button>
          <ReArchiveButton WID={WID} PID={PID} />
        </div>
      </div>
    </LayoutBar>
  )
}

export default FilterBar
