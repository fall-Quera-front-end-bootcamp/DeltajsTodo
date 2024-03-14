import type React from 'react'
import BoxFour from './BoxFour'
import BoxFive from './BoxFive'

const BoxFourUpload = ({
  onChooseFileSecond,
  inputRefSecondUpload,
  handleOnChangeSecond,
  selectedCoverFile,
  removeFileSecond,
  onChooseFileFirst,
  inputRefFirstUpload,
  handleOnChangeFirst,
  selectedAttachmentFile,
  removeFileFirst
}: {
  onChooseFileSecond: () => void
  inputRefSecondUpload: React.MutableRefObject<HTMLInputElement | null>
  handleOnChangeSecond: (event: React.ChangeEvent<HTMLInputElement>) => void
  selectedCoverFile: FormData | null
  removeFileSecond: () => void
  onChooseFileFirst: () => void
  inputRefFirstUpload: React.MutableRefObject<HTMLInputElement | null>
  handleOnChangeFirst: (event: React.ChangeEvent<HTMLInputElement>) => void
  selectedAttachmentFile: FormData | null
  removeFileFirst: () => void
}): JSX.Element => {
  return (
    <>
      <BoxFour
        handleOnChangeFirst={handleOnChangeFirst}
        inputRefFirstUpload={inputRefFirstUpload}
        onChooseFileFirst={onChooseFileFirst}
        removeFileFirst={removeFileFirst}
        selectedAttachmentFile={selectedAttachmentFile}
      />
      <BoxFive
        handleOnChangeSecond={handleOnChangeSecond}
        inputRefSecondUpload={inputRefSecondUpload}
        onChooseFileSecond={onChooseFileSecond}
        removeFileSecond={removeFileSecond}
        selectedCoverFile={selectedCoverFile}
      />
    </>
  )
}

export default BoxFourUpload
