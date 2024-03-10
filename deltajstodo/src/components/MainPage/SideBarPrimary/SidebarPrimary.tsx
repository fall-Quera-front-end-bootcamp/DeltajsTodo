/* eslint-disable @typescript-eslint/indent */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable multiline-ternary */
import { type FunctionComponent, useState, useContext } from 'react'
import ArrowDownIconSvg from '../../Common/Icons/ArrowDownIconSvg'
import SearchIconSvg from '../../Common/Icons/SearchIconSvg'
import AddSecondaryIconSvg from '../../Common/Icons/AddSecondaryIconSvg'
import LogoutIconSvg from '../../Common/Icons/LogoutIconSvg'
import WorkspaceItem from './WorkspaceItem/WorkspaceItem'
import { UserContext } from '../../../contexts/UserProvider'
import { localPageDispatchContext } from '../../../contexts/LocalPageContextProvider'
import ThemeToggle from '../../Common/Buttons/ThemeToggle'
import UserButton from './UserButton/UserButton'
import HeadingTextLogoLink from '../../Common/HeadingMainText/HeadingTextLogoLink'

interface SidebarPrimaryProps {}

const SidebarPrimary: FunctionComponent<SidebarPrimaryProps> = () => {
  const user = useContext(UserContext)

  const [filterValue, setFilterValue] = useState('')
  const stepDispatch: any = useContext(localPageDispatchContext)

  const filterWorkspacesHandler = (e: any): void => {
    e?.target?.value !== ''
      ? setFilterValue(e?.target?.value as string)
      : setFilterValue('')
  }

  return (
    <section className="relative flex h-screen w-[340px] flex-col justify-between border-l-[1px] border-[#AAAAAA] bg-[#ffff]">
      <div className="flex flex-col items-center justify-center gap-y-[32px] p-6 text-right">
        <HeadingTextLogoLink />
        {/* center div input... */}
        <div className="flex flex-col space-y-5">
          <div className="flex justify-between space-x-32">
            <ArrowDownIconSvg />
            <p className="text-[16px] font-extrabold">ورک‌اسپیس‌ها</p>
          </div>
          {/* --------------------------------------- */}
          {/* search input  */}
          <div className="relative">
            <div className="flex items-center">
              <input
                type="text"
                className="placeholder: block h-[40px] w-[274px] rounded-[4px] bg-[#F6F7F9] px-10 py-4 ps-10 text-right text-[#1E1E1E] placeholder:pr-2  placeholder:text-bodyxs placeholder:font-normal"
                placeholder="جستجو کنید"
                onChange={filterWorkspacesHandler}
              />
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 ps-3">
                  <SearchIconSvg />
                </div>
              </div>
            </div>
          </div>
          {/* ----------------------------------------------------- */}
          {/* Spices */}
          <div className="flex flex-col gap-[8px] space-y-[8px]">
            {/* Creating a new space */}

            <button
              onClick={() =>
                stepDispatch({
                  type: 'openNewWorkspace'
                })
              }
            >
              <div className="flex w-full items-center justify-center space-x-1 rounded-[6px] bg-[#D3D3D3]">
                <p className="text-bodyxs font-normal text-[#1E1E1E]">
                  ساختن اسپیس جدید
                </p>
                <AddSecondaryIconSvg />
              </div>
            </button>

            {/* list workspace */}
            <ul className="flex max-h-96 flex-col gap-[8px] overflow-y-auto">
              {/* ***********!!!  Need typescript to display remove and add list !!!******************************************** */}

              {filterValue === ''
                ? user?.workspaces.map((item) => {
                    return (
                      <li key={item.id}>
                        <WorkspaceItem
                          workspaceItemID={item.id}
                          workspaceItemColor={item.color}
                          workspaceItemTitle={item.title}
                          projectItems={item.projects}
                        />
                      </li>
                    )
                  })
                : user?.workspaces
                    .filter((i) => i?.title?.startsWith(filterValue))
                    .map((item) => {
                      return (
                        <li key={item.id}>
                          <WorkspaceItem
                            workspaceItemID={item.id}
                            workspaceItemColor={item.color}
                            workspaceItemTitle={item.title}
                            projectItems={item.projects}
                          />
                        </li>
                      )
                    })}
            </ul>
          </div>
        </div>
      </div>
      {/* ---------------------------------------------------------------------------------------- */}
      {/* account information */}
      <div className="relative bottom-3 flex flex-col justify-end">
        <UserButton />
        {/* -------------------------------------- */}
        {/* Exit and toggle dark Light tame */}
        <div className="flex justify-between space-x-2 p-[16px]">
          <ThemeToggle />
          <div className="flex items-center justify-center space-x-2">
            <LogoutIconSvg />
            <p className="text-right text-[16px] font-medium text-[#818181]">
              خروج
            </p>
          </div>
        </div>
      </div>
      {/* End accontent information */}
    </section>
  )
}

export default SidebarPrimary