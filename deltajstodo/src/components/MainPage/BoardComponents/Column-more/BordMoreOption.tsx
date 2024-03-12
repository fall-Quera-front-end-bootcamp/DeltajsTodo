/* eslint-disable @typescript-eslint/space-before-function-paren */
import '../../../../dist/output.css'
import AddIconSvg from '../../../Common/Icons/AddIconSvg'
import ArchiveIconSvg from '../../../Common/Icons/ArchiveIconSvg'
import EditIconSvg from '../../../Common/Icons/EditIconSvg'
import RemoveIconSvg from '../../../Common/Icons/RemoveIconSvg'

interface BordMoreOptionProps {
  color: string
  text: string
  type: string
  onClickFunc?: () => void
}

function BordMoreOption({
  color,
  text,
  type,
  onClickFunc
}: BordMoreOptionProps): JSX.Element {
  function iconChoose(): JSX.Element | undefined {
    switch (type) {
      case 'edit':
        return <EditIconSvg />
      case 'add':
        return <AddIconSvg />
      case 'archive':
        return <ArchiveIconSvg />
      case 'remove':
        return <RemoveIconSvg />
    }
  }
  return (
    <div className="flex w-[142px] items-center gap-2">
      {iconChoose()}
      <span className={`  text-[14px] font-normal ${color} leading-[19.73px]`}>
        <button onClick={onClickFunc}> {text}</button>
      </span>
    </div>
  )
}

export default BordMoreOption
