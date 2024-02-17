import {useState} from 'react'
const QueraTaskManager = (): JSX.Element => {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }
  return (
    <section className="h-screen w-[340px] relative flex flex-col top-0 right-0 ml-auto bg-[#ffff] justify-between">
      <div className="flex p-6 text-right flex-col justify-center items-center gap-y-[32px]">
        {/* top text */}
        <div>
          <p className="font-yekan text-right text-cyan-primary text-headingl">
            کوئرا تسک منیجر
          </p>
        </div>
        {/* end top text */}
        {/* ------------------------------ */}
        {/* center div input... */}
        <div className="flex flex-col space-y-5">
          <div className="flex justify-between space-x-32">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 10L12 14L16 10"
                stroke="#323232"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <p className="font-yekan font-[800] text-[16px]">ورک‌اسپیس‌ها</p>
          </div>
          {/* --------------------------------------- */}
          {/* search input  */}
          <div>
            <form className="max-w-md mx-auto ">
              {/* <label className="mb-2 text-sm font-medium text-gray-900  dark:text-white">
                Search
              </label> */}
              <div className="relative">
                <div className="absolute inset-y-0 right-0 px-3 flex items-center ps-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400 cursor-pointer"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="bg-[#F6F7F9] block w-[274px] h-[40px] p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-[4px] bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 placeholder:ml-20"
                  placeholder="جستجو کنید"
                  required
                />
              </div>
            </form>
          </div>
          {/* ----------------------------------------------------- */}
          {/* Spices */}
          <div className="flex flex-col gap-[8px] space-y-[8px]">
            {/* Creating a new space */}
            <div className="flex flex-col">
              <div className="w-full flex justify-center items-center bg-[#D3D3D3] space-x-1 rounded-[6px]">
                <p className="text-[#1E1E1E] font-yekan font-normal text-[12px]">
                  ساختن اسپیس جدید
                </p>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M18 20H6C4.895 20 4 19.105 4 18V6C4 4.895 4.895 4 6 4H18C19.105 4 20 4.895 20 6V18C20 19.105 19.105 20 18 20Z"
                    stroke="#1E1E1E"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12 8V16"
                    stroke="#1E1E1E"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M16 12H8"
                    stroke="#1E1E1E"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
            {/* list workspace */}
            <ul className="flex flex-col gap-[8px] space-y-[8px]">
              {/* ***********!!!  Need typescript to display remove and add list !!!******************************************** */}
              {/* one list work */}
              <li>
                <div className="flex justify-end space-x-2">
                  <p className="font-yekan font-medium text-[16px] text-right text-[#1E1E1E]">
                    درس مدیریت پروژه
                  </p>
                  <div>
                    <div className="bg-[#40C057] w-[20px] h-[20px] rounded-[4px]"></div>
                  </div>
                </div>
              </li>
              {/* two list work */}
              <li className="flex flex-col space-y-[6px] gap-[6px]">
                <div className="flex justify-end space-x-2">
                  <p className="font-yekan font-medium text-[16px] text-right text-[#1E1E1E]">
                    کارهای شخصی
                  </p>
                  <div>
                    <div className="bg-[#FAB005] w-[20px] h-[20px] rounded-[4px]"></div>
                  </div>
                </div>
                {/* -------------------------------------START------------------------------------------- */}
                {/* --------------------------- subcategory - کارهای شخصی -------------------------- */}
                <li>
                  <div className="flex justify-end space-x-2">
                    <p className="font-yekan font-medium text-[16px] text-right text-[#1E1E1E]">
                      پروژه اول
                    </p>
                    <div>
                      <div className="w-[20px] h-[20px] rounded-[4px]"></div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex justify-end space-x-2">
                    <p className="font-yekan font-medium text-[16px] text-right text-[#1E1E1E]">
                      پروژه دوم
                    </p>
                    <div>
                      <div className="w-[20px] h-[20px] rounded-[4px]"></div>
                    </div>
                  </div>
                </li>
              </li>
              {/* ----------------------------------------END---------------------------------------- */}

              {/* three  list work */}
              <li>
                <div className="flex justify-end space-x-2">
                  <p className="font-yekan font-medium text-[16px] text-right text-[#1E1E1E]">
                    درس کامپایلر
                  </p>
                  <div>
                    <div className="bg-[#FA5252] w-[20px] h-[20px] rounded-[4px]"></div>
                  </div>
                </div>
              </li>
              {/* --------------------------------------START------------------------------------------ */}
              {/* ----------!!!!!!!!!!!!!!!!-button new project - ساختن پروژه جدید !!!!!!!!!!!!!!!!-------------------------------------------- */}
              <button className="w-[274px] hidden=[36px] border-[2px] border-[#208D8E] p-[4px] rounded-[8px] gap-[8px] text-[#208D8E] text-bodys text-center font-yekan font-normal ">
                ساختن پروژه جدید
              </button>
              {/* -----------------------------------------END--------------------------------------- */}
              {/* four  list work */}
              <li>
                <div className="flex justify-end space-x-2">
                  <p className="font-yekan font-medium text-[16px] text-right text-[#1E1E1E]">
                    درس طراحی الگوریتم
                  </p>
                  <div>
                    <div className="bg-[#228BE6] w-[20px] h-[20px] rounded-[4px]"></div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        {/* end center div input... */}
      </div>
      {/* ------------------------------ */}
      {/* account information */}
      <div className="flex flex-col relative bottom-3 justify-end">
        <div className="flex justify-end p-[16px] space-x-2">
          <p className="font-yekan font-medium text-[16px] text-right">
            نیلوفر موجودی
          </p>
          <svg
            width="36"
            height="33"
            viewBox="0 0 36 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="36" height="33" rx="16.5" fill="#DBE4FF" />
            <path
              d="M16.5178 21H15.3833L11.0906 14.4273V21H9.96148V12.4691H11.0906L15.3942 19.0745V12.4691H16.5178V21ZM19.9671 12.4691L22.7543 19.4291L25.5471 12.4691H27.0034V21H25.8798V17.6782L25.9834 14.0891L23.1853 21H22.3234L19.5253 14.1109L19.6398 17.6782V21H18.5162V12.4691H19.9671Z"
              fill="#4C6EF5"
            />
          </svg>
        </div>
        {/* -------------------------------------- */}
        {/* Exit and toggle dark Light tame */}
        <div className="flex justify-between p-[16px] space-x-2">
          <div className="flex justify-center items-center transition-all ease-in-out delay-300 bg-blue-500">
            <button onClick={toggleDarkMode}>
              {darkMode ? (
                <svg
                  width="64"
                  height="36"
                  viewBox="0 0 64 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="64" height="36" rx="8" fill="#343A40" />
                  <g clip-path="url(#clip0_0_1013)">
                    <rect
                      x="3"
                      y="3"
                      width="30"
                      height="30"
                      rx="5"
                      fill="#868E96"
                    />
                    <path
                      d="M8.03009 18.42C8.39009 23.57 12.7601 27.76 17.9901 27.99C21.6801 28.15 24.9801 26.43 26.9601 23.72C27.7801 22.61 27.3401 21.87 25.9701 22.12C25.3001 22.24 24.6101 22.29 23.8901 22.26C19.0001 22.06 15.0001 17.97 14.9801 13.14C14.9701 11.84 15.2401 10.61 15.7301 9.48996C16.2701 8.24996 15.6201 7.65996 14.3701 8.18996C10.4101 9.85996 7.70009 13.85 8.03009 18.42Z"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_0_1013">
                      <rect
                        x="3"
                        y="3"
                        width="30"
                        height="30"
                        rx="5"
                        fill="white"
                      />
                    </clipPath>
                  </defs>
                </svg>
              ) : (
                <svg
                  width="64"
                  height="36"
                  viewBox="0 0 64 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="64" height="36" rx="8" fill="#F1F3F5" />
                  <g filter="url(#filter0_dd_0_1008)">
                    <g clip-path="url(#clip0_0_1008)">
                      <rect
                        x="31"
                        y="3"
                        width="30"
                        height="30"
                        rx="5"
                        fill="white"
                      />
                      <path
                        d="M46 24.5C49.5899 24.5 52.5 21.5899 52.5 18C52.5 14.4101 49.5899 11.5 46 11.5C42.4101 11.5 39.5 14.4101 39.5 18C39.5 21.5899 42.4101 24.5 46 24.5Z"
                        stroke="#1E1E1E"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M53.14 25.14L53.01 25.01M53.01 10.99L53.14 10.86L53.01 10.99ZM38.86 25.14L38.99 25.01L38.86 25.14ZM46 8.08V8V8.08ZM46 28V27.92V28ZM36.08 18H36H36.08ZM56 18H55.92H56ZM38.99 10.99L38.86 10.86L38.99 10.99Z"
                        stroke="#1E1E1E"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                  </g>
                  <defs>
                    <filter
                      id="filter0_dd_0_1008"
                      x="29"
                      y="2"
                      width="34"
                      height="34"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="1" />
                      <feGaussianBlur stdDeviation="0.5" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_0_1008"
                      />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="1" />
                      <feGaussianBlur stdDeviation="1" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="effect1_dropShadow_0_1008"
                        result="effect2_dropShadow_0_1008"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect2_dropShadow_0_1008"
                        result="shape"
                      />
                    </filter>
                    <clipPath id="clip0_0_1008">
                      <rect
                        x="31"
                        y="3"
                        width="30"
                        height="30"
                        rx="5"
                        fill="white"
                      />
                    </clipPath>
                  </defs>
                </svg>
              )}
            </button>
          </div>
          <div className="flex justify-center items-center">
            <svg
              width="64"
              height="24"
              viewBox="0 0 64 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.6493 12.76L6.22017 14.4982C5.58017 14.7406 5.04926 14.9491 4.62744 15.1236C4.21047 15.2982 3.87835 15.4727 3.63108 15.6473C3.38866 15.817 3.21896 16.0036 3.12199 16.2073C3.02502 16.4061 2.97653 16.6509 2.97653 16.9418C2.97653 17.4848 3.06623 17.9188 3.24563 18.2436C3.42502 18.5685 3.67229 18.8182 3.98744 18.9927C4.30259 19.1673 4.67835 19.2812 5.11472 19.3345C5.55108 19.3927 6.02866 19.4218 6.54744 19.4218H9.99472V21.0145H6.54744C5.79593 21.0145 5.10502 20.9418 4.47472 20.7964C3.84926 20.6558 3.31108 20.4255 2.86017 20.1055C2.40926 19.7903 2.05775 19.3758 1.80562 18.8618C1.5535 18.3479 1.42744 17.72 1.42744 16.9782C1.42744 16.4012 1.53896 15.9067 1.76199 15.4945C1.98987 15.0824 2.29775 14.7261 2.68562 14.4255C3.0735 14.12 3.52441 13.8606 4.03835 13.6473C4.55229 13.4339 5.09775 13.2352 5.67472 13.0509L8.81653 12.0836L5.16563 10.8109C4.94744 10.7479 4.7535 10.7164 4.58381 10.7164C4.41411 10.7115 4.26381 10.7406 4.1329 10.8036C4.00199 10.8667 3.88805 10.9661 3.79108 11.1018C3.69411 11.2376 3.60684 11.4097 3.52926 11.6182L2.06017 11.1745C2.16199 10.8497 2.30017 10.5394 2.47472 10.2436C2.64926 9.94788 2.86502 9.70061 3.12199 9.50182C3.37896 9.29818 3.67956 9.16242 4.02381 9.09455C4.13047 9.07515 4.24199 9.06545 4.35835 9.06545C4.61532 9.06545 4.89653 9.11394 5.20199 9.21091C5.4735 9.29818 5.71835 9.38303 5.93653 9.46545C6.15956 9.54303 6.37775 9.62545 6.59108 9.71273C6.80441 9.79515 7.02744 9.88485 7.26017 9.98182C7.49775 10.0788 7.76926 10.1903 8.07472 10.3164C8.38502 10.4376 8.74381 10.5782 9.15108 10.7382C9.55835 10.8933 10.0408 11.0703 10.5984 11.2691L10.6493 12.76ZM5.71835 16.6945L6.92562 15.4727L8.16199 16.7091L6.94017 17.9309L5.71835 16.6945ZM12.8888 19.4218C13.6403 19.4218 14.2561 19.3685 14.7361 19.2618C15.2161 19.1552 15.5943 18.9879 15.8706 18.76C15.9821 18.6679 16.0791 18.5685 16.1615 18.4618C16.2488 18.36 16.3191 18.2412 16.3724 18.1055C16.4306 17.9745 16.4743 17.8267 16.5034 17.6618C16.5373 17.5018 16.5567 17.3176 16.5615 17.1091H15.3324C14.9785 17.1091 14.6197 17.0606 14.2561 16.9636C13.8973 16.8618 13.57 16.6945 13.2743 16.4618C12.9834 16.2291 12.7434 15.9212 12.5543 15.5382C12.37 15.1552 12.2779 14.6824 12.2779 14.12C12.2779 13.7903 12.3046 13.4945 12.3579 13.2327C12.4161 12.9709 12.4888 12.7382 12.5761 12.5345C12.6634 12.3261 12.7603 12.1467 12.867 11.9964C12.9737 11.8461 13.0779 11.7152 13.1797 11.6036C13.4561 11.3273 13.7712 11.1139 14.1252 10.9636C14.484 10.8085 14.8694 10.7309 15.2815 10.7309C15.6403 10.7309 15.9749 10.7867 16.2852 10.8982C16.6003 11.0097 16.8815 11.177 17.1288 11.4C17.4634 11.7152 17.7155 12.1127 17.8852 12.5927C18.0597 13.0727 18.147 13.6473 18.147 14.3164V17C18.147 17.3491 18.1203 17.6691 18.067 17.96C18.0137 18.2558 17.9337 18.5248 17.827 18.7673C17.7252 19.0145 17.5943 19.2376 17.4343 19.4364C17.2743 19.64 17.0852 19.8291 16.867 20.0036C16.6488 20.1733 16.4088 20.3212 16.147 20.4473C15.8852 20.5782 15.5918 20.6848 15.267 20.7673C14.9421 20.8497 14.5834 20.9103 14.1906 20.9491C13.8027 20.9927 13.3688 21.0145 12.8888 21.0145V19.4218ZM15.2815 12.3236C14.8355 12.3236 14.4888 12.4788 14.2415 12.7891C13.9943 13.0945 13.8706 13.5382 13.8706 14.12C13.8706 14.4109 13.9143 14.6461 14.0015 14.8255C14.0888 15.0048 14.2173 15.1503 14.387 15.2618C14.4694 15.3152 14.5567 15.3588 14.6488 15.3927C14.7458 15.4218 14.8379 15.4461 14.9252 15.4655C15.0124 15.4848 15.09 15.4994 15.1579 15.5091C15.2306 15.5139 15.2888 15.5164 15.3324 15.5164H16.5615V14.3164C16.5615 13.977 16.5373 13.6933 16.4888 13.4655C16.4403 13.2327 16.3773 13.0436 16.2997 12.8982C16.2221 12.7527 16.1349 12.6412 16.0379 12.5636C15.9458 12.4812 15.8512 12.423 15.7543 12.3891C15.6621 12.3552 15.5724 12.3358 15.4852 12.3309C15.4027 12.3261 15.3349 12.3236 15.2815 12.3236ZM25.7898 17.1091H25.637C25.4237 17.1091 25.2225 17.0921 25.0334 17.0582C24.8443 17.0242 24.6528 16.9273 24.4589 16.7673C24.4298 17.417 24.3086 18.0036 24.0952 18.5273C23.8867 19.0509 23.5934 19.497 23.2152 19.8655C22.8419 20.2339 22.391 20.5176 21.8625 20.7164C21.334 20.9152 20.7352 21.0145 20.0661 21.0145H19.0625V19.4218H20.0661C20.551 19.4218 20.968 19.3709 21.317 19.2691C21.671 19.1673 21.9619 19.0048 22.1898 18.7818C22.4177 18.5636 22.5873 18.2752 22.6989 17.9164C22.8104 17.5624 22.8661 17.1309 22.8661 16.6218V12.0836H24.4589V14.3673C24.4589 14.6145 24.5098 14.8133 24.6116 14.9636C24.7183 15.1139 24.8395 15.2303 24.9752 15.3127C25.111 15.3952 25.2419 15.4509 25.368 15.48C25.4989 15.5042 25.5886 15.5164 25.637 15.5164H25.7898V17.1091ZM35.5275 14.2436C35.4984 14.263 35.3699 14.3479 35.142 14.4982C34.9142 14.6436 34.6111 14.823 34.233 15.0364C33.8548 15.2497 33.4136 15.4776 32.9093 15.72C32.4051 15.9624 31.8645 16.1879 31.2875 16.3964C30.7105 16.6 30.1069 16.7697 29.4766 16.9055C28.8511 17.0412 28.2257 17.1091 27.6002 17.1091H25.5057V15.5164H27.6002C27.9396 15.5164 28.2911 15.4921 28.6548 15.4436C29.0184 15.3952 29.3796 15.3297 29.7384 15.2473C30.102 15.16 30.4608 15.0606 30.8148 14.9491C31.1687 14.8376 31.5081 14.7188 31.833 14.5927C32.1627 14.4667 32.4705 14.3382 32.7566 14.2073C33.0427 14.0715 33.2996 13.9382 33.5275 13.8073L29.8984 12.5345C29.6802 12.4715 29.4863 12.44 29.3166 12.44C29.1469 12.4352 28.9966 12.4642 28.8657 12.5273C28.7348 12.5903 28.6208 12.6897 28.5239 12.8255C28.4269 12.9612 28.3396 13.1333 28.262 13.3418L26.793 12.8982C26.8948 12.5733 27.033 12.263 27.2075 11.9673C27.382 11.6715 27.5978 11.4242 27.8548 11.2255C28.1117 11.0218 28.4123 10.8861 28.7566 10.8182C28.8633 10.7988 28.9748 10.7891 29.0911 10.7891C29.3481 10.7891 29.6293 10.8376 29.9348 10.9345C30.2063 11.0218 30.4511 11.1042 30.6693 11.1818C30.8923 11.2545 31.1105 11.3321 31.3239 11.4145C31.5372 11.4921 31.7602 11.577 31.993 11.6691C32.2305 11.7564 32.502 11.8582 32.8075 11.9745C33.1178 12.0909 33.4766 12.2267 33.8839 12.3818C34.2911 12.5321 34.7736 12.7067 35.3311 12.9055L35.5275 14.2436ZM27.6511 7.82909L28.8584 6.60727L30.0948 7.84364L28.873 9.06545L27.6511 7.82909Z"
                fill="#818181"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M46 3H58C59.105 3 60 3.895 60 5V19C60 20.105 59.105 21 58 21H46C44.895 21 44 20.105 44 19V5C44 3.895 44.895 3 46 3Z"
                stroke="#818181"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M49 11V13"
                stroke="#818181"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M44 5.00302V18.998C44 20.485 45.565 21.452 46.894 20.787L50.894 18.787C51.572 18.447 52 17.755 52 16.997V7.00302C52 6.24502 51.572 5.55302 50.894 5.21402L46.894 3.21402C45.565 2.54902 44 3.51602 44 5.00302Z"
                stroke="#818181"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
      {/* End accontent information */}
    </section>
  )
}

export default QueraTaskManager
