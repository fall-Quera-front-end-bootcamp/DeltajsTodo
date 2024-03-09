import '../../../../dist/output.css'
import PriorityFlag from '../../../Common/Icons/PriorityFlag'
import ProfileAddUserIconSvg from '../../../Common/Icons/ProfileAddUserIconSvg'
import ShareIconSvg from '../../../Common/Icons/ShareIconSvg'
import profile from '../../../Common/Imgs/taskInformationprofile.jpg'

function TopRightSide (): JSX.Element {
  return (
    <div className="flex h-[57px] w-[100%] items-center justify-between px-[16px]">
      <div className="flex items-center gap-[5px]">
        <span className="text-[16px] font-medium leading-[22.55px]">
          اشتراک‌گذاری
        </span>

        <ShareIconSvg color="#BDBDBD" className="size-[24px]" />
      </div>

      <div className="flex gap-4">
        <PriorityFlag
          color="#FB0606"
          className="size-[34px] rounded-[50%] border-[0.94px] border-dashed border-[#FB0606] p-[4.53px]"
        />

        <div className="relative w-[61px]">
          <ProfileAddUserIconSvg className="absolute left-0 size-[34px] rounded-[50%] border-[0.94px] border-dashed border-[#C1C1C1] p-[4.53px]" />
          <img
            src={profile}
            alt="profile"
            className="absolute right-0 size-[34px] rounded-[50%] object-cover"
          />
        </div>

        <button className="h-[30px] w-[111px] rounded bg-[#F84747] text-[12px] font-normal leading-[16.91px] text-white">
          Open
        </button>
      </div>
    </div>
  )
}

export default TopRightSide
