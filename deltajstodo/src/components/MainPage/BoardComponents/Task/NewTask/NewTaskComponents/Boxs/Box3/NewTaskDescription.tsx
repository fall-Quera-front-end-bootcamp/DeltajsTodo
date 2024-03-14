const NewTaskDescription = ({
  handleSetDesc
}: {
  handleSetDesc: (event: React.ChangeEvent<HTMLInputElement>) => void
}): JSX.Element => {
  return (
    <textarea
      onChange={handleSetDesc}
      name=""
      id=""
      placeholder="توضیحاتی برای این تسک بنویسید"
      className="h-[191px] max-h-[191px] min-h-[191px] w-full rounded-xl border border-[#E2E2E2] p-6 text-[16px]"
    ></textarea>
  )
}

export default NewTaskDescription
