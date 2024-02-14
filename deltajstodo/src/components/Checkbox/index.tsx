/* eslint-disable tailwindcss/no-custom-classname */
const Checkbox = (): JSX.Element => {
  return (
    <div className="relative mt-1">
      <input
        className="bg-white focus:ring-blue-100 disabled:border-steel-400 disabled:bg-steel-400
    peer relative size-4 shrink-0 cursor-pointer appearance-none
    rounded-[4px] border-[1px]
    border-gray-primary
    bg-none checked:border-brand-primary checked:bg-brand-secondary"
        type="checkbox"
      />
      <svg
        className="pointer-events-none absolute left-[4px] top-[4px] opacity-0 transition-opacity peer-checked:opacity-100"
        width="9"
        height="7"
        viewBox="0 0 12 9"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 5.79297L3 7.79297"
          stroke="#208D8E"
          strokeLinecap="square"
        />
        <path d="M10.5 1L3.5 8.29297" stroke="#208D8E" strokeLinecap="square" />
      </svg>
    </div>
  )
}

export default Checkbox
