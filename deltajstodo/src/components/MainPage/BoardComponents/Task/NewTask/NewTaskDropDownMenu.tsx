import { useState } from 'react'
import { BiChevronDown } from 'react-icons/bi'
import { AiOutlineSearch } from 'react-icons/ai'
import { type Project } from '../../../../../utilities/models'

const NewTaskDropDownMenu = ({
  project,
  placeHolderText
}: {
  project: Project
  placeHolderText: string
}): JSX.Element => {
  const [inputValue, setInputValue] = useState('')
  const [selected, setSelected] = useState('')
  const [open, setOpen] = useState(false)

  return (
    <div className=" rounded-2xl font-medium">
      <div
        onClick={() => {
          setOpen(!open)
        }}
        className={`flex w-full items-center justify-between rounded-2xl p-2 ${
          !(selected !== '') && 'text-gray-primary'
        }`}
      >
        {selected !== ''
          ? selected?.length > 25
            ? selected?.substring(0, 25) + '...'
            : selected
          : placeHolderText}
        <BiChevronDown size={20} className={`${open && 'rotate-180'}`} />
      </div>
      <ul className={`mt-2 overflow-y-auto ${open ? 'max-h-60' : 'max-h-0'} `}>
        <div className="sticky top-0 flex items-center px-2">
          <AiOutlineSearch size={18} className="text-gray-primary" />
          <input
            type="text"
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value.toLowerCase())
            }}
            placeholder={`${placeHolderText} را وارد کنید`}
            className="p-2 outline-none placeholder:text-gray-primary"
          />
        </div>
        {project?.boards?.map((country) => (
          <li
            dir="ltr"
            key={country?.id}
            className={`p-2 text-bodys hover:bg-blue-secondary hover:text-white
            ${
              country?.title?.toLowerCase() === selected?.toLowerCase() &&
              'bg-blue-secondary text-white'
            }
            ${
              country?.title?.toLowerCase().startsWith(inputValue)
                ? 'block'
                : 'hidden'
            }`}
            onClick={() => {
              if (country?.title?.toLowerCase() !== selected.toLowerCase()) {
                setSelected(country?.title)
                setOpen(false)
                setInputValue('')
              }
            }}
          >
            {country?.title}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default NewTaskDropDownMenu
