/* eslint-disable spaced-comment */
/* eslint-disable @typescript-eslint/no-empty-interface */
import { useContext, type FunctionComponent, useRef } from 'react'
import LeftArrow from '../../Icons/LeftArrow'
import Close from '../../Icons/Close'

import { localPageDispatchContext } from '../../../pages/MainLayout'
import {
  UserContext,
  UserDispatchContext
} from '../../../contexts/UserProvider'
import { Permission } from '../../../utilities/models'

interface NewProjectProps {
  WID: string | null
}

const NewProject: FunctionComponent<NewProjectProps> = ({ WID }) => {
  const stepDispatch: any = useContext(localPageDispatchContext)
  const inputRef: any = useRef()
  const user = useContext(UserContext)

  const userDispatch: any = useContext(UserDispatchContext)
  return (
    <>
      <div
        dir="rtl"
        className="flex h-[268px] w-[500px] flex-col items-center gap-[40px]"
      >
        <div
          className="bg-white 
              h-[286px] w-[500px]
              rounded-lg p-[24px]
               flex flex-col items-center
                gap-[40px]
              "
        >
          <div
            className="bg-white 
              h-[140px] w-[452px]
               flex flex-col items-center
                gap-[40px]"
          >
            {/* header */}
            <div
              className="bg-white 
              h-[32px] w-[452px]
               flex flex-row justify-between "
            >
              <div>
                <button onClick={() => stepDispatch({ type: 'closeModal' })}>
                  <Close />
                </button>
              </div>
              <div className="w-[192px] h-[32px] gap-[10px] flex  justify-center">
                <p
                  className="font-yekan w-[192px] h-[32px] text-center text-[24px] font-extrabold 
                   leading-[32px]  text-[#1E1E1E] "
                >
                  ساختن پروژه جدید‌‌
                </p>
              </div>
              <div className="invisible">
                <button>
                  <LeftArrow />
                </button>
              </div>
            </div>
            {/* colerPalet */}

            <div
              className="w-[415px] h-[68px]
            flex flex-col gap-[8px]
            "
            >
              <p
                className="font-yekan w-[51px]
               h-[20px] text-right text-[14px] font-[400px] 
              leading-[19.73px]  text-[#1E1E1E] "
              >
                نام پروژه
              </p>

              <div
                className="w-[415px] h-[40px]
rounded-md border-[1px] border-[#AAAAAA]
"
              >
                {/* <Input {...newProject} /> */}
                <input
                  className="h-[40px] w-[415px]
                            rounded-md border-[1px] border-[#AAAAAA]"
                  type="text"
                  name="title"
                  ref={inputRef}
                />
              </div>
            </div>

            {/* <p
                  className="font-yekan w-[92px]
                     h-[20px] text-right text-[14px] font-[400px] 
                    leading-[19.73px]  text-[#1E1E1E] "
                >
                  نام ورک‌اسپیس
                </p>
  
                <div
                  className="w-[415px] h-[40px]
      rounded-md border-[1px] border-[#AAAAAA]
      "
                ></div> */}
          </div>

          {/* ادامه*/}
          <div
            className="bg-white 
              h-[40px] w-[415px] rounded-md   flex gap-[10px] "
          >
            <button
              onClick={() => {
                if (inputRef.current.value === '') {
                  return
                } else {
                  const newId = user?.workspaces.reduce((p, c): number => {
                    return c.projects.length + p
                  }, 0)
                  userDispatch({
                    type: 'AddProject',
                    WID: WID,
                    new_project: {
                      id: ((newId ?? 0) + 1).toString(),
                      title: inputRef.current.value,
                      status: Permission.manager,
                      boards: []
                    }
                  })
                  stepDispatch({ type: 'closeModal' })
                }
              }}
              className="bg-[#208D8E] h-[40px] w-[415px] rounded-md flex flex-row items-center justify-center"
            >
              <p className="font-yekan w-[30px] h-[20px] text-right text-[14px] font-extrabold leading-[19.73px]  text-[#FFFFFF] ">
                تایید
              </p>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default NewProject
