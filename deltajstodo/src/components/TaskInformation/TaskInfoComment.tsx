import '../../dist/output.css'
import ChatMessageIconSvg from '../Icons/ChatMessageIconSvg'
import SmileysIconSvg from '../Icons/SmileysIconSvg'
import DocumentsIconSvg from '../Icons/DocumentsIconSvg'
import LinkCopyIconSvg from '../Icons/LinkCopyIconSvg'
import MailIconSvg from '../Icons/MailIconSvg'

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
      className={`${commentClassNames} relative cursor-pointer border-[1px] border-[#F4F4F4] overflow-hidden transition-all duration-700`}
      onClick={onClick}
    >
      <span className="absolute top-[13px] left-[600px] font-medium text-[16px] leading-[22.55px] text-[#AEAEAE]">
        کامنت
      </span>

      <ChatMessageIconSvg className="absolute top-[13px] left-[36px] w-[24px] h-[24px]" />

      <div className="absolute top-[149px] w-[100%] h-[60px] flex justify-between items-center px-[20px]">
        <button className="rounded-[6px] bg-brand-primary text-white py-[6px] px-[12px] font-extrabold text-[12px] leading-[16.91px]">
          ثبت کامنت
        </button>

        <div className="flex gap-5">
          <SmileysIconSvg color="#C9CBDA" className="w-[24px] h-[24px]" />
          <DocumentsIconSvg color="#C9CBDA" className="w-[24px] h-[24px]" />
          <LinkCopyIconSvg color="#C9CBDA" className="w-[24px] h-[24px]" />
          <MailIconSvg color="#C9CBDA" className="w-[24px] h-[24px]" />
        </div>
      </div>
    </div>
  )
}

export default TaskInfoComment
