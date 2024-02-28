import { type FunctionComponent } from 'react'

interface workspaceItemColorProps {
  color: string
}

const workspaceItemColor: FunctionComponent<workspaceItemColorProps> = ({
  color
}) => {
  return (
    <>
      <svg
        width="20"
        height="21"
        viewBox="0 0 20 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect y="0.5" width="20" height="20" rx="4" fill={color} />
      </svg>
    </>
  )
}

export default workspaceItemColor
