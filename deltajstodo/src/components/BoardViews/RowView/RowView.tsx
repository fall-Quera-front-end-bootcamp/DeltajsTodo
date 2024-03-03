/* eslint-disable @typescript-eslint/no-empty-interface */
import { useEffect, type FunctionComponent } from 'react'
import Row from './Row'
import { Board, type Project } from '../../../utilities/models'

interface RowViewProps {
  project: Project
}

const RowView: FunctionComponent<RowViewProps> = ({ project }) => {
  useEffect(() => {
    console.log(project)
  }, [])
  return (
    <>
      <div>
        <div className="relative w-[1034px]">
          <div className="absolute top-0 right-0 w-[109px] h-[32px] flex flex-row gap-[8px] items-center">
            <div className="w-[77px] h-[32px]">
              <p className="font-yekan h-[32px] w-[77px] text-right text-[20px] font-extrabold leading-[32px] text-[#1E1E1E]">
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
     top-[63px] right-[23px]
     w-[1011px] flex flex-col gap-[40px]"
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
