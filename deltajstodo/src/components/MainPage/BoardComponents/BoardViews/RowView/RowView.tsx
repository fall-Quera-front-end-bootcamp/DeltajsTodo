/* eslint-disable @typescript-eslint/no-empty-interface */
import { type FunctionComponent } from 'react'
import Row from './Row'
import { type Board, type Project } from '../../../../../utilities/models'

interface RowViewProps {
  project: Project
}

const RowView: FunctionComponent<RowViewProps> = ({ project }) => {
  return (
    <>
      <div>
        <div className="relative w-[1034px]">
          <div className="absolute right-0 top-0 flex h-[32px] w-[109px] flex-row items-center gap-[8px]">
            <div className="h-[32px] w-[77px]">
              <p className="h-[32px] w-[77px] text-right font-yekan text-[20px] font-extrabold leading-[32px] text-[#1E1E1E]">
                {project?.title}
              </p>
            </div>
            <div>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3 12V12C3 7.029 7.029 3 12 3V3C16.971 3 21 7.029 21 12V12C21 16.971 16.971 21 12 21V21C7.029 21 3 16.971 3 12Z"
                  stroke="#323232"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15 11L12 14L9 11"
                  stroke="#323232"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          <div
            className="absolute
     right-[23px] top-[63px]
     flex w-[1011px] flex-col gap-[40px]"
          >
            {project.boards.map((board: Board) => {
              return (
                <div key={board.id}>
                  <Row board={board} />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default RowView
