/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-interface */
import { useState, type FunctionComponent } from 'react'
import SidebarPrimary from '../components/SideBars/SidebarPrimary'
import { type User, type sidebarItem } from '../utilities/models'
import { Outlet } from 'react-router-dom'

interface MainLayoutProps {
  // currentUser: User
}
interface sidebarItems {
  items: sidebarItem[]
}
const MainLayout: FunctionComponent<MainLayoutProps> = () => {
  // const [sidebarItems, setSidebarItems] = useState<sidebarItems['items']>([
  //   {
  //     id: '1',
  //     title: 'درس مدیریت پروژه',
  //     color: 'bg-[#40C057]',
  //     children: []
  //   },
  //   {
  //     id: '2',
  //     title: ' کارهای شخصی',
  //     color: 'bg-[#FAB005]',
  //     children: [
  //       {
  //         id: '21',
  //         title: '  پروژه اول'
  //       },
  //       {
  //         id: '22',
  //         title: 'پروژه دوم'
  //       }
  //     ]
  //   },
  //   {
  //     id: '3',
  //     title: 'درس کامپایلر',
  //     color: 'bg-[#FA5252]',
  //     children: []
  //   },
  //   {
  //     id: '4',
  //     title: 'درس طراحی الگوریتم',
  //     color: 'bg-[#228BE6]',
  //     children: []
  //   }
  // ])

  return (
    <>
      <div className="flex flex-row-reverse gap-4">
        <div>
          <SidebarPrimary />
        </div>

        <div className="w-[1100px] bg-pink-primary">
          {' '}
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default MainLayout
