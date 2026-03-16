/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { useCallback, useContext } from 'react'
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
  const handleSubmit = useCallback((): void => {
    updateBoard({
      workspace_id: WID,
      project_id: PID,
      id: BID,
      name: board?.name,
      is_archive: true
    })
      .unwrap()
      .then(() => {
        toast.success('تسک‌ها با موفقیت آرشیو شدند.', {
          duration: 4000,
          style: {
            border: '2px',
            borderStyle: 'solid',
            borderColor: 'rgb(130, 201, 30)'
          }
        })
        localPageDispatch({ type: 'closeModal' })
      })
      .catch((err) => {
        toast.error(err?.data?.non_field_errors, {
          style: {
            direction: 'rtl'
          }
        })
        console.log(err)
      })
  }, [])

  const CloseModalHandler = (): void => {
    localPageDispatch({ type: 'closeModal' })
  }
  return (
    <DeleteModalParent
      CloseModalHandler={CloseModalHandler}
      isLoading={isLoading}
      className=""
      onSubmitHandler={handleSubmit}
      QuestionParagraph={`آیا از آرشیو کردن تسک‌های ${board?.name} مطمئن هستید ؟`}
      QuestionTitle="آرشیو کردن تسک‌ها"
    />
  )
}

export default ArchiveAllTask
