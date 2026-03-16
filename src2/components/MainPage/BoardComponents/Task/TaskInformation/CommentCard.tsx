import profile from '../../../../Common/Imgs/taskInformationprofile.jpg'
function CommentCard(): JSX.Element {
  return (
    <div className="flex gap-2 px-[16px]">
      <div
        dir="rtl"
        className="flex grow-[2] flex-col gap-2 rounded-[12px] border-[1px] border-[#F4F4F4] p-[16px]"
      >
        <div className="flex w-[497px] items-center justify-between">
          <div className="flex items-center gap-1">
            <span className="text-[16px] font-extrabold leading-[22.55px] text-brand-primary">
              شما
            </span>

            <span className="text-[12px] font-normal leading-[16.91px] text-[#AAAAAA]">
              کامنت گذاشتید
            </span>
          </div>

          <span className="h-max text-[12px] font-normal leading-[16.91px] text-[#AAAAAA]">
            ۱۲ تیر
          </span>
        </div>

        <span className="text-[12px] font-normal leading-[16.91px]">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است.
        </span>
      </div>

      <div className="w-[36px] shrink-0">
        <img
          src={profile}
          alt="profile"
          className="h-[33px] w-[100%] rounded-[50%] object-cover"
        />
      </div>
    </div>
  )
}
export default CommentCard
