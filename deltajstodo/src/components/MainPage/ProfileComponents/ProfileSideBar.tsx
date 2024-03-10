/* eslint-disable @typescript-eslint/no-empty-interface */
import { type FunctionComponent } from 'react'
import HeadingTextLogoLink from '../../Common/HeadingMainText/HeadingTextLogoLink'
import BackButton from './BackButton'
import PersonalInformationButton from './PersonalInformationButton'
import AccountInformationButton from './AccountInformationButton'
import SettingButton from './SettingButton'
interface ProfileSideBarProps {
  onClickFunction: any
  selected: string
}

const ProfileSideBar: FunctionComponent<ProfileSideBarProps> = ({
  onClickFunction,
  selected
}) => {
  return (
    <div className="size-[100%] border-l-[0.5px] border-l-[#AAAAAA] pr-[50px] pt-[40px]">
      <HeadingTextLogoLink />
      <BackButton />

      <div className="mt-[43px] flex w-[266px] flex-col gap-8">
        <PersonalInformationButton
          onClickFunction={onClickFunction}
          selected={selected}
        />
        <AccountInformationButton
          onClickFunction={onClickFunction}
          selected={selected}
        />
        <SettingButton onClickFunction={onClickFunction} selected={selected} />
      </div>
    </div>
  )
}

export default ProfileSideBar
