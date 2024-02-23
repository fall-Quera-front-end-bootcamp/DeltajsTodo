// import SearchIconSvg from "../../Icons/SearchIconSvg"

const FilterWhere = (): JSX.Element => {
  return (
    <form>
      {/* <div className="flex items-center">
        <input
          type="text"
          className="placeholder:block rounded-[4px] bg-[#F6F7F9] px-10 py-4 ps-10 text-right text-[#1E1E1E] placeholder:pr-2  placeholder:text-bodyxs placeholder:font-normal"
          placeholder="جستجو کنید"
        />
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 ps-3">
            <SearchIconSvg />
          </div>
        </div>
      </div> */}
      <select
        name="where"
        id="where"
        className="shadow-2xl gap-[11px] py-[6px] px-[8px] rounded-[8px] text-right font-normal text-bodyxs"
      >
        <option selected className="">
          جستجو بین فیلتر‌ها
        </option>
        <option value="">تاریخ</option>
        <option value="">تگ</option>
        <option value="">اعضا</option>
        <option value="">اولویت</option>
      </select>
    </form>
  )
}

export default FilterWhere