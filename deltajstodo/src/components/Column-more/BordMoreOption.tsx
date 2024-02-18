import '../../dist/output.css'
import AddIconSvg from '../Icons/AddIconSvg'
import ArchiveIconSvg from '../Icons/ArchiveIconSvg'
import EditIconSvg from '../Icons/EditIconSvg'
import RemoveIconSvg from '../Icons/RemoveIconSvg'

interface BordMoreOptionProps {
  color: string
  text: string
  type: string
}

function BordMoreOption({
  color,
  text,
  type
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
      <span
        className={`font-yekan text-[14px] font-normal ${color} leading-[19.73px]`}
      >
        {text}
      </span>
    </div>
  )
}

export default BordMoreOption
