import { type FunctionComponent } from 'react'

/* eslint-disable @typescript-eslint/no-empty-interface */
interface ColumnProps {
  title: string
  children: JSX.Element
}

const Column: FunctionComponent<ColumnProps> = ({ title, children }) => {
  return (
    <div className="">
      <div className="">{title}</div>
      <div className="">{children}</div>
    </div>
  )
}

export default Column
