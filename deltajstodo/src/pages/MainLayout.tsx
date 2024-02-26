/* eslint-disable @typescript-eslint/space-before-function-paren */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-interface */
import {
  useState,
  type FunctionComponent,
  useReducer,
  createContext,
  useRef
} from 'react'
import SidebarPrimary from '../components/SideBars/SidebarPrimary'
import { type User, type sidebarItem } from '../utilities/models'
import { Outlet } from 'react-router-dom'
import NewProject from '../components/Modals/NewProject/NewProject'
import NewWorkspace from '../components/Modals/NewWorkspace/NewWorkspace'
import Button from '../components/Buttons/Button'
import AddIconSvg from '../components/Icons/AddIconSvg'

interface MainLayoutProps {
  // currentUser: User
}
let WIDForNewProject: null | string = null
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

  const [localPage, dispatch] = useReducer(StepReducer, 0)
  // const WIDForNewProject = useRef(null)
  return (
    <>
      <localPageContext.Provider value={localPage}>
        <localPageDispatchContext.Provider value={dispatch}>
          <div className="flex flex-row-reverse gap-4">
            <div>
              <SidebarPrimary />
            </div>

            <div
              // eslint-disable-next-line tailwindcss/no-custom-classname
              className={'w-[1100px] '}
            >
              <div
                className={`${localPage !== 0 && 'bg-gray-primary blur-md'}`}
              >
                <Outlet />
              </div>
              {localPage === 1 && <NewWorkspace />}
              {localPage === 2 && <NewProject WID={WIDForNewProject} />}
              {/* {step === 3 && <NewTask />}??? */}
            </div>
          </div>
        </localPageDispatchContext.Provider>
      </localPageContext.Provider>
    </>
  )
}

export default MainLayout
export const localPageContext = createContext<number | null>(null)

export const localPageDispatchContext = createContext<unknown>(null)
function StepReducer(localPage: number, action: any): number {
  switch (action?.type) {
    case 'openNewProject': {
      WIDForNewProject = action?.WID
      console.log(WIDForNewProject)

      return 2
    }

    case 'closeModal': {
      return 0
    }
    case 'openNewWorkspace': {
      return 1
    }

    default: {
      throw Error('Unknown action: ' + action.type)
    }
  }
}
