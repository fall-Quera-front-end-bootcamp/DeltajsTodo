import { useContext, useRef, useState } from 'react'
import RemoveIconSvg from '../../../Common/Icons/RemoveIconSvg'
import FilterIsOrNot from './SearchItem/FilterIsOrNot'
import FilterTags from './SearchItem/FilterTags'
import FilterWhere from './SearchItem/FilterWhere'
import { localPageDispatchContext } from '../../../../contexts/LocalPageContextProvider'
import { useOnClickOutside } from 'usehooks-ts'
import Close from '../../../Common/Icons/Close'

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

  const localPageDispatch: any = useContext(localPageDispatchContext)

  // Click OutSide
  const bigDivRef = useRef(null)
  const handleClickOutside = (): void => {
    localPageDispatch({ type: 'closeModal' })
  }
  useOnClickOutside(bigDivRef, handleClickOutside)
  // Click OutSide

  return (
    <section
      ref={bigDivRef}
      className="absolute left-1/2 top-1/2 w-[718px]  -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[8px] bg-white shadow-2xl"
    >
      <div id="body-filter" className="flex flex-col">
        <div className="flex justify-between p-6">
          <button onClick={() => localPageDispatch({ type: 'closeModal' })}>
            <Close />
          </button>
          <p className="text-center text-headings font-extrabold">فیلترها</p>
        </div>
        {/* -------------------------------------------------- */}
        <div className="flex flex-col p-6">
          {filters.map((filter, index) => (
            <div key={filter} className="flex justify-between">
              <RemoveIconSvg
                onClick={() => {
                  removeFilter(filter)
                }}
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
