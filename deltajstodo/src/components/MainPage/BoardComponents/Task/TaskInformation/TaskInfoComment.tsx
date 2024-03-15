import ChatMessageIconSvg from '../../../../Common/Icons/ChatMessageIconSvg'
import SmileysIconSvg from '../../../../Common/Icons/SmileysIconSvg'
import DocumentsIconSvg from '../../../../Common/Icons/DocumentsIconSvg'
import LinkCopyIconSvg from '../../../../Common/Icons/LinkCopyIconSvg'
import MailIconSvg from '../../../../Common/Icons/MailIconSvg'

interface TaskInfoCommentProps {
  onClick: any
  commentClassNames: string
}

function TaskInfoComment({
  onClick,
  commentClassNames
}: TaskInfoCommentProps): JSX.Element {
  return (
    <div
      className={`${commentClassNames} relative cursor-pointer overflow-hidden border-[1px] border-[#F4F4F4] transition-all duration-700 ease-linear`}
      onClick={onClick}
    >
      <span className="absolute left-[600px] top-[13px] text-[16px] font-medium leading-[22.55px] text-[#AEAEAE]">
        کامنت
      </span>

      <ChatMessageIconSvg className="absolute left-[36px] top-[13px] size-[24px]" />

      <div className="absolute top-[149px] flex h-[60px] w-[100%] items-center justify-between px-[20px]">
        <button className="rounded-[6px] bg-brand-primary px-[12px] py-[6px] text-[12px] font-extrabold leading-[16.91px] text-white">
          ثبت کامنت
        </button>

        <div className="flex gap-5">
          <SmileysIconSvg color="#C9CBDA" className="size-[24px]" />
          <DocumentsIconSvg color="#C9CBDA" className="size-[24px]" />
          <LinkCopyIconSvg color="#C9CBDA" className="size-[24px]" />
          <MailIconSvg color="#C9CBDA" className="size-[24px]" />
        </div>
      </div>
    </div>
  )
}

export default TaskInfoComment
