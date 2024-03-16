import Button from '../../../../../../../Common/Buttons/Button'
import LinkCopyIconSvg from '../../../../../../../Common/Icons/LinkCopyIconSvg'

const BoxFive = ({
  onChooseFileSecond,
  inputRefSecondUpload,
  handleOnChangeSecond,
  selectedCoverFile,
  removeFileSecond
}: {
  onChooseFileSecond: () => void
  inputRefSecondUpload: React.MutableRefObject<HTMLInputElement | null>
  handleOnChangeSecond: (event: React.ChangeEvent<HTMLInputElement>) => void
  selectedCoverFile: FormData | null
  removeFileSecond: () => void
}): JSX.Element => {
  return (
    <div className="flex flex-row items-center gap-5">
      <div className="">افزودن کاور</div>
      <Button onClickFunction={onChooseFileSecond} UploadButton>
        <LinkCopyIconSvg color="#208D8E" />
        آپلود فایل
        <input
          accept="image/*"
          type="file"
          ref={inputRefSecondUpload}
          onChange={handleOnChangeSecond}
          style={{ display: 'none' }}
        />
      </Button>
      {selectedCoverFile !== null && (
        <>
          <button
            onClick={removeFileSecond}
            className="rounded-[4px] border border-red-primary px-4"
          >
            حذف کردن فایل آپلود شده
          </button>
        </>
      )}
    </div>
  )
}

export default BoxFive
