import AddSecondaryIconSvg from '../../../../Common/Icons/AddSecondaryIconSvg'

const BuildTaskButtonPrimary = ({
  className,
  IconColor
}: {
  className: string
  IconColor: string
}): JSX.Element => {
  return (
    <button className={className}>
      <p className="">ساختن تسک</p>
      <AddSecondaryIconSvg color={IconColor} />
    </button>
  )
}

export default BuildTaskButtonPrimary
