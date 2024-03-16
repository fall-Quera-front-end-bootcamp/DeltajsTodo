import { useContext } from 'react'
import AddSecondaryIconSvg from '../../../Common/Icons/AddSecondaryIconSvg'
import { localPageDispatchContext } from '../../../../contexts/LocalPageContextProvider'

const NewWorkspaceButton = (): JSX.Element => {
  const stepDispatch: any = useContext(localPageDispatchContext)

  return (
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
  )
}

export default NewWorkspaceButton
