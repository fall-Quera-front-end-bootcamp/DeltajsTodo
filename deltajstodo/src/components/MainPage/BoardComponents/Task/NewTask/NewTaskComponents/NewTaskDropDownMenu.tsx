/* eslint-disable multiline-ternary */
import { useState } from 'react'
import { BiChevronDown } from 'react-icons/bi'
import { type Project } from '../../../../../../utilities/models'
import { AiOutlineSearch } from 'react-icons/ai'

const NewTaskDropDownMenu = ({
  projects,
  placeHolderText
}: {
  projects: []
  placeHolderText: string
}): JSX.Element => {
  const [inputValue, setInputValue] = useState('')
  const [selected, setSelected] = useState('')
  const [open, setOpen] = useState(false)

  return (
    <div className="absolute right-[350px] top-0 rounded-2xl font-medium">
      <div
        onClick={() => {
          setOpen(!open)
        }}
        className={`flex w-full items-center justify-between rounded-2xl p-2 ${
          !(selected !== '') && 'text-gray-primary'
        }`}
      >
        {selected !== '' ? (
          selected?.length > 25 ? (
            selected?.substring(0, 25) + '...'
          ) : (
            selected
          )
        ) : (
          <div className=" flex items-center px-2">
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
        )}
        <BiChevronDown size={20} className={`${open && 'rotate-180'}`} />
      </div>

      <ul className={`mt-2 overflow-y-auto ${open ? 'max-h-60' : 'max-h-0'} `}>
        {projects?.map((project: Project) => (
          <li
            dir="ltr"
            key={project?.id}
            className={`p-2 text-bodys hover:bg-blue-secondary hover:text-white
            ${
              project?.name?.toLowerCase() === selected?.toLowerCase() &&
              'bg-blue-secondary text-white'
            }
            ${
              project?.name?.toLowerCase().startsWith(inputValue)
                ? 'block'
                : 'hidden'
            }`}
            onClick={() => {
              if (project?.name?.toLowerCase() !== selected.toLowerCase()) {
                setSelected(project?.name)
                setOpen(false)
                setInputValue('')
              }
            }}
          >
            {project?.name}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default NewTaskDropDownMenu
