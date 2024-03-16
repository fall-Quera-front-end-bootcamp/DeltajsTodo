/* eslint-disable @typescript-eslint/indent */
/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable multiline-ternary */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/no-confusing-void-expression */
/* eslint-disable @typescript-eslint/no-empty-interface */
import { type FunctionComponent } from 'react'
import Response from '../components/Common/Modals/ResponseModals/Response'
import NewTask from '../components/MainPage/BoardComponents/Task/NewTask/NewTask'
interface EmptyAreaProps {}

const EmptyArea: FunctionComponent<EmptyAreaProps> = () => {
  // useEffect(() => {
  //   console.log(inputRef?.current?.checked)
  // }, [inputRef?.current?.checked])

  // const [selected, setSelected] = useState<boolean>(false)
  // const [hovered, setHover] = useState<boolean>(false)

  return (
    <>
      <NewTask />
    </>
    //  <>
    // //   <div className="flex flex-col gap-6">
    // //     <ButtonColorIconSvg id={'1'} name={'colors'} color={'black'} />
    // //     <ButtonColorIconSvg id={'1'} name={'colors'} color={'black'} />
    // //     <ButtonColorIconSvg id={'1'} name={'colors'} color={'black'} />
    // //   </div>
    // </>
    // <>
    //   {/* <NewWorkspace /> */}
    //   {/* <div className="relative flex  items-center justify-center gap-4">
    //     <ButtonColorIconSvg id="1" name="1111" color="black" />
    //     <ButtonColorIconSvg id="1" name="1111" color="black" />
    //     <ButtonColorIconSvg id="1" name="1111" color="black" />
    //   </div> */}
    //   <div className="relative flex  items-center justify-center ">
    //     <input
    //       // onClick={() => {
    //       //   console.log(inputRef.current.checked)
    //       // }}
    //       ref={inputRef}
    //       type="radio"
    //       id="1"
    //       name="111"
    //       // onInput={(e) => {
    //       //   inputRef.current.checked = !inputRef.current.checked
    //       //   console.log(e)
    //       // }}
    //       value="1"
    //       className="opacity-0  peer z-10 size-full cursor-pointer"
    //       // onChange={(e) => {
    //       //   if (e.target.checked) {
    //       //     console.log(e)
    //       //     inputRef.current.checked = true
    //       //   } else if (!e.target.checked) {
    //       //     console.log('woooo')

    //       //     inputRef.current.checked = false
    //       //   }

    //       //   setSelected(e.target.checked)
    //       //   // setHover(true)
    //       // }}
    //       // onMouseOver={(e) => {
    //       //   console.log(e)
    //       // }}
    //       // onMouseLeave={(e) => {
    //       //   console.log(e)
    //       //   //   setSelected(false)
    //       //   inputRef.current.checked = !inputRef.current.checked
    //       // }}
    //     />
    //     <div className="absolute">
    //       <svg
    //         width="20"
    //         height="20"
    //         viewBox="0 0 20 20"
    //         fill="none"
    //         xmlns="http://www.w3.org/2000/svg"
    //       >
    //         <rect width="20" height="20" rx="8" fill="#FA5252" />
    //       </svg>
    //     </div>
    //     <div className="absolute hidden peer-hover:block">
    //       <svg
    //         width="24"
    //         height="24"
    //         viewBox="0 0 24 24"
    //         fill="none"
    //         xmlns="http://www.w3.org/2000/svg"
    //       >
    //         <rect width="24" height="24" rx="10" fill="#FA5252" />
    //       </svg>
    //     </div>
    //     <div className="absolute hidden peer-checked:block">
    //       <svg
    //         width="28"
    //         height="28"
    //         viewBox="0 0 28 28"
    //         fill="none"
    //         xmlns="http://www.w3.org/2000/svg"
    //       >
    //         <rect width="28" height="28" rx="12" fill="#FA5252" />
    //         <rect x="8" y="8" width="12" height="12" rx="6" fill="white" />
    //       </svg>
    //     </div>
    //     {/* <svg
    //         className="peer-checked:opacity-1 absolute opacity-0"
    //         width="24"
    //         height="24"
    //         viewBox="0 0 24 24"
    //         fill="none"
    //         xmlns="http://www.w3.org/2000/svg"
    //       >
    //         <rect width="24" height="24" rx="10" fill="#FA5252" />
    //       </svg>
    //       <svg
    //         className="peer-checked:opacity-1 absolute opacity-0"
    //         width="28"
    //         height="28"
    //         viewBox="0 0 28 28"
    //         fill="none"
    //         xmlns="http://www.w3.org/2000/svg"
    //       >
    //         <rect width="28" height="28" rx="12" fill="#FA5252" />
    //         <rect x="8" y="8" width="12" height="12" rx="6" fill="white" />
    //       </svg> */}
    //   </div>

    //   <div className=" flex  items-center justify-center ">
    //     <input
    //       type="radio"
    //       id="1"
    //       name="111"
    //       value="1"
    //       onClick={(e) => console.log()}
    //       className="peer z-10 size-full cursor-pointer opacity-1"
    //     />
    //     <svg
    //       width="20"
    //       height="20"
    //       viewBox="0 0 20 20"
    //       fill="none"
    //       xmlns="http://www.w3.org/2000/svg"
    //     >
    //       <rect width="20" height="20" rx="8" fill="#FA5252" />
    //     </svg>
    //   </div>
    // </>
  )
}

export default EmptyArea
