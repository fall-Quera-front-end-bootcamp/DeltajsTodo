import '../../dist/output.css'
import CommentCard from './CommentCard'
function BottomLeftSide(): JSX.Element {
  return (
    <div className="flex flex-col gap-3 overflow-y-scroll no-scrollbar pb-3">
      <CommentCard />
    </div>
  )
}

export default BottomLeftSide
