import { useCallback, useState } from 'react'
import {
  useGetBoardsQuery,
  useUpdataBoardMutation
} from '../../../../../../features/auth/authApiSlice'
import RefreshIconSvg from '../../../../../Common/Icons/RefreshIconSvg'
import toast from 'react-hot-toast'
import { type Board } from '../../../../../../utilities/models'

const ReArchiveButton = ({
  WID,
  PID
}: {
  WID: number
  PID: number
}): JSX.Element => {
  const [showBoards, setShowBoards] = useState<boolean>(false)
  const { data: boards } = useGetBoardsQuery({
    workspace_id: WID,
    project_id: PID
  })

  const [updateBoard] = useUpdataBoardMutation({})

  const handleArchives = useCallback((boardID: number, name: string): void => {
    updateBoard({
      workspace_id: WID,
      project_id: PID,
      id: boardID,
      name,
      is_archive: false
    })
      .unwrap()
      .then(() => {
        toast.success('  برد' + name + ' از حالت آرشیو خارج شد', {
          style: {
            direction: 'rtl',
            width: '300px',
            border: '2px',
            borderStyle: 'solid',
            borderColor: 'rgb(130, 201, 30)'
          }
        })
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

  return (
    <div className="relative">
      <button
        onClick={() => {
          setShowBoards((p) => !p)
        }}
        className="flex flex-row items-center justify-center gap-4 rounded-xl border-2 border-brand-primary px-3 py-1"
      >
        <RefreshIconSvg />
        <p className="">بازگردانی تسک‌های آرشیو شده</p>
      </button>
      {showBoards && (
        <div className="absolute left-0 top-[50px] z-[10000] w-[250px] rounded-lg bg-white p-1 shadow-[0_3px_4px_0] shadow-[#00000033]">
          {boards?.map((b: Board) => {
            if (b?.is_archive) {
              return (
                <div
                  key={b?.id}
                  onMouseLeave={() => {
                    setShowBoards(false)
                  }}
                  onClick={() => {
                    handleArchives(b?.id, b?.name)
                    setShowBoards(false)
                  }}
                  className="w-full cursor-pointer rounded-lg p-2 hover:bg-gray-secondary"
                >
                  <div className="">{b?.name}</div>
                </div>
              )
            } else {
              return <></>
            }
          })}
        </div>
      )}
    </div>
  )
}

export default ReArchiveButton
