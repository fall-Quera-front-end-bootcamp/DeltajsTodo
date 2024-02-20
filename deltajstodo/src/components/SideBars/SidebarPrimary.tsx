/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable multiline-ternary */
import { type FunctionComponent, useState } from 'react'
import ArrowDownIconSvg from '../Icons/ArrowDownIconSvg'
import SearchIconSvg from '../Icons/SearchIconSvg'
import AddSecondaryIconSvg from '../Icons/AddSecondaryIconSvg'
import LogoutIconSvg from '../Icons/LogoutIconSvg'
import LightModeSwitchIconSvg from '../Icons/LightModeSwitchIconSvg'
import DarkModeSwitchIconSvg from '../Icons/DarkModeSwitchIconSvg'
import WorkspaceItem from '../WorkspaceItem/WorkspaceItem'
import { type Workspace } from '../../utilities/models'

interface SidebarPrimaryProps {
  items: Workspace[]
}

const SidebarPrimary: FunctionComponent<SidebarPrimaryProps> = ({ items }) => {
  const [darkMode, setDarkMode] = useState(false)
  const toggleDarkMode = (): void => {
    setDarkMode(!darkMode)
  }
  return (
    <section className="relative right-0 top-0 ml-auto flex h-screen w-[340px] flex-col justify-between border-l-[1px] border-[#AAAAAA] bg-[#ffff]">
      <div className="flex flex-col items-center justify-center gap-y-[32px] p-6 text-right">
        {/* top text */}
        <div>
          <p className="text-headingl text-cyan-primary text-right">
            کوئرا تسک منیجر
          </p>
        </div>
        {/* end top text */}
        {/* ------------------------------ */}
        {/* center div input... */}
        <div className="flex flex-col space-y-5">
          <div className="flex justify-between space-x-32">
            <ArrowDownIconSvg />
            <p className="text-[16px] font-extrabold">ورک‌اسپیس‌ها</p>
          </div>
          {/* --------------------------------------- */}
          {/* search input  */}
          <div>
            <div className="flex items-center">
              <input
                type="text"
                className="placeholder: placeholder:text-bodyxs block h-[40px] w-[274px] rounded-[4px] bg-[#F6F7F9] px-10 py-4 ps-10 text-right text-[#1E1E1E]  placeholder:pr-2 placeholder:font-normal"
                placeholder="جستجو کنید"
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
            <div className="flex flex-col">
              <div className="flex w-full items-center justify-center space-x-1 rounded-[6px] bg-[#D3D3D3]">
                <p className="text-bodyxs font-normal text-[#1E1E1E]">
                  ساختن اسپیس جدید
                </p>
                <AddSecondaryIconSvg />
              </div>
            </div>
            {/* list workspace */}
            <ul className="flex flex-col gap-[8px] space-y-[8px]">
              {/* ***********!!!  Need typescript to display remove and add list !!!******************************************** */}
              {/* one list work */}

              {items?.map((item) => {
                return (
                  <li key={item.id}>
                    <WorkspaceItem
                      workspaceItemColor={item.color}
                      workspaceItemTitle={item.title}
                      projectItems={item.projects}
                    />
                  </li>
                )
              })}

              <li>
                <div className="flex justify-end space-x-2">
                  <p className="text-right text-[16px] font-medium text-[#1E1E1E]">
                    درس مدیریت پروژه
                  </p>
                  <div>
                    <div className="size-[20px] rounded-[4px] bg-[#40C057]"></div>
                  </div>
                </div>
              </li>
              {/* two list work */}
              <li className="flex flex-col gap-[6px] space-y-[6px]">
                <div className="flex justify-end space-x-2">
                  <p className="text-right text-[16px] font-medium text-[#1E1E1E]">
                    کارهای شخصی
                  </p>
                  <div>
                    <div className="size-[20px] rounded-[4px] bg-[#FAB005]"></div>
                  </div>
                </div>
                {/* -------------------------------------START------------------------------------------- */}
                {/* --------------------------- subcategory - کارهای شخصی -------------------------- */}
                {/* <li>
                  <div className="flex justify-end space-x-2">
                    <p className="text-right text-[16px] font-medium text-[#1E1E1E]">
                      پروژه اول
                    </p>
                    <div>
                      <div className="size-[20px] rounded-[4px]"></div>
                    </div>
                  </div>
                </li> */}
              </li>
              {/* ----------------------------------------END---------------------------------------- */}

              {/* three  list work */}
              <li>
                <div className="flex justify-end space-x-2">
                  <p className="text-right text-[16px] font-medium text-[#1E1E1E]">
                    درس کامپایلر
                  </p>
                  <div>
                    <div className="size-[20px] rounded-[4px] bg-[#FA5252]"></div>
                  </div>
                </div>
              </li>
              {/* --------------------------------------START------------------------------------------ */}
              {/* ----------!!!!!!!!!!!!!!!!-button new project - ساختن پروژه جدید !!!!!!!!!!!!!!!!-------------------------------------------- */}
              <button className="hidden=[36px] text-bodys w-[274px] gap-[8px] rounded-[8px] border-[2px] border-[#208D8E] p-[4px] text-center font-normal text-[#208D8E] ">
                ساختن پروژه جدید
              </button>
              {/* -----------------------------------------END--------------------------------------- */}
              {/* four  list work */}
              <li>
                <div className="flex justify-end space-x-2">
                  <p className="text-right text-[16px] font-medium text-[#1E1E1E]">
                    درس طراحی الگوریتم
                  </p>
                  <div>
                    <div className="size-[20px] rounded-[4px] bg-[#228BE6]"></div>
                  </div>
                </div>
              </li>
              {/* <li>
                <WorkspaceItem
                  projectItems={[]}
                  workspaceItemColor="bg-[#FA5252]"
                  workspaceItemTitle="    درس کامپایلر"
                />
              </li> */}
            </ul>
          </div>
        </div>
        {/* end center div input... */}
      </div>
      {/* ------------------------------ */}
      {/* account information */}
      <div className="relative bottom-3 flex flex-col justify-end">
        <div className="flex justify-end space-x-2 p-[16px]">
          <p className="text-right text-[16px] font-medium">نیلوفر موجودی</p>
          <div className="bg-blue-secondary text-bodyxs h-[33px] w-[36px] rounded-[100px] px-[8px] pb-[7px] pt-[9px] text-right font-normal text-[#4C6EF5]">
            NM
          </div>
          {/* <LogoutIconSvg/> */}
        </div>
        {/* -------------------------------------- */}
        {/* Exit and toggle dark Light tame */}
        <div className="flex justify-between space-x-2 p-[16px]">
          <div className="bg-blue-secondary flex items-center justify-center transition-all delay-300 ease-in-out">
            <button onClick={toggleDarkMode}>
              {darkMode ? (
                <LightModeSwitchIconSvg />
              ) : (
                <DarkModeSwitchIconSvg />
              )}
            </button>
          </div>
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
