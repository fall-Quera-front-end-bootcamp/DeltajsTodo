import { useContext } from 'react'
import { localPageDispatchContext } from '../../../../../contexts/LocalPageContextProvider'
import {
  useGetBoardQuery,
  useUpdataBoardMutation
} from '../../../../../features/auth/authApiSlice'
import DeleteModalParent from '../../../../Common/Modals/DeleteModalParentComponent/DeleteModalParent'
import toast from 'react-hot-toast'

const ArchiveAllTask = ({
  WID,
  PID,
  BID
}: {
  WID: number
  PID: number
  BID: number
}): JSX.Element => {
  const [updateBoard, { isLoading }] = useUpdataBoardMutation()
  const { data: board } = useGetBoardQuery({
    workspace_id: WID,
    project_id: PID,
    id: BID
  })
  const localPageDispatch: any = useContext(localPageDispatchContext)

  const onSubmitHandler = async (): Promise<void> => {
    try {
      await updateBoard({
        workspace_id: WID,
        project_id: PID,
        id: BID,
        name: board?.name,
        is_archive: true
      }).unwrap()
      toast.success(`تسک‌های برد ${board?.name} با موفقیت آرشیو شدند.`, {
        duration: 4000,
        style: {
          border: '2px',
          borderStyle: 'solid',
          borderColor: 'rgb(130, 201, 30)'
        }
      })

      localPageDispatch({ type: 'closeModal' })
    } catch (error: any) {
      toast.error(error)
      console.log('Hi i am that error: ', error)
    }
  }

  const CloseModalHandler = (): void => {
    localPageDispatch({ type: 'closeModal' })
  }
  return (
    <DeleteModalParent
      CloseModalHandler={CloseModalHandler}
      isLoading={isLoading}
      className=""
      onSubmitHandler={onSubmitHandler}
      QuestionParagraph={`آیا از آرشیو کردن تسک‌های ${board?.name} مطمئن هستید ؟`}
      QuestionTitle="آرشیو کردن تسک‌ها"
    />
  )
}

export default ArchiveAllTask
