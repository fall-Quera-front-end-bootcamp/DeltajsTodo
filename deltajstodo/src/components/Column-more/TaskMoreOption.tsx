import '../../dist/output.css'
import AddIconSvg from '../Icons/AddIconSvg'
import EditIconSvg from '../Icons/EditIconSvg'
import LinkCopyIconSvg from '../Icons/LinkCopyIconSvg'
import RemoveIconSvg from '../Icons/RemoveIconSvg'

interface TaskMoreOptionProps {
  color: string
  text: string
  type: string
}

function TaskMoreOption({
  color,
  text,
  type
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
        {text}
      </span>
    </div>
  )
}

export default TaskMoreOption
