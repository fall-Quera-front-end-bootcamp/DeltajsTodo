import SearchIconSvg from '../../../../Common/Icons/SearchIconSvg'
import LayoutBar from '../LayoutBar'
import VerticalLine from '../TopBar/LineComponents/VerticalLine'

const FilterBar = (): JSX.Element => {
  const handleSearch = (): void => {}
  return (
    <LayoutBar>
      <div
        dir="rtl"
        className="flex w-full flex-row items-center justify-start"
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
            className="ml-2 w-[240px] px-2 py-1 outline-gray-secondary"
            placeholder="جستجو بین تسک‌ها"
          />
          <p className="absolute left-[11px] top-[45px] rounded-full bg-gray-dark p-3 text-[12px]  text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
            برای جستجو اینتر بزنید یا آیکون سرچ را کلیک کنید
          </p>
          <span className="absolute left-[140px] top-[37px] size-0 border-x-[6px] border-b-[8px] border-x-transparent border-b-gray-dark opacity-0 transition-all duration-300 group-hover:opacity-100"></span>
        </div>
        <VerticalLine />
      </div>
    </LayoutBar>
  )
}

export default FilterBar
