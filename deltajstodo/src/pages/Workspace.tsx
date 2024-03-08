/* eslint-disable @typescript-eslint/no-empty-interface */
import { useState, type FunctionComponent } from 'react'
import SidebarPrimary from '../components/SideBars/SidebarPrimary'
import { type sidebarItem } from '../utilities/models'
import DarkModeContextProvider from '../contexts/DarkModeContextProvider'
interface WorkspaceProps {}

interface sidebarItems {
  items: sidebarItem[]
}
const Workspace: FunctionComponent<WorkspaceProps> = () => {
  const [sidebarItems, serSidebarItens] = useState<sidebarItems>([])

  return (
    <>
      <DarkModeContextProvider>
        <SidebarPrimary items={sidebarItems.items} />
      </DarkModeContextProvider>
    </>
  )
}

export default Workspace
