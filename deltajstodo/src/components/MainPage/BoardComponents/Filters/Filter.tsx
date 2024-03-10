import { useState } from 'react'
import RemoveIconSvg from '../../../Common/Icons/RemoveIconSvg'
import FilterIsOrNot from './SearchItem/FilterIsOrNot'
import FilterTags from './SearchItem/FilterTags'
import FilterWhere from './SearchItem/FilterWhere'

const Filter = (): JSX.Element => {
  const [filters, setFilters] = useState<string[]>([])

  const addFilter = (): void => {
    setFilters((prevFilters) => [
      ...prevFilters,
      `filter_${prevFilters.length + 1}`
    ])
  }

  const removeFilter = (id: string): void => {
    setFilters((prevFilters) => prevFilters.filter((filter) => filter !== id))
  }
  return (
    <section className="w-[718px] items-center justify-center rounded-[8px] bg-white shadow-2xl">
      <div id="body-filter" className="flex flex-col">
        <div className="flex justify-between p-6">
          <div className="size-[24px]">
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
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16 8L8 16"
                stroke="#323232"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <p className="text-center text-headings font-extrabold">فیلترها</p>
        </div>
        {/* -------------------------------------------------- */}
        <div className="flex flex-col p-6">
          {filters.map((filter, index) => (
            <div key={filter} className="flex justify-between">
              <RemoveIconSvg
                onClick={() => { removeFilter(filter) }}
                className="cursor-pointer"
              />
              <div className="flex items-center">
                <FilterIsOrNot />
                <FilterTags />
                <p className="space-x-2 text-center text-bodys font-normal">
                  تسک‌هایی که
                </p>
                <FilterWhere />
                <p className="space-x-2 text-center text-bodys font-normal">
                  آن‌ها
                </p>
              </div>
            </div>
          ))}
          <div className="flex justify-end py-2">
            <button
              className="text-center text-bodyxs font-extrabold text-brand-primary"
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
