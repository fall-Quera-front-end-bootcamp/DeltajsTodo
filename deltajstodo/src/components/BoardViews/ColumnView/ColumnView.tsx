/* eslint-disable multiline-ternary */
/* eslint-disable @typescript-eslint/no-empty-interface */
import { type FunctionComponent } from 'react'
import NewColumn from './NewColumn'
import {
  type Project,
  type Board as B,
  type Task as T
} from '../../../utilities/models'

import Column from './Column'
import LargTaskCard from '../../TaskAndCheckBox/LargTaskCard'

interface ColumnViewProps {
  project: Project
}

const ColumnView: FunctionComponent<ColumnViewProps> = ({ project }) => {
  return (
    <>
      <div className="absolute right-0 top-[220px] overflow-y-hidden  ">
        {project.boards.length > 0 ? (
          <>
            <div className="flex flex-row-reverse gap-[16px]">
              {project.boards.map((b: B) => {
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
