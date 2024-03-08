import '../../dist/output.css'
import PriorityFlag from '../Icons/PriorityFlag'
import ProfileAddUserIconSvg from '../Icons/ProfileAddUserIconSvg'
import ShareIconSvg from '../Icons/ShareIconSvg'
import profile from '../Imgs/taskInformationprofile.jpg'

function TopRightSide(): JSX.Element {
  return (
    <div className="flex justify-between items-center h-[57px] w-[100%] px-[16px]">
      <div className="flex items-center gap-[5px]">
        <span className="font-medium text-[16px] leading-[22.55px]">
          اشتراک‌گذاری
        </span>

        <ShareIconSvg color="#BDBDBD" className="w-[24px] h-[24px]" />
      </div>

      <div className="flex gap-4">
        <PriorityFlag
          color="#FB0606"
          className="w-[34px] h-[34px] border-[0.94px] border-dashed border-[#FB0606] rounded-[50%] p-[4.53px]"
        />

        <div className="w-[61px] relative">
          <ProfileAddUserIconSvg className="absolute left-0 w-[34px] h-[34px] border-[0.94px] border-dashed border-[#C1C1C1] rounded-[50%] p-[4.53px]" />
          <img
            src={profile}
            alt="profile"
            className="absolute right-0 w-[34px] h-[34px] rounded-[50%] object-cover"
          />
        </div>

        <button className="w-[111px] h-[30px] bg-[#F84747] rounded font-normal text-[12px] leading-[16.91px] text-white">
          Open
        </button>
      </div>
    </div>
  )
}

export default TopRightSide
