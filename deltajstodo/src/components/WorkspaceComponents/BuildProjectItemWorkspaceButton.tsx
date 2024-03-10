import { hexColors } from '../../constants'
import getKeyByValue from '../../utilities/getKeyByValue'
import { type Workspace } from '../../utilities/models'
import AddSecondaryIconSvg from '../Common/Icons/AddSecondaryIconSvg'

interface BuildProjectItemWorkspaceButtonProps {
  workspace: Workspace
}

const BuildProjectItemWorkspaceButton = ({
  workspace
}: BuildProjectItemWorkspaceButtonProps): JSX.Element => {
  const bgColor = 'bg-' + getKeyByValue(hexColors, workspace?.color)
  return (
    <button
      className={`h-20 w-[200px] ${bgColor} flex flex-row items-center justify-center rounded-2xl border-4`}
    >
      <h3 className="text-boldm">ساختن پروژه جدید</h3>
      <AddSecondaryIconSvg />
    </button>
  )
}

export default BuildProjectItemWorkspaceButton
