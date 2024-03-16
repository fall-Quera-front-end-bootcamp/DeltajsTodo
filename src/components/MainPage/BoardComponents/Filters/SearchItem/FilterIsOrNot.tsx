const FilterIsOrNot = (): JSX.Element => {
  return (
    <form>
      <select
        name="is_or_not"
        id="is_or_not"
        className="shadow-2xl gap-[11px] py-[6px] px-[8px] rounded-[8px] text-right font-normal text-bodyxs"
      >
        <option selected value="is" className="">
          است
        </option>
        <option value="not" className="">نیست</option>
      </select>
    </form>
  )
}

export default FilterIsOrNot