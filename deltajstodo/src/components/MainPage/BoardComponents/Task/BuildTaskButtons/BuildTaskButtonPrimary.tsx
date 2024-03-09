import AddSecondaryIconSvg from '../../../../Common/Icons/AddSecondaryIconSvg'

const BuildTaskButtonPrimary = ({
  className,
  IconColor,
  title
}: {
  className: string
  IconColor: string
  title: string
}): JSX.Element => {
  return (
    <button className={className}>
      <p className="">{title}</p>
      <AddSecondaryIconSvg color={IconColor} />
    </button>
  )
}

export default BuildTaskButtonPrimary
