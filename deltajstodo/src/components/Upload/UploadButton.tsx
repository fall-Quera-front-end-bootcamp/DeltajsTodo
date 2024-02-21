import LinkCopyIconSvg from '../Icons/LinkCopyIconSvg'

const UploadButton = ({ className }: { className?: string }): JSX.Element => {
  return (
    <button
      onClick={() => {}}
      className="mr-4 flex w-24 cursor-pointer items-center justify-center rounded-md border border-brand-primary text-center text-[16px]"
    >
      <LinkCopyIconSvg />
      آپلود فایل
    </button>
  )
}

export default UploadButton
