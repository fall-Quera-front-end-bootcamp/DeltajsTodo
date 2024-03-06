import { useState } from 'react'
import SearchIconSvg from '../../Icons/SearchIconSvg'
const FilterTags = (): JSX.Element => {
  // return (
  //   <form>
  //     <select
  //       name="tags"
  //       id="tags"
  //       className="shadow-2xl gap-[11px] py-[6px] px-[8px] rounded-[8px] text-right font-normal text-bodyxs"
  //     >
  //       <option selected className="">
  //         جستجو
  //       </option>
  //       <option value="">
  //         <svg
  //           width="46"
  //           height="24"
  //           viewBox="0 0 46 24"
  //           fill="none"
  //           xmlns="http://www.w3.org/2000/svg"
  //         >
  //           <rect width="46" height="24" rx="12" fill="#D0EBFF" />
  //           <path
  //             d="M26.0117 12.78C26.0541 12.9624 26.0753 13.1533 26.0753 13.3527C26.0753 13.5139 26.0605 13.6815 26.0308 13.8555C25.9587 14.25 25.8166 14.6085 25.6044 14.9309C25.0996 15.7073 24.3635 16.0955 23.3962 16.0955C22.9593 16.0955 22.5499 16.0297 22.1681 15.8982C21.9093 15.8006 21.6738 15.6733 21.4617 15.5164C20.9569 15.9024 20.3778 16.0955 19.7244 16.0955C19.3638 16.0955 19.0372 16.0552 18.7444 15.9745C18.7147 16.9291 18.439 17.7097 17.9172 18.3164C17.5693 18.7236 17.1196 19.0291 16.5681 19.2327C16.0166 19.4279 15.3908 19.5255 14.6908 19.5255H13.2463C12.559 19.5255 11.9332 19.3727 11.369 19.0673C10.8047 18.7661 10.3508 18.3397 10.0072 17.7882C9.77383 17.4021 9.60625 16.9842 9.50443 16.5345C9.42383 16.1697 9.38352 15.7836 9.38352 15.3764C9.38352 15.2745 9.38564 15.1727 9.38989 15.0709C9.45352 14.0061 9.78655 12.8712 10.389 11.6664L12.2535 12.5891C11.7741 13.5648 11.5132 14.4324 11.4708 15.1918C11.4666 15.2682 11.4644 15.3424 11.4644 15.4145C11.4644 15.9279 11.5705 16.3521 11.7826 16.6873C11.9566 16.9673 12.192 17.1688 12.489 17.2918C12.7138 17.3894 12.9663 17.4382 13.2463 17.4382H14.6908C15.4884 17.4382 16.025 17.3067 16.3008 17.0436C16.5426 16.8145 16.6635 16.3903 16.6635 15.7709V11.6982H18.7444V13.2445C18.7444 13.7536 19.0244 14.0082 19.5844 14.0082C19.8178 14.0082 20.0023 13.9636 20.1381 13.8745C20.329 13.7515 20.4244 13.5415 20.4244 13.2445V11.6982H22.5117V13.2445C22.5117 13.5076 22.5605 13.6942 22.6581 13.8045C22.7726 13.9403 22.9826 14.0082 23.2881 14.0082C23.7717 14.0082 24.0135 13.8406 24.0135 13.5055C24.0135 13.4333 24.0029 13.3527 23.9817 13.2636C23.7399 12.2667 23.5829 11.5985 23.5108 11.2591L25.5344 10.7755C25.6575 11.2845 25.8166 11.9527 26.0117 12.78ZM30.5006 15.1282C30.5006 16.4518 30.1675 17.4912 29.5015 18.2464C28.759 19.0906 27.673 19.5127 26.2433 19.5127H25.6133V17.4255H26.2433C27.0239 17.4255 27.5796 17.2494 27.9106 16.8973C28.2457 16.5452 28.4133 15.9555 28.4133 15.1282V11.6982H30.5006V15.1282ZM34.8835 8.77727L34.998 8.94273C35.0235 8.98091 35.0468 9.01273 35.068 9.03818C35.0977 9.08061 35.1253 9.12303 35.1507 9.16545C35.2229 9.26727 35.2992 9.37333 35.3798 9.48364C35.5877 9.78485 35.8189 10.1179 36.0735 10.4827C36.4044 10.9494 36.765 11.4606 37.1553 12.0164C37.4607 12.4576 37.6347 12.9179 37.6771 13.3973C37.6856 13.4821 37.6898 13.567 37.6898 13.6518C37.6898 14.0506 37.5986 14.4282 37.4162 14.7845C37.1913 15.213 36.8689 15.5461 36.4489 15.7836C36.0247 16.0255 35.5495 16.1464 35.0235 16.1464C34.4125 16.1464 33.6171 16.0191 32.6371 15.7645C32.3444 15.6882 32.0495 15.6033 31.7525 15.51C31.6592 15.4845 31.5701 15.457 31.4853 15.4273C31.4556 15.4188 31.4301 15.4124 31.4089 15.4082L31.3898 15.3955H31.3771L32.0453 13.4164C32.2065 13.4715 32.3953 13.5309 32.6116 13.5945C32.8789 13.6709 33.1419 13.7409 33.4007 13.8045C34.0965 13.9742 34.6374 14.0591 35.0235 14.0591C35.2992 14.0591 35.4795 13.9806 35.5644 13.8236C35.5941 13.7642 35.6089 13.7006 35.6089 13.6327C35.6089 13.5097 35.5559 13.3718 35.4498 13.2191C35.0595 12.6633 34.6989 12.15 34.368 11.6791C34.1177 11.3227 33.8844 10.9897 33.668 10.68C33.3286 10.2006 33.1589 9.95879 33.1589 9.95455L34.8835 8.77727Z"
  //             fill="#228BE6"
  //           />
  //         </svg>
  //       </option>
  //       <option value="">
  //         <svg
  //           width="33"
  //           height="24"
  //           viewBox="0 0 33 24"
  //           fill="none"
  //           xmlns="http://www.w3.org/2000/svg"
  //         >
  //           <rect width="33" height="24" rx="12" fill="#E5DBFF" />
  //           <path
  //             d="M13.1939 15.1282C13.1939 16.4518 12.8609 17.4912 12.1948 18.2464C11.4524 19.0906 10.3663 19.5127 8.93664 19.5127H8.30664V17.4255H8.93664C9.71725 17.4255 10.273 17.2494 10.6039 16.8973C10.9391 16.5452 11.1066 15.9555 11.1066 15.1282V11.6982H13.1939V15.1282ZM17.5959 16.0955H17.0232C16.5523 16.0955 16.1302 16.0127 15.7568 15.8473C15.4726 15.7242 15.2244 15.5567 15.0123 15.3445C14.8002 15.1324 14.6326 14.8842 14.5095 14.6C14.3441 14.2267 14.2614 13.8045 14.2614 13.3336V6.91909H16.3423V13.3336C16.3423 13.5924 16.3911 13.7706 16.4886 13.8682C16.582 13.9615 16.7602 14.0082 17.0232 14.0082H17.5959V16.0955ZM24.9985 7.64455L20.8303 9.54091C21.1952 9.90151 21.7064 10.4297 22.364 11.1255C22.9282 11.7321 23.3249 12.2964 23.554 12.8182C23.7109 13.183 23.7894 13.533 23.7894 13.8682V13.9191C23.7852 14.1906 23.7321 14.443 23.6303 14.6764C23.537 14.897 23.4034 15.0964 23.2294 15.2745C23.0046 15.5036 22.7203 15.6861 22.3767 15.8218C21.9015 16.0042 21.3224 16.0955 20.6394 16.0955H17.2667V14.0082H20.6394C21.297 14.0082 21.6894 13.9721 21.8167 13.9C21.8082 13.8618 21.787 13.8067 21.7531 13.7345C21.7106 13.6539 21.6534 13.5606 21.5812 13.4545C21.3988 13.1788 21.1528 12.8776 20.8431 12.5509C20.1049 11.7661 19.4643 11.1106 18.9212 10.5845C18.8279 10.4955 18.7388 10.4127 18.654 10.3364C18.5903 10.2727 18.5288 10.2155 18.4694 10.1645C18.4482 10.1433 18.427 10.1242 18.4058 10.1073L18.3612 10.0627L18.3421 10.05L18.3358 10.0373L18.3231 10.0309L18.5649 8.28727L24.1331 5.74182L24.9985 7.64455Z"
  //             fill="#7950F2"
  //           />
  //         </svg>
  //       </option>
  //       <option value="">
  //         <svg
  //           width="47"
  //           height="24"
  //           viewBox="0 0 47 24"
  //           fill="none"
  //           xmlns="http://www.w3.org/2000/svg"
  //         >
  //           <rect width="47" height="24" rx="12" fill="#C5F6FA" />
  //           <path
  //             d="M12.2472 14.2309C12.4721 14.2309 12.6715 14.1673 12.8454 14.04C13.0745 13.8788 13.189 13.6391 13.189 13.3209C13.189 13.13 13.0236 12.8606 12.6927 12.5127C12.5272 12.343 12.3618 12.1903 12.1963 12.0545C11.5939 12.5509 11.2927 12.9836 11.2927 13.3527C11.2927 13.6667 11.4115 13.9021 11.649 14.0591C11.7381 14.1185 11.8421 14.163 11.9609 14.1927C12.0584 14.2182 12.1539 14.2309 12.2472 14.2309ZM11.929 8.77727C11.9375 8.78152 11.9481 8.79 11.9609 8.80273C11.9863 8.83242 12.0181 8.86848 12.0563 8.91091C12.1751 9.03394 12.3066 9.17394 12.4509 9.33091C12.9048 9.81879 13.4033 10.3597 13.9463 10.9536C14.116 11.1445 14.256 11.31 14.3663 11.45C14.5233 11.6452 14.6569 11.8339 14.7672 12.0164C15.0472 12.4915 15.1872 12.9667 15.1872 13.4418C15.1872 13.9212 15.0918 14.3497 14.9009 14.7273C14.7524 15.0115 14.5551 15.2555 14.309 15.4591C13.7872 15.8833 13.1 16.0955 12.2472 16.0955C11.3945 16.0955 10.7093 15.8812 10.1918 15.4527C9.94995 15.2533 9.75692 15.0136 9.61268 14.7336C9.42177 14.3645 9.32631 13.9424 9.32631 13.4673C9.32631 12.6315 9.66995 11.8318 10.3572 11.0682L10.7772 10.5909L10.4018 10.19L11.9227 8.76455L11.929 8.77727ZM19.565 15.1282C19.565 16.4518 19.232 17.4912 18.5659 18.2464C17.8235 19.0906 16.7374 19.5127 15.3077 19.5127H14.6777V17.4255H15.3077C16.0883 17.4255 16.6441 17.2494 16.975 16.8973C17.3102 16.5452 17.4777 15.9555 17.4777 15.1282V11.6982H19.565V15.1282ZM17.9996 9.14L16.7396 10.4127L15.4796 9.15273L16.7396 7.88L17.9996 9.14ZM20.7614 9.12091L19.5141 10.3809L18.2223 9.13364L19.495 7.86091L20.7614 9.12091ZM19.2341 7.47909L18.1268 8.58636L17.0323 7.49182L18.1396 6.38455L19.2341 7.47909ZM24.9459 14.0145V13.3591C24.9459 12.9688 24.8632 12.6591 24.6977 12.43C24.5323 12.2052 24.3074 12.0927 24.0232 12.0927C23.7347 12.0927 23.5056 12.2052 23.3359 12.43C23.1789 12.6379 23.1005 12.9073 23.1005 13.2382C23.1005 13.2764 23.1026 13.3167 23.1068 13.3591C23.1195 13.5839 23.2192 13.7536 23.4059 13.8682C23.5671 13.9658 23.7729 14.0145 24.0232 14.0145H24.9459ZM24.0232 10.0055C24.9608 10.0055 25.7074 10.347 26.2632 11.03C26.7765 11.6536 27.0332 12.43 27.0332 13.3591V15.6945C27.0332 17.1709 26.4244 18.2252 25.2068 18.8573C24.7359 19.1033 24.1759 19.2815 23.5268 19.3918C23.022 19.4809 22.4705 19.5255 21.8723 19.5255V17.4382C22.9329 17.4382 23.7305 17.2897 24.265 16.9927C24.6977 16.7552 24.9141 16.4561 24.9141 16.0955H24.0232C23.2638 16.0955 22.6211 15.8918 22.095 15.4845C21.4544 14.9924 21.1341 14.2839 21.1341 13.3591C21.1341 12.4809 21.3462 11.7364 21.7705 11.1255C22.288 10.3788 23.0389 10.0055 24.0232 10.0055ZM32.2388 11.6918V13.4291C32.2388 13.6115 32.3322 13.7579 32.5188 13.8682C32.6673 13.9615 32.8179 14.0082 32.9707 14.0082H33.2634V16.0955H32.9707C32.7246 16.0955 32.4637 16.0552 32.1879 15.9745C32.0649 16.9121 31.7488 17.6673 31.2397 18.24C30.4973 19.0842 29.4113 19.5064 27.9816 19.5064H27.3516V17.4191H27.9816C28.7622 17.4191 29.3179 17.243 29.6488 16.8909C29.984 16.5388 30.1516 15.9491 30.1516 15.1218V11.6918H32.2388ZM38.472 12.8627C38.5059 13.0664 38.5229 13.2615 38.5229 13.4482C38.5229 14.0252 38.3574 14.5427 38.0265 15.0009C37.4962 15.7306 36.6329 16.0955 35.4365 16.0955H32.9483V14.0082H35.392C35.7738 14.0082 36.0432 13.9573 36.2001 13.8555C36.3614 13.7579 36.442 13.603 36.442 13.3909C36.442 13.3273 36.4335 13.2573 36.4165 13.1809C36.3741 12.9645 36.3317 12.7439 36.2892 12.5191C36.2723 12.4342 36.2553 12.343 36.2383 12.2455L36.2129 12.1245L36.1938 12.0036C36.1301 11.6558 36.0814 11.4076 36.0474 11.2591L38.0392 10.6545C38.1665 11.2527 38.3108 11.9888 38.472 12.8627ZM34.4438 19.6273L33.1838 18.3927L34.4438 17.0945L35.7038 18.3927L34.4438 19.6273ZM37.1865 19.6527L35.9138 18.3927L37.2056 17.1327L38.4529 18.3927L37.1865 19.6527ZM35.8438 21.1227L34.7365 20.0155L35.8311 18.9209L36.9383 20.0282L35.8438 21.1227Z"
  //             fill="#15AABF"
  //           />
  //         </svg>
  //       </option>
  //     </select>
  //   </form>
  // )
  const [isFocused, setIsFocused] = useState(false)

  const handleFocus = () => {
    setIsFocused(true)
  }

  const handleBlur = () => {
    setIsFocused(false)
  }
  return (
    <form>
      <div className="flex items-center flex-col">
        <div className="flex items-center">
          <input
            type="text"
            className="w-[182px] rounded-[4px] bg-[#ffff] px-10 py-4 ps-10 text-right text-[#959595] placeholder:pr-2  placeholder:text-bodyxs placeholder:font-normal"
            placeholder="جستجو"
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 ps-3">
              <SearchIconSvg className="" />
            </div>
          </div>
        </div>
        {isFocused && (
          <ul
            name="where"
            id="where"
            className=" shadow-md w-[182px] gap-[16px] py-[6px] px-[8px] rounded-[8px] text-right font-normal text-bodyxs"
          >
            <li className="flex justify-end font-normal text-bodyxs text-right p-2">
              <svg
                width="46"
                height="24"
                viewBox="0 0 46 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="46" height="24" rx="12" fill="#D0EBFF" />
                <path
                  d="M26.0117 12.78C26.0541 12.9624 26.0753 13.1533 26.0753 13.3527C26.0753 13.5139 26.0605 13.6815 26.0308 13.8555C25.9587 14.25 25.8166 14.6085 25.6044 14.9309C25.0996 15.7073 24.3635 16.0955 23.3962 16.0955C22.9593 16.0955 22.5499 16.0297 22.1681 15.8982C21.9093 15.8006 21.6738 15.6733 21.4617 15.5164C20.9569 15.9024 20.3778 16.0955 19.7244 16.0955C19.3638 16.0955 19.0372 16.0552 18.7444 15.9745C18.7147 16.9291 18.439 17.7097 17.9172 18.3164C17.5693 18.7236 17.1196 19.0291 16.5681 19.2327C16.0166 19.4279 15.3908 19.5255 14.6908 19.5255H13.2463C12.559 19.5255 11.9332 19.3727 11.369 19.0673C10.8047 18.7661 10.3508 18.3397 10.0072 17.7882C9.77383 17.4021 9.60625 16.9842 9.50443 16.5345C9.42383 16.1697 9.38352 15.7836 9.38352 15.3764C9.38352 15.2745 9.38564 15.1727 9.38989 15.0709C9.45352 14.0061 9.78655 12.8712 10.389 11.6664L12.2535 12.5891C11.7741 13.5648 11.5132 14.4324 11.4708 15.1918C11.4666 15.2682 11.4644 15.3424 11.4644 15.4145C11.4644 15.9279 11.5705 16.3521 11.7826 16.6873C11.9566 16.9673 12.192 17.1688 12.489 17.2918C12.7138 17.3894 12.9663 17.4382 13.2463 17.4382H14.6908C15.4884 17.4382 16.025 17.3067 16.3008 17.0436C16.5426 16.8145 16.6635 16.3903 16.6635 15.7709V11.6982H18.7444V13.2445C18.7444 13.7536 19.0244 14.0082 19.5844 14.0082C19.8178 14.0082 20.0023 13.9636 20.1381 13.8745C20.329 13.7515 20.4244 13.5415 20.4244 13.2445V11.6982H22.5117V13.2445C22.5117 13.5076 22.5605 13.6942 22.6581 13.8045C22.7726 13.9403 22.9826 14.0082 23.2881 14.0082C23.7717 14.0082 24.0135 13.8406 24.0135 13.5055C24.0135 13.4333 24.0029 13.3527 23.9817 13.2636C23.7399 12.2667 23.5829 11.5985 23.5108 11.2591L25.5344 10.7755C25.6575 11.2845 25.8166 11.9527 26.0117 12.78ZM30.5006 15.1282C30.5006 16.4518 30.1675 17.4912 29.5015 18.2464C28.759 19.0906 27.673 19.5127 26.2433 19.5127H25.6133V17.4255H26.2433C27.0239 17.4255 27.5796 17.2494 27.9106 16.8973C28.2457 16.5452 28.4133 15.9555 28.4133 15.1282V11.6982H30.5006V15.1282ZM34.8835 8.77727L34.998 8.94273C35.0235 8.98091 35.0468 9.01273 35.068 9.03818C35.0977 9.08061 35.1253 9.12303 35.1507 9.16545C35.2229 9.26727 35.2992 9.37333 35.3798 9.48364C35.5877 9.78485 35.8189 10.1179 36.0735 10.4827C36.4044 10.9494 36.765 11.4606 37.1553 12.0164C37.4607 12.4576 37.6347 12.9179 37.6771 13.3973C37.6856 13.4821 37.6898 13.567 37.6898 13.6518C37.6898 14.0506 37.5986 14.4282 37.4162 14.7845C37.1913 15.213 36.8689 15.5461 36.4489 15.7836C36.0247 16.0255 35.5495 16.1464 35.0235 16.1464C34.4125 16.1464 33.6171 16.0191 32.6371 15.7645C32.3444 15.6882 32.0495 15.6033 31.7525 15.51C31.6592 15.4845 31.5701 15.457 31.4853 15.4273C31.4556 15.4188 31.4301 15.4124 31.4089 15.4082L31.3898 15.3955H31.3771L32.0453 13.4164C32.2065 13.4715 32.3953 13.5309 32.6116 13.5945C32.8789 13.6709 33.1419 13.7409 33.4007 13.8045C34.0965 13.9742 34.6374 14.0591 35.0235 14.0591C35.2992 14.0591 35.4795 13.9806 35.5644 13.8236C35.5941 13.7642 35.6089 13.7006 35.6089 13.6327C35.6089 13.5097 35.5559 13.3718 35.4498 13.2191C35.0595 12.6633 34.6989 12.15 34.368 11.6791C34.1177 11.3227 33.8844 10.9897 33.668 10.68C33.3286 10.2006 33.1589 9.95879 33.1589 9.95455L34.8835 8.77727Z"
                  fill="#228BE6"
                />
              </svg>
            </li>
            <li className="flex justify-end font-normal text-bodyxs text-right p-2 text-[#2B2E33]">
              <svg
                width="33"
                height="24"
                viewBox="0 0 33 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="33" height="24" rx="12" fill="#E5DBFF" />
                <path
                  d="M13.1939 15.1282C13.1939 16.4518 12.8609 17.4912 12.1948 18.2464C11.4524 19.0906 10.3663 19.5127 8.93664 19.5127H8.30664V17.4255H8.93664C9.71725 17.4255 10.273 17.2494 10.6039 16.8973C10.9391 16.5452 11.1066 15.9555 11.1066 15.1282V11.6982H13.1939V15.1282ZM17.5959 16.0955H17.0232C16.5523 16.0955 16.1302 16.0127 15.7568 15.8473C15.4726 15.7242 15.2244 15.5567 15.0123 15.3445C14.8002 15.1324 14.6326 14.8842 14.5095 14.6C14.3441 14.2267 14.2614 13.8045 14.2614 13.3336V6.91909H16.3423V13.3336C16.3423 13.5924 16.3911 13.7706 16.4886 13.8682C16.582 13.9615 16.7602 14.0082 17.0232 14.0082H17.5959V16.0955ZM24.9985 7.64455L20.8303 9.54091C21.1952 9.90151 21.7064 10.4297 22.364 11.1255C22.9282 11.7321 23.3249 12.2964 23.554 12.8182C23.7109 13.183 23.7894 13.533 23.7894 13.8682V13.9191C23.7852 14.1906 23.7321 14.443 23.6303 14.6764C23.537 14.897 23.4034 15.0964 23.2294 15.2745C23.0046 15.5036 22.7203 15.6861 22.3767 15.8218C21.9015 16.0042 21.3224 16.0955 20.6394 16.0955H17.2667V14.0082H20.6394C21.297 14.0082 21.6894 13.9721 21.8167 13.9C21.8082 13.8618 21.787 13.8067 21.7531 13.7345C21.7106 13.6539 21.6534 13.5606 21.5812 13.4545C21.3988 13.1788 21.1528 12.8776 20.8431 12.5509C20.1049 11.7661 19.4643 11.1106 18.9212 10.5845C18.8279 10.4955 18.7388 10.4127 18.654 10.3364C18.5903 10.2727 18.5288 10.2155 18.4694 10.1645C18.4482 10.1433 18.427 10.1242 18.4058 10.1073L18.3612 10.0627L18.3421 10.05L18.3358 10.0373L18.3231 10.0309L18.5649 8.28727L24.1331 5.74182L24.9985 7.64455Z"
                  fill="#7950F2"
                />
              </svg>
            </li>
            <li className="flex justify-end font-normal text-bodyxs text-right p-2 text-[#2B2E33]">
              <svg
                width="47"
                height="24"
                viewBox="0 0 47 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="47" height="24" rx="12" fill="#C5F6FA" />
                <path
                  d="M12.2472 14.2309C12.4721 14.2309 12.6715 14.1673 12.8454 14.04C13.0745 13.8788 13.189 13.6391 13.189 13.3209C13.189 13.13 13.0236 12.8606 12.6927 12.5127C12.5272 12.343 12.3618 12.1903 12.1963 12.0545C11.5939 12.5509 11.2927 12.9836 11.2927 13.3527C11.2927 13.6667 11.4115 13.9021 11.649 14.0591C11.7381 14.1185 11.8421 14.163 11.9609 14.1927C12.0584 14.2182 12.1539 14.2309 12.2472 14.2309ZM11.929 8.77727C11.9375 8.78152 11.9481 8.79 11.9609 8.80273C11.9863 8.83242 12.0181 8.86848 12.0563 8.91091C12.1751 9.03394 12.3066 9.17394 12.4509 9.33091C12.9048 9.81879 13.4033 10.3597 13.9463 10.9536C14.116 11.1445 14.256 11.31 14.3663 11.45C14.5233 11.6452 14.6569 11.8339 14.7672 12.0164C15.0472 12.4915 15.1872 12.9667 15.1872 13.4418C15.1872 13.9212 15.0918 14.3497 14.9009 14.7273C14.7524 15.0115 14.5551 15.2555 14.309 15.4591C13.7872 15.8833 13.1 16.0955 12.2472 16.0955C11.3945 16.0955 10.7093 15.8812 10.1918 15.4527C9.94995 15.2533 9.75692 15.0136 9.61268 14.7336C9.42177 14.3645 9.32631 13.9424 9.32631 13.4673C9.32631 12.6315 9.66995 11.8318 10.3572 11.0682L10.7772 10.5909L10.4018 10.19L11.9227 8.76455L11.929 8.77727ZM19.565 15.1282C19.565 16.4518 19.232 17.4912 18.5659 18.2464C17.8235 19.0906 16.7374 19.5127 15.3077 19.5127H14.6777V17.4255H15.3077C16.0883 17.4255 16.6441 17.2494 16.975 16.8973C17.3102 16.5452 17.4777 15.9555 17.4777 15.1282V11.6982H19.565V15.1282ZM17.9996 9.14L16.7396 10.4127L15.4796 9.15273L16.7396 7.88L17.9996 9.14ZM20.7614 9.12091L19.5141 10.3809L18.2223 9.13364L19.495 7.86091L20.7614 9.12091ZM19.2341 7.47909L18.1268 8.58636L17.0323 7.49182L18.1396 6.38455L19.2341 7.47909ZM24.9459 14.0145V13.3591C24.9459 12.9688 24.8632 12.6591 24.6977 12.43C24.5323 12.2052 24.3074 12.0927 24.0232 12.0927C23.7347 12.0927 23.5056 12.2052 23.3359 12.43C23.1789 12.6379 23.1005 12.9073 23.1005 13.2382C23.1005 13.2764 23.1026 13.3167 23.1068 13.3591C23.1195 13.5839 23.2192 13.7536 23.4059 13.8682C23.5671 13.9658 23.7729 14.0145 24.0232 14.0145H24.9459ZM24.0232 10.0055C24.9608 10.0055 25.7074 10.347 26.2632 11.03C26.7765 11.6536 27.0332 12.43 27.0332 13.3591V15.6945C27.0332 17.1709 26.4244 18.2252 25.2068 18.8573C24.7359 19.1033 24.1759 19.2815 23.5268 19.3918C23.022 19.4809 22.4705 19.5255 21.8723 19.5255V17.4382C22.9329 17.4382 23.7305 17.2897 24.265 16.9927C24.6977 16.7552 24.9141 16.4561 24.9141 16.0955H24.0232C23.2638 16.0955 22.6211 15.8918 22.095 15.4845C21.4544 14.9924 21.1341 14.2839 21.1341 13.3591C21.1341 12.4809 21.3462 11.7364 21.7705 11.1255C22.288 10.3788 23.0389 10.0055 24.0232 10.0055ZM32.2388 11.6918V13.4291C32.2388 13.6115 32.3322 13.7579 32.5188 13.8682C32.6673 13.9615 32.8179 14.0082 32.9707 14.0082H33.2634V16.0955H32.9707C32.7246 16.0955 32.4637 16.0552 32.1879 15.9745C32.0649 16.9121 31.7488 17.6673 31.2397 18.24C30.4973 19.0842 29.4113 19.5064 27.9816 19.5064H27.3516V17.4191H27.9816C28.7622 17.4191 29.3179 17.243 29.6488 16.8909C29.984 16.5388 30.1516 15.9491 30.1516 15.1218V11.6918H32.2388ZM38.472 12.8627C38.5059 13.0664 38.5229 13.2615 38.5229 13.4482C38.5229 14.0252 38.3574 14.5427 38.0265 15.0009C37.4962 15.7306 36.6329 16.0955 35.4365 16.0955H32.9483V14.0082H35.392C35.7738 14.0082 36.0432 13.9573 36.2001 13.8555C36.3614 13.7579 36.442 13.603 36.442 13.3909C36.442 13.3273 36.4335 13.2573 36.4165 13.1809C36.3741 12.9645 36.3317 12.7439 36.2892 12.5191C36.2723 12.4342 36.2553 12.343 36.2383 12.2455L36.2129 12.1245L36.1938 12.0036C36.1301 11.6558 36.0814 11.4076 36.0474 11.2591L38.0392 10.6545C38.1665 11.2527 38.3108 11.9888 38.472 12.8627ZM34.4438 19.6273L33.1838 18.3927L34.4438 17.0945L35.7038 18.3927L34.4438 19.6273ZM37.1865 19.6527L35.9138 18.3927L37.2056 17.1327L38.4529 18.3927L37.1865 19.6527ZM35.8438 21.1227L34.7365 20.0155L35.8311 18.9209L36.9383 20.0282L35.8438 21.1227Z"
                  fill="#15AABF"
                />
              </svg>
            </li>
          </ul>
        )}
      </div>
    </form>
  )
}

export default FilterTags
