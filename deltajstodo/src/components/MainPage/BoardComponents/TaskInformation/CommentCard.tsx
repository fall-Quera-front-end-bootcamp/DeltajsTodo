import '../../dist/output.css'
import profile from '../Imgs/taskInformationprofile.jpg'
function CommentCard(): JSX.Element {
  return (
    <div className="flex gap-2 px-[16px]">
      <div
        dir="rtl"
        className="flex flex-col gap-2 flex-grow-[2] rounded-[12px] p-[16px] border-[1px] border-[#F4F4F4]"
      >
        <div className="flex justify-between items-center w-[497px]">
          <div className="flex gap-1 items-center">
            <span className="font-extrabold text-[16px] leading-[22.55px] text-brand-primary">
              شما
            </span>

            <span className="font-normal text-[12px] leading-[16.91px] text-[#AAAAAA]">
              کامنت گذاشتید
            </span>
          </div>

          <span className="font-normal text-[12px] leading-[16.91px] text-[#AAAAAA] h-max">
            ۱۲ تیر
          </span>
        </div>

        <span className="font-normal text-[12px] leading-[16.91px]">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است.
        </span>
      </div>

      <div className="shrink-0 w-[36px]">
        <img
          src={profile}
          alt="profile"
          className="w-[100%] h-[33px] rounded-[50%] object-cover"
        />
      </div>
    </div>
  )
}
export default CommentCard
