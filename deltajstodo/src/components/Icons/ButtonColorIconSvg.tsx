/* eslint-disable tailwindcss/enforces-shorthand */
/* eslint-disable @typescript-eslint/no-confusing-void-expression */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable multiline-ternary */
/* eslint-disable @typescript-eslint/no-empty-interface */
import { color } from 'framer-motion'
import { useState, type FunctionComponent, useRef } from 'react'

interface ButtonColorIconSvgProps {
  id: string
  name: string
  color: string
  value: string
  onChangeHandler: (e: any) => void
}

const ButtonColorIconSvg: FunctionComponent<ButtonColorIconSvgProps> = ({
  id,
  name,
  color,
  value,
  onChangeHandler
}) => {
  const inputRef: any = useRef()
  const [hovered, setHover] = useState<boolean>(false)
  const [selected, setSelected] = useState<boolean>(true)
  const [selected2, setSelected2] = useState<boolean>(false)

  //   return (
  //     <>
  //       {/* <div
  //         aria-labelledby="radiogroup-label"
  //         tabIndex={0}
  //         aria-activedescendant="radio1"
  //       >
  //         <span id="radiogroup-label"></span>
  //         <div role="radio" id="radio1" aria-checked="true"></div>
  //         <div role="radio" id="radio2" aria-checked="false"></div>
  //         <div role="radio" id="radio3" aria-checked="false"></div>
  //       </div> */}
  //       <div className="relative" role="radiogroup">
  //         <button
  //           role="radio"
  //           aria-checked={selected}
  //           aria-label={name}
  //           className="relative top-[1px] left-[2px] "
  //           onClick={() => setSelected((p) => !p)}
  //         >
  //           {/* <svg
  //             width="20"
  //             height="20"
  //             viewBox="0 0 20 20"
  //             fill="none"
  //             xmlns="http://www.w3.org/2000/svg"
  //           >
  //             <rect
  //               width={selected ? '28px' : hovered ? '24px' : '20px'}
  //               height={selected ? '28px' : hovered ? '24px' : '20px'}
  //               rx="8"
  //               fill={color}
  //             />
  //             {selected ? (
  //               <rect x="8" y="8" width="12" height="12" rx="6" fill="white" />
  //             ) : (
  //               ''
  //             )}
  //           </svg> */}

  //           {selected ? (
  //             <svg
  //               width="28"
  //               height="28"
  //               viewBox="0 0 28 28"
  //               fill="none"
  //               xmlns="http://www.w3.org/2000/svg"
  //             >
  //               <rect width="28" height="28" rx="12" fill="#FA5252" />
  //               <rect x="8" y="8" width="12" height="12" rx="6" fill="white" />
  //             </svg>
  //           ) : (
  //             <svg
  //               width="20"
  //               height="20"
  //               viewBox="0 0 20 20"
  //               fill="none"
  //               xmlns="http://www.w3.org/2000/svg"
  //             >
  //               <rect width="20" height="20" rx="8" fill="#FA5252" />
  //             </svg>
  //           )}
  //           {/* {hovered ? (
  //             <svg
  //               width="24"
  //               height="24"
  //               viewBox="0 0 24 24"
  //               fill="none"
  //               xmlns="http://www.w3.org/2000/svg"
  //             >
  //               <rect width="24" height="24" rx="10" fill="#FA5252" />
  //             </svg>
  //           ) : (
  //             ''
  //           )} */}
  //         </button>
  //         <button
  //           role="radio"
  //           aria-checked={selected}
  //           aria-label={name}
  //           className="relative top-[1px] left-[2px] "
  //           onClick={() => setSelected((p) => !p)}
  //         >
  //           {/* <svg
  //             width="20"
  //             height="20"
  //             viewBox="0 0 20 20"
  //             fill="none"
  //             xmlns="http://www.w3.org/2000/svg"
  //           >
  //             <rect
  //               width={selected ? '28px' : hovered ? '24px' : '20px'}
  //               height={selected ? '28px' : hovered ? '24px' : '20px'}
  //               rx="8"
  //               fill={color}
  //             />
  //             {selected ? (
  //               <rect x="8" y="8" width="12" height="12" rx="6" fill="white" />
  //             ) : (
  //               ''
  //             )}
  //           </svg> */}

  //           {selected ? (
  //             <svg
  //               width="28"
  //               height="28"
  //               viewBox="0 0 28 28"
  //               fill="none"
  //               xmlns="http://www.w3.org/2000/svg"
  //             >
  //               <rect width="28" height="28" rx="12" fill="#FA5252" />
  //               <rect x="8" y="8" width="12" height="12" rx="6" fill="white" />
  //             </svg>
  //           ) : (
  //             <svg
  //               width="20"
  //               height="20"
  //               viewBox="0 0 20 20"
  //               fill="none"
  //               xmlns="http://www.w3.org/2000/svg"
  //             >
  //               <rect width="20" height="20" rx="8" fill="#FA5252" />
  //             </svg>
  //           )}
  //           {/* {hovered ? (
  //             <svg
  //               width="24"
  //               height="24"
  //               viewBox="0 0 24 24"
  //               fill="none"
  //               xmlns="http://www.w3.org/2000/svg"
  //             >
  //               <rect width="24" height="24" rx="10" fill="#FA5252" />
  //             </svg>
  //           ) : (
  //             ''
  //           )} */}
  //         </button>
  //       </div>{' '}
  //     </>
  //   )

  //   return (
  //     <>
  //       <div className="relative flex  items-center justify-center ">
  //         <input
  //           type="radio"
  //           id="1"
  //           name={name}
  //           value="1"
  //           className="peer z-10 size-full cursor-pointer opacity-0 "
  //           checked={selected}
  //           onClick={() => {
  //             console.log(selected)

  //             setSelected((p) => !p)
  //           }}
  //         />
  //         <div className="absolute size-full z-0 shadow-sm shadow-[#00000050] ring-blue-400 duration-300 ">
  //           {selected ? (
  //             <svg
  //               className="pointer-events-auto"
  //               width="28"
  //               height="28"
  //               viewBox="0 0 28 28"
  //               fill="none"
  //               xmlns="http://www.w3.org/2000/svg"
  //             >
  //               <rect width="28" height="28" rx="12" fill={color} />
  //               <rect x="8" y="8" width="12" height="12" rx="6" fill="white" />
  //             </svg>
  //           ) : (
  //             <svg
  //               width="20"
  //               height="20"
  //               viewBox="0 0 20 20"
  //               fill="none"
  //               xmlns="http://www.w3.org/2000/svg"
  //             >
  //               <rect width="20" height="20" rx="8" fill={color} />
  //             </svg>
  //           )}
  //         </div>
  //       </div>
  //     </>
  //   )

  return (
    <>
      <div className="relative flex size-[20px] items-center justify-center ">
        <input
          ref={inputRef}
          type="radio"
          id={id}
          name={name}
          value={value}
          onChange={(e) => onChangeHandler(e)}
          className="opacity-0  peer z-10 size-full cursor-pointer"
        />
        <div className="absolute">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="20" height="20" rx="8" fill={color} />
          </svg>
        </div>
        <div className="absolute hidden peer-hover:block">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="24" height="24" rx="10" fill={color} />
          </svg>
        </div>
        <div className="absolute hidden peer-checked:block">
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="28" height="28" rx="12" fill={color} />
            <rect x="8" y="8" width="12" height="12" rx="6" fill="white" />
          </svg>
        </div>
      </div>
    </>
  )
}

export default ButtonColorIconSvg
