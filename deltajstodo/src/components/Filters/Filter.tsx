import { useState } from 'react';
//import DisabledIconSvg from '../Icons/DisabledIconSvg' Not figma styles
import RemoveIconSvg from '../Icons/RemoveIconSvg'
import FilterIsOrNot from './SearchItem/FilterIsOrNot'
import FilterTags from './SearchItem/FilterTags'
import FilterWhere from './SearchItem/FilterWhere'

const Filter = (): JSX.Element => {
  const [filters, setFilters] = useState<string[]>([]);

  const addFilter = () => {
    setFilters(prevFilters => [...prevFilters, `filter_${prevFilters.length + 1}`]);
  };

const removeFilter = (id: string) => {
  setFilters((prevFilters) => prevFilters.filter((filter) => filter !== id));
}
  return (
    <section className="w-[718px] rounded-[8px] bg-white shadow-2xl items-center justify-center">
      <div id="body-filter" className="flex flex-col">
        <div className="flex justify-between p-6">
          <div className="w-[24px] h-[24px]">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 8L16 16"
                stroke="#323232"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16 8L8 16"
                stroke="#323232"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <p className="font-extrabold text-headings text-center">فیلترها</p>
        </div>
        {/* -------------------------------------------------- */}
        <div className="flex flex-col p-6">
          {filters.map((filter, index) => (
            <div key={filter} className="flex justify-between">
              <RemoveIconSvg
                onClick={ ()=> removeFilter(filter)}
                className="cursor-pointer"
              />
              <div className="flex items-center">
                <FilterIsOrNot />
                <FilterTags />
                <p className="text-bodys font-normal text-center space-x-2">
                  تسک‌هایی که
                </p>
                <FilterWhere />
                <p className="text-bodys font-normal text-center space-x-2">
                  آن‌ها
                </p>
              </div>
            </div>
          ))}
          <div className="flex justify-end py-2">
            <button
              className="font-extrabold text-bodyxs text-center text-brand-primary"
              onClick={addFilter}
            >
              افزودن فیلتر جدید
            </button>
          </div>
        </div>
        {/* -------------------------------------- */}
      </div>
    </section>
  )
}

export default Filter
