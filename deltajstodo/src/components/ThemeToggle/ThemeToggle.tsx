/* eslint-disable @typescript-eslint/no-empty-interface */
import { useState } from 'react'
import DarkModeSwitchIconSvg from '../Icons/DarkModeSwitchIconSvg'
import LightModeSwitchIconSvg from '../Icons/LightModeSwitchIconSvg'
import { useAtom } from 'jotai'
import { Theme } from '../../pages/MainLayout'

interface ThemeToggleProps {
  DarkModeTheme: Function
}

const ThemeToggle = ({ DarkModeTheme }: ThemeToggleProps) => {
  const [darkTheme, setDarkTheme] = useState(false)
  const [theme, setTheme] = useAtom(Theme)

  const [insideDivPosition, setInsideDivPosition] = useState('left-[31px]')
  const [insideDivBg, setInsideDivBg] = useState('bg-[#FFFFFF]')
  const [containerDivBg, setContainerDivBg] = useState('bg-[#F1F3F5]')
  const [lightSvgColor, setLightSvgColor] = useState('#262626')
  const [darkSvgColor, setDarkSvgColor] = useState('#F1F3F5')

  const themeChanger = () => {
    if (darkTheme) {
      DarkModeTheme(true)

      setTheme({
        bgColor: 'bg-white',
        textColor: 'text-black'
      })

      localStorage.setItem('DarkTheme', 'false')

      setInsideDivPosition('left-[31px]')
      setInsideDivBg('bg-[#FFFFFF]')
      setContainerDivBg('bg-[#F1F3F5]')
      setLightSvgColor('#262626')
      setDarkSvgColor('#F1F3F5')
    } else {
      DarkModeTheme(false)

      setTheme({
        bgColor: 'bg-[#202124]',
        textColor: 'text-[#f1f1f1]'
      })

      localStorage.setItem('DarkTheme', 'true')

      setInsideDivPosition('left-[3px]')
      setInsideDivBg('bg-[#868E96]')
      setContainerDivBg('bg-[#343A40]')
      setLightSvgColor('#343A40')
      setDarkSvgColor('white')
    }

    setDarkTheme((prev) => !prev)
  }
  return (
    <div
      dir="rtl"
      className={`relative flex justify-around items-center w-[64px] h-[36px] rounded-lg ${containerDivBg} p-[3px] cursor-pointer transition-all duration-300`}
      onClick={themeChanger}
    >
      <div
        className={`absolute ${insideDivPosition} w-[30px] h-[30px] rounded-[5px] ${insideDivBg} transition-all duration-300`}
      ></div>

      <LightModeSwitchIconSvg
        className="w-[24px] h-[24px] z-10"
        color={lightSvgColor}
      />

      <DarkModeSwitchIconSvg
        className="w-[24px] h-[24px] z-10"
        color={darkSvgColor}
      />
    </div>
  )
}

export default ThemeToggle
