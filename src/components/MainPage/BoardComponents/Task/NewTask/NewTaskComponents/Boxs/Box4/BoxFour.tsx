import Button from '../../../../../../../Common/Buttons/Button'
import LinkCopyIconSvg from '../../../../../../../Common/Icons/LinkCopyIconSvg'

const BoxFour = ({
  onChooseFileFirst,
  inputRefFirstUpload,
  handleOnChangeFirst,
  selectedAttachmentFile,
  removeFileFirst
}: {
  onChooseFileFirst: () => void
  inputRefFirstUpload: React.MutableRefObject<HTMLInputElement | null>
  handleOnChangeFirst: (event: React.ChangeEvent<HTMLInputElement>) => void
  selectedAttachmentFile: FormData | null
  removeFileFirst: () => void
}): JSX.Element => {
  return (
    <div className="flex flex-row items-center gap-5">
      <div className="">افزودن پیوست</div>
      <Button onClickFunction={onChooseFileFirst} UploadButton>
        <LinkCopyIconSvg color="#208D8E" />
        آپلود فایل
        <input
          accept="image/*"
          type="file"
          ref={inputRefFirstUpload}
          onChange={handleOnChangeFirst}
          style={{ display: 'none' }}
        />
      </Button>
      {selectedAttachmentFile !== null && (
        <>
          <button
            onClick={removeFileFirst}
            className="rounded-[4px] border border-red-primary px-4"
          >
            حذف کردن فایل آپلود شده
          </button>
        </>
      )}
    </div>
  )
}

export default BoxFour
