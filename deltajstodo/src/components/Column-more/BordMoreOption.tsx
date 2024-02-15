import '../../dist/output.css'
import AddIconSvg from '../Svg/AddIconSvg'
import ArchiveIconSvg from '../Svg/ArchiveIconSvg'
import EditIconSvg from '../Svg/EditIconSvg'
import RemoveIconSvg from '../Svg/RemoveIconSvg'

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
  function iconChoose() {
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
    <div className="flex gap-2 items-center w-[142px]">
      {iconChoose()}
      <span
        className={`font-yekan font-normal text-[14px] ${color} leading-[19.73px]`}
      >
        {text}
      </span>
    </div>
  )
}

export default BordMoreOption
