/* eslint-disable tailwindcss/no-custom-classname */
import { useContext } from 'react'
import '../../../dist/output.css'
import ShareIconSvg from '../Icons/ShareIconSvg'
import { localPageDispatchContext } from '../../../contexts/LocalPageContextProvider'

// eslint-disable-next-line @typescript-eslint/space-before-function-paren
function ShareButton({ WID }: { WID: number }): JSX.Element {
  const localPageDispatch: any = useContext(localPageDispatchContext)
  return (
    <button
      onClick={() => {
        localPageDispatch({ type: 'openShareWorkspace', WID })
      }}
      className="flex w-[100%] items-center rounded-md bg-brand-primary px-[12px] py-[6px]"
    >
      <ShareIconSvg />
      <span className="  text-[12px] font-extrabold leading-[16.91px] text-[white]">
        اشتراک‌گذاری
      </span>
    </button>
  )
}

export default ShareButton
