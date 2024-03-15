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
import WorkspaceItem from '../WorkspaceComponents/WorkspaceItem/WorkspaceItem'
import { localPageDispatchContext } from '../../../contexts/LocalPageContextProvider'
import ThemeToggle from '../../Common/Buttons/ThemeToggle'
import UserButton from './UserButton/UserButton'
import HeadingTextLogoLink from '../../Common/HeadingMainText/HeadingTextLogoLink'
import { type Workspace as W } from '../../../utilities/models'
import { useGetWorkspacesQuery } from '../../../features/auth/authApiSlice'
import LoadingComponent from '../../Common/LoadingComponent/LoadingComponent'
import Cookies from 'universal-cookie'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

interface SidebarPrimaryProps {}

const SidebarPrimary: FunctionComponent<SidebarPrimaryProps> = () => {
  const cookies = new Cookies()
  const [filterValue, setFilterValue] = useState('')
  const stepDispatch: any = useContext(localPageDispatchContext)
  const navigate = useNavigate()

  const handleLogout = (): void => {
    cookies.remove('accessToken')
    cookies.remove('id')
    localStorage.removeItem('refreshToken')
    navigate('/api/auth/login')
    toast.success('شما از سایت خارج شدید', {
      style: {
        borderColor: '#51cb28',
        border: '2px'
      }
    })
  }

  try {
    const {
      data: workspaces,
      isLoading,
      isError,
      isSuccess,
      error
    } = useGetWorkspacesQuery(null)

    const filterWorkspacesHandler = (e: any): void => {
      e?.target?.value !== ''
        ? setFilterValue(e?.target?.value as string)
        : setFilterValue('')
    }

    if (isLoading) {
      return (
        <div className="flex h-screen w-[340px] flex-col items-center justify-center border-l-[1px] border-[#AAAAAA]">
          <LoadingComponent />
        </div>
      )
    } else if (isSuccess) {
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
                <ul className="flex h-[45vh] max-h-96 flex-col gap-[8px] overflow-y-scroll scrollbar-thin">
                  {/* ***********!!!  Need typescript to display remove and add list !!!******************************************** */}

                  {filterValue === ''
                    ? workspaces?.map((item: W) => {
                        return (
                          <li key={item.id}>
                            <div>
                              <WorkspaceItem workspace={item} />
                            </div>
                          </li>
                        )
                      })
                    : workspaces
                        ?.filter((i: W) => i?.name?.startsWith(filterValue))
                        .map((item: W) => {
                          return (
                            <li key={item.id}>
                              <WorkspaceItem workspace={item} />
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
              <div
                onClick={handleLogout}
                className="flex cursor-pointer items-center justify-center space-x-2 rounded-lg px-4 transition-all duration-300 hover:bg-gray-secondary"
              >
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
    } else if (isError) {
      return <p>{error}</p>
    }
  } catch (error) {}
}

export default SidebarPrimary
