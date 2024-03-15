import PriorityFlag from '../../../../Common/Icons/PriorityFlag'
import ProfileAddUserIconSvg from '../../../../Common/Icons/ProfileAddUserIconSvg'
import ShareIconSvg from '../../../../Common/Icons/ShareIconSvg'
import profile from '../../../../Common/Imgs/taskInformationprofile.jpg'
import { taskPriority } from '../../BoardViews/RowView/RowComponents/TaskPriorityFunction'

interface TopRightProps {
  priority?: number
}

function TopRightSide({ priority }: TopRightProps): JSX.Element {
  return (
    <div className="flex h-[57px] w-[100%] items-center justify-between px-[16px]">
      <div className="flex items-center gap-[5px]">
        <span className="text-[16px] font-medium leading-[22.55px]">
          اشتراک‌گذاری
        </span>

        <ShareIconSvg color="#BDBDBD" className="size-[24px]" />
      </div>

      <div className="flex gap-4">
        {taskPriority(
          priority,
          'size-[34px] rounded-[50%] border-[0.94px] border-dashed p-[4.53px]',
          true,
          '',
          true
        )}

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
