import { type Workspace } from '../../../utilities/models'
import AddSecondaryIconSvg from '../../Common/Icons/AddSecondaryIconSvg'

interface BuildProjectItemWorkspaceButtonProps {
  workspace: Workspace
  onClick: () => void
}

const BuildProjectItemWorkspaceButton = ({
  workspace,
  onClick
}: BuildProjectItemWorkspaceButtonProps): JSX.Element => {
  return (
    <button
      className="flex flex-col items-center justify-center"
      style={{
        borderRadius: '16px',
        border: `4px solid ${workspace?.color}`,
        boxShadow: '0px 3px 4px 0px #00000033',
        height: '80px',
        width: '200px',
        color: `${workspace?.color}`
      }}
      onClick={onClick}
    >
      <div className="flex h-20 w-[200px] flex-row items-center justify-center gap-2">
        <h3 className="text-boldm">ساختن پروژه جدید</h3>
        <AddSecondaryIconSvg color={workspace?.color} />
      </div>
    </button>
  )
}

export default BuildProjectItemWorkspaceButton
