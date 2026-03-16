import AddSecondaryIconSvg from '../../../../Common/Icons/AddSecondaryIconSvg'

const BuildTaskButtonPrimary = ({
  className,
  IconColor,
  title,
  onClick
}: {
  className: string
  IconColor: string
  title: string
  onClick: () => void
}): JSX.Element => {
  return (
    <button className={className} onClick={onClick}>
      <p className="">{title}</p>
      <AddSecondaryIconSvg color={IconColor} />
    </button>
  )
}

export default BuildTaskButtonPrimary
