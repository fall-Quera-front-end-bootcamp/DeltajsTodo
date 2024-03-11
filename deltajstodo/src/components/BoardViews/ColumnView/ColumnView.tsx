/* eslint-disable spaced-comment */
/* eslint-disable multiline-ternary */
/* eslint-disable @typescript-eslint/no-empty-interface */
import { useEffect, type FunctionComponent } from 'react'
import NewColumn from './NewColumn'
import {
  type Project,
  type Board as B,
  type Task as T
} from '../../../utilities/models'

import Column from './Column'

import { useGetBoardsQuery } from '../../../features/auth/authApiSlice'
import { IDS } from '../../../pages/MainLayout'
import { useAtom } from 'jotai'

interface ColumnViewProps {
  project?: Project
}

const ColumnView: FunctionComponent<ColumnViewProps> = () => {
  const [ids, setids] = useAtom(IDS)

  useEffect(() => {
    console.log(ids)
  }, [])
  ///////////////////////////// API FOR BOADR ////////////////////////////////
  const {
    data: boards,
    isLoading,
    isError,
    isSuccess,
    error
  } = useGetBoardsQuery({
    workspace_id: ids.workspaceID,
    project_id: ids.projectID
  })

  ///////////////////////////////////////////////////////////////////////////////////

  return (
    <>
      <div className="absolute right-0 top-[220px] overflow-y-hidden  ">
        {boards?.length > 0 ? (
          <>
            <div className="flex flex-row-reverse gap-[16px]">
              {boards.map((b: B) => {
                return (
                  <div key={b.id}>
                    <Column board={b} />
                  </div>
                )
              })}
            </div>
          </>
        ) : (
          <NewColumn />
        )}
      </div>
    </>
  )
}

export default ColumnView
