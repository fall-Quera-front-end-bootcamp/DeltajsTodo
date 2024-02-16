import '../../dist/output.css'
import AddIconSvg from '../Svg/AddIconSvg'
import ColorPaletteIconSvg from '../Svg/ColorPaletteIconSvg'
import EditIconSvg from '../Svg/EditIconSvg'
import LinkCopyIconSvg from '../Svg/LinkCopyIconSvg'
import RemoveIconSvg from '../Svg/RemoveIconSvg'

interface ProjectMoreOptionProps {
  color: string
  text: string
  type: string
}

function ProjectMoreOption ({
  color,
  text,
  type
}: ProjectMoreOptionProps): JSX.Element {
  function iconChoose (): JSX.Element {
    switch (type) {
      case 'addProject':
        return <EditIconSvg />
      case 'editWordkSpace':
        return <AddIconSvg />
      case 'editColor':
        return <ColorPaletteIconSvg />
      case 'linkCopy':
        return <LinkCopyIconSvg />
      case 'remove':
        return <RemoveIconSvg />
      default:
        return <div>helo</div>
    }
  }
  return (
    <div className="flex items-center gap-2">
      {iconChoose()}
      <span
        className={`font-yekan text-[14px] font-normal ${color} leading-[19.73px]`}
      >
        {text}
      </span>
    </div>
  )
}

export default ProjectMoreOption
