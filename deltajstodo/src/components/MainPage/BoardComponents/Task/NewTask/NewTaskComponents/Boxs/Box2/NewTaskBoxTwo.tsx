import DropdownMenu from '../../../../../DropDownMenu/DropdownMenu'
import { type Project } from '../../../../../../../../utilities/models'
import { motion } from 'framer-motion'
import ProfileAddUserIconSvg from '../../../../../../../Common/Icons/ProfileAddUserIconSvg'

const NewTaskBoxTwo = ({
  projects
}: {
  projects: [] | undefined
}): JSX.Element => {
  return (
    <div className="flex flex-row items-center gap-xs text-[16px] font-[500]">
      <p className="inline-block">در </p>
      <DropdownMenu buttonClassName="mr-[10px] inline-block w-[188px] rounded-md border border-[#E9EBF0] px-2 pb-[4px] pt-[5px] text-right">
        <motion.ul
          initial={{ opacity: 0, translate: 0 }}
          animate={{ opacity: 1, translateY: '5px' }}
          exit={{ opacity: 0, translateY: '-5px' }}
          className="absolute left-[-5px] top-[35px] flex w-full flex-col gap-2 rounded-md bg-gray-secondary"
        >
          {projects?.map((project: Project) => {
            return (
              <li
                key={project?.id}
                className="cursor-pointer p-1 hover:bg-gray-primary"
              >
                {project?.name}
              </li>
            )
          })}
        </motion.ul>
      </DropdownMenu>
      <p className="inline-block">برای</p>
      <div className="flex size-[34px] items-center justify-center rounded-full border border-dashed border-[#C1C1C1]">
        <ProfileAddUserIconSvg />
      </div>
    </div>
  )
}

export default NewTaskBoxTwo
