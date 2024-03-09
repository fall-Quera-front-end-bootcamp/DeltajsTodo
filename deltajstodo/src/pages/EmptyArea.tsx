/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable multiline-ternary */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/no-confusing-void-expression */
/* eslint-disable @typescript-eslint/no-empty-interface */
import { type FunctionComponent } from 'react'
import NewTask from '../components/MainPage/BoardComponents/Task/NewTask/NewTask'

interface EmptyAreaProps {}

const EmptyArea: FunctionComponent<EmptyAreaProps> = () => {
  return (
    <>
      <div className="h-screen w-full bg-gray-primary">
        <NewTask />
      </div>
    </>
  )
}

export default EmptyArea
