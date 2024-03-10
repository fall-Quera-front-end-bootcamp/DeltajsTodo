interface TagProps {
  taskTags: []
}

const Tag = ({ taskTags }: TagProps): JSX.Element => {
  return (
    <div className="">
      {taskTags.map((t) => {
        return <div key={} className=""></div>
      })}
    </div>
  )
}

export default Tag
