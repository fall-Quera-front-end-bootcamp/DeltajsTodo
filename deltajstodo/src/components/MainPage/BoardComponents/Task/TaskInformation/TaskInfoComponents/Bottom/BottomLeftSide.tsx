import CommentCard from '../CommentCard'
function BottomLeftSide(): JSX.Element {
  return (
    <div className="flex flex-col gap-3 overflow-y-scroll pb-3 no-scrollbar">
      <CommentCard />
    </div>
  )
}

export default BottomLeftSide
