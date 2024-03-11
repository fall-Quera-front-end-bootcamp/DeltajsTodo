import '../../../../dist/output.css'
import AddIconSvg from '../../../Common/Icons/AddIconSvg'
import EditIconSvg from '../../../Common/Icons/EditIconSvg'
import LinkCopyIconSvg from '../../../Common/Icons/LinkCopyIconSvg'
import RemoveIconSvg from '../../../Common/Icons/RemoveIconSvg'

interface TaskMoreOptionProps {
  color: string
  text: string
  type: string
  workspaceID: number
  projectID: number
  onClickHandler?: () => any
}

function TaskMoreOption({
  color,
  text,
  type,
  workspaceID,
  projectID,
  onClickHandler = () => {}
}: TaskMoreOptionProps): JSX.Element {
  function iconChoose(): JSX.Element {
    switch (type) {
      case 'addTask':
        return <EditIconSvg />
      case 'editProjectName':
        return <AddIconSvg />
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
      <span className={`  text-[14px] font-normal ${color} leading-[19.73px]`}>
        <button onClick={onClickHandler}>{text}</button>
      </span>
    </div>
  )
}

export default TaskMoreOption
