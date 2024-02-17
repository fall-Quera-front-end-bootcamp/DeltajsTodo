import {useState} from 'react'
import ArrowDownIconSvg from '../Svg/ArrowDownIconSvg';
import SearchIconSvg from '../Svg/SearchIconSvg';
import AddSecondaryIconSvg from '../Svg/AddSecondaryIconSvg';
import LogoutIconSvg from '../Svg/LogoutIconSvg';
import LightModeSwitchIconSvg from '../Svg/LightModeSwitchIconSvg';
import DarkModeSwitchIconSvg from '../Svg/DarkModeSwitchIconSvg';

const QueraTaskManager = (): JSX.Element => {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }
  return (
    <section className="h-screen w-[340px] relative flex flex-col top-0 right-0 ml-auto bg-[#ffff] justify-between">
      <div className="flex p-6 text-right flex-col justify-center items-center gap-y-[32px]">
        {/* top text */}
        <div>
          <p className="text-right text-cyan-primary text-headingl">
            کوئرا تسک منیجر
          </p>
        </div>
        {/* end top text */}
        {/* ------------------------------ */}
        {/* center div input... */}
        <div className="flex flex-col space-y-5">
          <div className="flex justify-between space-x-32">
            <ArrowDownIconSvg />
            <p className="font-extrabold text-[16px]">ورک‌اسپیس‌ها</p>
          </div>
          {/* --------------------------------------- */}
          {/* search input  */}
          <div>
            <div className="flex items-center">
              <input
                type="text"
                className="bg-[#F6F7F9] block w-[274px] h-[40px] py-4 px-10 ps-10 rounded-[4px] text-right placeholder:pr-2 placeholder:text-bodyxs placeholder:font-yekan placeholder:font-normal text-[#1E1E1E] rounded-[4px]"
                placeholder="جستجو کنید"
              />
              <div className="relative">
                <div className="absolute inset-y-0 right-0 px-3 flex items-center ps-3 pointer-events-none">
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
              <div className="w-full flex justify-center items-center bg-[#D3D3D3] space-x-1 rounded-[6px]">
                <p className="text-[#1E1E1E] font-normal text-bodyxs">
                  ساختن اسپیس جدید
                </p>
                <AddSecondaryIconSvg />
              </div>
            </div>
            {/* list workspace */}
            <ul className="flex flex-col gap-[8px] space-y-[8px]">
              {/* ***********!!!  Need typescript to display remove and add list !!!******************************************** */}
              {/* one list work */}
              <li>
                <div className="flex justify-end space-x-2">
                  <p className="font-medium text-[16px] text-right text-[#1E1E1E]">
                    درس مدیریت پروژه
                  </p>
                  <div>
                    <div className="bg-[#40C057] w-[20px] h-[20px] rounded-[4px]"></div>
                  </div>
                </div>
              </li>
              {/* two list work */}
              <li className="flex flex-col space-y-[6px] gap-[6px]">
                <div className="flex justify-end space-x-2">
                  <p className="font-medium text-[16px] text-right text-[#1E1E1E]">
                    کارهای شخصی
                  </p>
                  <div>
                    <div className="bg-[#FAB005] w-[20px] h-[20px] rounded-[4px]"></div>
                  </div>
                </div>
                {/* -------------------------------------START------------------------------------------- */}
                {/* --------------------------- subcategory - کارهای شخصی -------------------------- */}
                <li>
                  <div className="flex justify-end space-x-2">
                    <p className="font-medium text-[16px] text-right text-[#1E1E1E]">
                      پروژه اول
                    </p>
                    <div>
                      <div className="w-[20px] h-[20px] rounded-[4px]"></div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex justify-end space-x-2">
                    <p className="font-medium text-[16px] text-right text-[#1E1E1E]">
                      پروژه دوم
                    </p>
                    <div>
                      <div className="w-[20px] h-[20px] rounded-[4px]"></div>
                    </div>
                  </div>
                </li>
              </li>
              {/* ----------------------------------------END---------------------------------------- */}

              {/* three  list work */}
              <li>
                <div className="flex justify-end space-x-2">
                  <p className="font-medium text-[16px] text-right text-[#1E1E1E]">
                    درس کامپایلر
                  </p>
                  <div>
                    <div className="bg-[#FA5252] w-[20px] h-[20px] rounded-[4px]"></div>
                  </div>
                </div>
              </li>
              {/* --------------------------------------START------------------------------------------ */}
              {/* ----------!!!!!!!!!!!!!!!!-button new project - ساختن پروژه جدید !!!!!!!!!!!!!!!!-------------------------------------------- */}
              <button className="w-[274px] hidden=[36px] border-[2px] border-[#208D8E] p-[4px] rounded-[8px] gap-[8px] text-[#208D8E] text-bodys text-center font-normal ">
                ساختن پروژه جدید
              </button>
              {/* -----------------------------------------END--------------------------------------- */}
              {/* four  list work */}
              <li>
                <div className="flex justify-end space-x-2">
                  <p className="font-medium text-[16px] text-right text-[#1E1E1E]">
                    درس طراحی الگوریتم
                  </p>
                  <div>
                    <div className="bg-[#228BE6] w-[20px] h-[20px] rounded-[4px]"></div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        {/* end center div input... */}
      </div>
      {/* ------------------------------ */}
      {/* account information */}
      <div className="flex flex-col relative bottom-3 justify-end">
        <div className="flex justify-end p-[16px] space-x-2">
          <p className="font-medium text-[16px] text-right">نیلوفر موجودی</p>
          <div className="h-[33px] w-[36px] rounded-[100px] pt-[9px] pb-[7px] px-[8px] bg-blue-secondary text-[#4C6EF5] font-normal text-bodyxs text-right">
            NM
          </div>
          {/* <LogoutIconSvg/> */}
        </div>
        {/* -------------------------------------- */}
        {/* Exit and toggle dark Light tame */}
        <div className="flex justify-between p-[16px] space-x-2">
          <div className="flex justify-center items-center transition-all ease-in-out delay-300 bg-blue-500">
            <button onClick={toggleDarkMode}>
              {darkMode ? (
                <LightModeSwitchIconSvg />
              ) : (
                <DarkModeSwitchIconSvg />
              )}
            </button>
          </div>
          <div className="flex justify-center items-center space-x-2">
            <LogoutIconSvg />
            <p className="text-[16px] font-medium text-right text-[#818181]">
              خروج
            </p>
          </div>
        </div>
      </div>
      {/* End accontent information */}
    </section>
  )
}

export default QueraTaskManager
