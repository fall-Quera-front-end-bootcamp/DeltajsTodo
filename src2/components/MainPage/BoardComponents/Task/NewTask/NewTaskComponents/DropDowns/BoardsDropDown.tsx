/* eslint-disable multiline-ternary */
import { type Ref, useRef, useState } from 'react'
import { BiChevronDown } from 'react-icons/bi'
import { type Board } from '../../../../../../../utilities/models'

const BoardsDropDown = ({
  boards,
  placeHolderText,
  className,
  setSelected,
  selected
}: {
  boards?: [] | undefined
  placeHolderText?: string
  className?: string
  inputCN?: string
  ref?: Ref<HTMLDivElement>
  setSelected?: ((selected: number) => void) | undefined
  selected?: number | undefined
}): JSX.Element => {
  const [open, setOpen] = useState(false)
  const [name, setName] = useState('')

  const boardDropDownRef = useRef<HTMLDivElement | null>(null)

  return (
    <div ref={boardDropDownRef} className={`relative ${className}`}>
      <div
        onClick={() => {
          setOpen(!open)
        }}
        className={`flex w-full items-center justify-between rounded-2xl p-2 ${
          !(name !== '') && 'text-gray-primary'
        }`}
      >
        {name !== '' ? (
          name
        ) : (
          <div className=" flex items-center px-2">{placeHolderText}</div>
        )}
        <BiChevronDown size={20} className={`${open && 'rotate-180'}`} />
      </div>

      <ul
        className={`absolute left-0 top-[31px] mt-2 overflow-y-auto ${open ? 'max-h-60 w-full cursor-pointer bg-white shadow-[0_3px_4px_0] shadow-[#00000033]' : 'max-h-0'} scrollbar-thin`}
      >
        <li
          className={'w-full p-2 text-bodys hover:bg-brand-secondary'}
          onClick={() => {
            setSelected?.(0)
            setOpen(false)
            setName('')
          }}
        >
          هیچ کدام
        </li>
        {boards?.map((board: Board) => (
          <li
            dir="ltr"
            key={board?.id}
            className={`w-full p-2 text-bodys hover:bg-brand-secondary  ${board?.id !== 0 ? 'block' : 'hidden'}`}
            onClick={() => {
              setSelected?.(board?.id)
              setOpen(false)
              setName(board?.name)
            }}
          >
            {board?.name}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default BoardsDropDown
