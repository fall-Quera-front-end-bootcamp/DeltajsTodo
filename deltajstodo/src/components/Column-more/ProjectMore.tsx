/* eslint-disable object-shorthand */
import '../../dist/output.css'
import ShareButton from '../Buttons/ShareButton'
import ProjectMoreOption from './ProjectMoreOption'
import { UserDispatchContext } from '../../contexts/UserProvider'
import { useContext } from 'react'
import { localPageDispatchContext } from '../../pages/MainLayout'

interface ProjectMoreProps {
  id: string
}
function ProjectMore({ id }: ProjectMoreProps): JSX.Element {
  const dispatch: any = useContext(UserDispatchContext)
  const stepDispatch: any = useContext(localPageDispatchContext)

  return (
    <div
      dir="rtl"
      className="flex w-[193px] flex-col gap-4 rounded-lg bg-[white] p-3"
    >
      <ProjectMoreOption
        id={id}
        color="text-[black]"
        text="ساختن پروژه جدید"
        type="addProject"
        onClickHandler={() => stepDispatch({ type: 'openNewProject', WID: id })}
      />
      <ProjectMoreOption
        id={id}
        color="text-[black]"
        text="ویرایش نام ورک‌اسپیس"
        type="editWordkSpace"
        onClickHandler={(id) =>
          dispatch({
            type: 'changeTitleWorkspace',
            id: id,
            new_title: 'updated'
          })
        }
      />
      <ProjectMoreOption
        id={id}
        color="text-[black]"
        text="ویرایش رنگ"
        type="editColor"
        onClickHandler={(id) =>
          dispatch({
            type: 'changeColorWorkspace',
            id: id,
            new_color: '#40C057'
          })
        }
      />
      <ProjectMoreOption
        id={id}
        color="text-[black]"
        text="کپی لینک"
        type="linkCopy"
      />
      <ProjectMoreOption
        id={id}
        color="text-[#FA5252]"
        text="حذف"
        type="remove"
        onClickHandler={(id) => dispatch({ type: 'DeleteWorkspace', id: id })}
      />
      <ShareButton />
    </div>
  )
}

export default ProjectMore
