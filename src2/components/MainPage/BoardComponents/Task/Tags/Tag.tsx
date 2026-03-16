import { type Tag as TagType } from '../../../../../utilities/models'

interface TagProps {
  taskTags: []
}

const Tag = ({ taskTags }: TagProps): JSX.Element => {
  return (
    <div className="">
      {taskTags.map((t: TagType) => {
        return (
          <div key={t.id} className="">
            {t.name}
          </div>
        )
      })}
    </div>
  )
}

export default Tag
