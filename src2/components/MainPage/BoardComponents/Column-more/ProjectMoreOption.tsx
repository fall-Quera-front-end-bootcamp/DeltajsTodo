/* eslint-disable @typescript-eslint/space-before-function-paren */
/* eslint-disable @typescript-eslint/no-confusing-void-expression */
import '../../../../dist/output.css'

import AddIconSvg from '../../../Common/Icons/AddIconSvg'
import ColorPaletteIconSvg from '../../../Common/Icons/ColorPaletteIconSvg'
import EditIconSvg from '../../../Common/Icons/EditIconSvg'
import LinkCopyIconSvg from '../../../Common/Icons/LinkCopyIconSvg'
import RemoveIconSvg from '../../../Common/Icons/RemoveIconSvg'

interface ProjectMoreOptionProps {
  color: string
  text: string
  type: string
  workspaceID: number
  onClickHandler?: (id: number) => any
}

function ProjectMoreOption({
  color,
  text,
  type,
  workspaceID,
  onClickHandler = () => {}
}: ProjectMoreOptionProps): JSX.Element {
  function iconChoose(): JSX.Element {
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
    <button
      onClick={() => {
        onClickHandler(workspaceID)
      }}
      className="flex w-full gap-2 hover:bg-gray-secondary py-2 rounded-lg transition-all duration-300"
    >
      {iconChoose()}
      <p
        className={` w-full text-right text-[14px] font-normal ${color} leading-[19.73px]`}
      >
        {text}
      </p>
    </button>
  )
}

export default ProjectMoreOption
