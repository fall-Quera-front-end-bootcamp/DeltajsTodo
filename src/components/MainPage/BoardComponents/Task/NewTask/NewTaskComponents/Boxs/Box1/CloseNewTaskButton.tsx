import { useContext } from 'react'
import { localPageDispatchContext } from '../../../../../../../../contexts/LocalPageContextProvider'
import DisabledIconSvg from '../../../../../../../Common/Icons/DisabledIconSvg'

const CloseNewTaskButton = (): JSX.Element => {
  const localPageDispatch: any = useContext(localPageDispatchContext)
  return (
    <button
      onClick={() => {
        localPageDispatch({ type: 'closeModal' })
      }}
    >
      <DisabledIconSvg />
    </button>
  )
}

export default CloseNewTaskButton
