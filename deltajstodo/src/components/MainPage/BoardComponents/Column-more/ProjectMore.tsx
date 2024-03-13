/* eslint-disable @typescript-eslint/space-before-function-paren */
/* eslint-disable object-shorthand */
import '../../../../dist/output.css'

import ShareButton from '../../../Common/Buttons/ShareButton'
import ProjectMoreOption from './ProjectMoreOption'
import { useContext } from 'react'
import { localPageDispatchContext } from '../../../../contexts/LocalPageContextProvider'

interface ProjectMoreProps {
  id: number
}
function ProjectMore({ id }: ProjectMoreProps): JSX.Element {
  const localPageDispatch: any = useContext(localPageDispatchContext)

  return (
    <div
      dir="rtl"
      className="flex w-[193px] flex-col gap-4 rounded-lg bg-[white] p-3 shadow-[0px_2px_4px_0px_#00000066,0px_7px_6px_-3px_#0000004D,0px_-3px_0px_0px_#00000033_inset] z-50"
    >
      <ProjectMoreOption
        workspaceID={id}
        color="text-[black]"
        text="ساختن پروژه جدید"
        type="addProject"
        onClickHandler={() =>
          localPageDispatch({ type: 'openNewProject', WID: id })
        }
      />
      <ProjectMoreOption
        workspaceID={id}
        color="text-[black]"
        text="ویرایش نام ورک‌اسپیس"
        type="editWordkSpace"
        onClickHandler={
          () => localPageDispatch({ type: 'openNewWorkspaceTitle', WID: id })
          // dispatch({
          //   type: 'changeWorkspaceTitle',
          //   id: id,
          //   new_title: 'updated'
          // })
        }
      />
      <ProjectMoreOption
        workspaceID={id}
        color="text-[black]"
        text="ویرایش رنگ"
        type="editColor"
        onClickHandler={
          (id) => localPageDispatch({ type: 'openNewWorkspaceColor', WID: id })
          // dispatch({
          //   type: 'changeColorWorkspace',
          //   id: id,
          //   new_color: '#40C057'
          // })
        }
      />
      <ProjectMoreOption
        workspaceID={id}
        color="text-[black]"
        text="کپی لینک"
        type="linkCopy"
      />
      <ProjectMoreOption
        workspaceID={id}
        color="text-[#FA5252]"
        text="حذف"
        type="remove"
        onClickHandler={(id) =>
          localPageDispatch({ type: 'openDeleteWorkspace', WID: id })
        }
      />
      <ShareButton />
    </div>
  )
}

export default ProjectMore
