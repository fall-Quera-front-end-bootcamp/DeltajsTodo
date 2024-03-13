import { useContext } from 'react'
import { localPageDispatchContext } from '../../../../contexts/LocalPageContextProvider'
import Close from '../../Icons/Close'
import LoadingComponent from '../../LoadingComponent/LoadingComponent'

const DeleteModalParent = ({
  children,
  DeleteItem,
  isLoading,
  onSubmitHandler,
  CloseModalHandler,
  className
}: {
  children?: JSX.Element
  DeleteItem: string
  isLoading: boolean
  onSubmitHandler: () => void
  CloseModalHandler: () => void
  className: string
}): JSX.Element => {
  const localPageDispatch: any = useContext(localPageDispatchContext)
  return (
    <div
      dir="rtl"
      className={`fixed left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-[40px] rounded-lg border-[1px] border-l-gray-dark bg-white p-[24px] shadow-[0px_2px_4px_0px_#00000066,0px_7px_6px_-3px_#0000004D,0px_-3px_0px_0px_#00000033_inset] ${className}`}
    >
      <div className="flex w-full flex-col items-center gap-[40px]">
        <div className="flex w-full flex-row justify-between ">
          <button onClick={() => localPageDispatch({ type: 'closeModal' })}>
            <Close />
          </button>
          <p className="text-center text-[24px] font-extrabold leading-[32px]  text-[#1E1E1E] ">
            حذف ‌
          </p>
          <button className="invisible">
            <Close />
          </button>
        </div>
        <p className="text-center text-[24px] font-extrabold leading-[32px] text-[#1E1E1E]">
          {`آیا از حذف ${DeleteItem} اطمینان داری؟`}
        </p>
      </div>
      <div className="flex gap-[15px] rounded-md ">
        <button
          disabled={isLoading}
          onClick={onSubmitHandler}
          className="flex h-[40px] w-[200px] flex-row items-center justify-center rounded-md bg-red-primary text-white"
        >
          {isLoading ? <LoadingComponent /> : 'بله'}
        </button>
        <button
          onClick={CloseModalHandler}
          className="flex h-[40px] w-[200px] flex-row items-center justify-center rounded-md bg-brand-primary text-white"
        >
          خیر
        </button>
      </div>
      {children}
    </div>
  )
}

export default DeleteModalParent
