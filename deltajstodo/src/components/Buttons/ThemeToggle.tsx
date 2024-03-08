/* eslint-disable @typescript-eslint/no-empty-interface */
import { useState, type FunctionComponent, useEffect } from 'react'
import DarkModeSwitchIconSvg from '../Icons/DarkModeSwitchIconSvg'
import LightModeSwitchIconSvg from '../Icons/LightModeSwitchIconSvg'

interface ThemeToggleProps {}

const ThemeToggle: FunctionComponent<ThemeToggleProps> = () => {
  const [darkTheme, setDarkTheme] = useState('light')

  const [insideDivPosition, setInsideDivPosition] = useState('left-[31px]')
  const [insideDivBg, setInsideDivBg] = useState('bg-[#FFFFFF]')
  const [containerDivBg, setContainerDivBg] = useState('bg-[#F1F3F5]')
  const [lightSvgColor, setLightSvgColor] = useState('#262626')
  const [darkSvgColor, setDarkSvgColor] = useState('#F1F3F5')

  useEffect(() => {
    if (darkTheme === 'dark') {
      setInsideDivPosition('left-[3px]')
      setInsideDivBg('bg-[#868E96]')
      setContainerDivBg('bg-[#343A40]')
      setLightSvgColor('#343A40')
      setDarkSvgColor('white')
      document.documentElement.classList.add('dark')
    } else {
      setInsideDivPosition('left-[31px]')
      setInsideDivBg('bg-[#FFFFFF]')
      setContainerDivBg('bg-[#F1F3F5]')
      setLightSvgColor('#262626')
      setDarkSvgColor('#F1F3F5')
      document.documentElement.classList.remove('dark')
    }
  }, [darkTheme])

  const handleThemeSwitch = (): void => {
    setDarkTheme(darkTheme === 'dark' ? 'light' : 'dark')
  }
  console.log(darkTheme)

  return (
    <div
      dir="rtl"
      className={`relative flex h-[36px] w-[64px] items-center justify-around rounded-lg ${containerDivBg} cursor-pointer p-[3px] transition-all duration-300`}
      onClick={handleThemeSwitch}
    >
      <div
        className={`absolute ${insideDivPosition} size-[30px] rounded-[5px] ${insideDivBg} transition-all duration-300`}
      ></div>

      <LightModeSwitchIconSvg
        className="z-10 size-[24px]"
        color={lightSvgColor}
      />

      <DarkModeSwitchIconSvg
        className="z-10 size-[24px]"
        color={darkSvgColor}
      />
    </div>
  )
}

export default ThemeToggle
