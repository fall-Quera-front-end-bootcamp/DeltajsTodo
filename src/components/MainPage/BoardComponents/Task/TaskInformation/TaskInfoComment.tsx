import ChatMessageIconSvg from '../../../../Common/Icons/ChatMessageIconSvg'
import SmileysIconSvg from '../../../../Common/Icons/SmileysIconSvg'
import DocumentsIconSvg from '../../../../Common/Icons/DocumentsIconSvg'
import LinkCopyIconSvg from '../../../../Common/Icons/LinkCopyIconSvg'
import MailIconSvg from '../../../../Common/Icons/MailIconSvg'

interface TaskInfoCommentProps {
  onClick: any
  commentClassNames: string
}

function TaskInfoComment ({
  onClick,
  commentClassNames
}: TaskInfoCommentProps): JSX.Element {
  return (
    <div
      dir="rtl"
      className={`${commentClassNames} relative overflow-hidden border-[1px] border-[#F4F4F4] transition-all duration-700 ease-linear`}
    >
      <div className="flex flex-row items-center justify-between px-6 pt-3">
        <span className=" text-[16px] font-medium leading-[22.55px] text-[#AEAEAE]">
          کامنت
        </span>
        <div className="cursor-pointer rounded-full p-2 transition-all duration-200 hover:bg-gray-primary">
          <ChatMessageIconSvg onClick={onClick} className="size-[24px]" />
        </div>
      </div>
      <div className="p-2">
        <textarea
          name=""
          id=""
          className="w-full rounded-xl border-[1px] border-gray-primary p-2"
        ></textarea>
      </div>

      <div className="absolute top-[149px] flex h-[60px] w-[100%] items-center justify-between px-[20px]">
        <div className="flex gap-5">
          <SmileysIconSvg
            color="#C9CBDA"
            className="size-[24px] cursor-pointer"
          />
          <DocumentsIconSvg
            color="#C9CBDA"
            className="size-[24px] cursor-pointer"
          />
          <LinkCopyIconSvg
            color="#C9CBDA"
            className="size-[24px] cursor-pointer"
          />
          <MailIconSvg color="#C9CBDA" className="size-[24px] cursor-pointer" />
        </div>
        <button className="rounded-[6px] bg-brand-primary px-[12px] py-[6px] text-[12px] font-extrabold leading-[16.91px] text-white">
          ثبت کامنت
        </button>
      </div>
    </div>
  )
}

export default TaskInfoComment
