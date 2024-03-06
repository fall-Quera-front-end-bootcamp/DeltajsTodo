import { useState } from 'react'
import SearchIconSvg from '../../Icons/SearchIconSvg'

const FilterWhere = (): JSX.Element => {
  const [isFocused, setIsFocused] = useState(false)
  const [selectedValue, setSelectedValue] = useState('')

  const handleFocus = () => {
    setIsFocused(true)
  }

  const handleBlur = () => {
    setIsFocused(false)
  }
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value)
  }
  return (
    <form>
      <div className="flex items-center flex-col">
        <div className="flex items-center">
          <input
            type="text"
            className="w-[182px] rounded-[4px] bg-[#ffff] px-10 py-4 ps-10 text-right text-[#959595] placeholder:pr-2  placeholder:text-bodyxs placeholder:font-normal"
            placeholder="جستجو بین فیلتر‌ها"
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 ps-3">
              <SearchIconSvg className="" />
            </div>
          </div>
        </div>
        {isFocused && (
          <ul
            name="where"
            id="where"
            className=" shadow-md w-[182px] gap-[16px] py-[6px] px-[8px] rounded-[8px] text-right font-normal text-bodyxs"
          >
            <li className="font-normal text-bodyxs text-right p-2">
              جستجو بین فیلتر‌ها
            </li>
            <li className="font-normal text-bodyxs text-right p-2 text-[#2B2E33]">تاریخ</li>
            <li className="font-normal text-bodyxs text-right p-2 text-[#2B2E33]">تگ</li>
            <li className="font-normal text-bodyxs text-right p-2 text-[#2B2E33]">اعضا</li>
            <li className="font-normal text-bodyxs text-right p-2 text-[#2B2E33]">اولویت</li>
          </ul>
        )}
      </div>
    </form>
  )
}

export default FilterWhere
