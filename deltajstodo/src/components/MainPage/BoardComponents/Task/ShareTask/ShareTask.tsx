import { type Dispatch, type SetStateAction } from 'react'
import ArrowDownIconSvg from '../../../../Common/Icons/ArrowDownIconSvg'
import Close from '../../../../Common/Icons/Close'

const ShareTask = ({
  className,
  setShare
}: {
  className: string | undefined
  setShare: Dispatch<SetStateAction<boolean>>
}): JSX.Element => {
  const handleShowShareTask = (): void => {
    setShare(false)
  }
  return (
    <div
      onMouseLeave={handleShowShareTask}
      className={`flex w-[462px] flex-col justify-center gap-[40px] rounded-[12px] bg-[#ffffff] p-[16px] shadow-md ${className}`}
    >
      {/* top site */}
      <div className="flex items-center justify-between">
        <Close onClickFunction={handleShowShareTask} color="#D3D3D3" />
        <p className="text-center text-headingxs font-medium">
          به اشتراک‌گذاری تسک
        </p>
        <Close onClickFunction={handleShowShareTask} color="#D3D3D3" />
      </div>
      {/* -------------- */}
      {/* body input  */}
      <div className="flex items-center">
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 -left-3 flex cursor-pointer items-center px-3 ps-3">
            <button className="h-[40px] w-[91px] rounded-l-[8px] bg-[#208D8E] text-white">
              ارسال
            </button>
          </div>
        </div>
        <input
          type="email"
          className="h-[40px] w-[430px] rounded-[8px] bg-[#F0F1F3] text-right placeholder:pr-2 placeholder:text-right placeholder:text-bodys placeholder:font-normal"
          placeholder="دعوت با ایمیل"
        />
      </div>
      {/* ------------------ */}
      {/* body link  */}
      <div className="flex items-center justify-between">
        <div className="cursor-pointer rounded-[6px] border-[1px] border-solid border-[#E9EBF0] px-[12px] pb-[2px] pt-[3px] text-right text-bodyxs font-normal">
          کپی لینک
        </div>
        <div className="flex items-center justify-between space-x-1">
          <p>لینک خصوصی</p>
          <div>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.02439 10.9163C8.76436 10.6892 8.36954 10.716 8.14253 10.976C7.91551 11.2361 7.94228 11.6309 8.2023 11.8579L9.02439 10.9163ZM14.1626 11.3871L14.5736 11.8579C14.5843 11.8486 14.5946 11.839 14.6045 11.829L14.1626 11.3871ZM9.56275 4.00458C9.3161 4.24606 9.31191 4.64177 9.55339 4.88842C9.79487 5.13507 10.1906 5.13926 10.4372 4.89778L9.56275 4.00458ZM10.9756 9.08458C11.2356 9.31159 11.6304 9.28483 11.8575 9.0248C12.0845 8.76478 12.0577 8.36996 11.7977 8.14294L10.9756 9.08458ZM5.83738 8.61376L5.42634 8.14294C5.41571 8.15222 5.40541 8.16185 5.39543 8.17183L5.83738 8.61376ZM10.4372 15.9963C10.6839 15.7548 10.6881 15.3591 10.4466 15.1125C10.2051 14.8658 9.8094 14.8616 9.56275 15.1031L10.4372 15.9963ZM8.2023 11.8579C10.0273 13.4512 12.7487 13.4512 14.5736 11.8579L13.7516 10.9163C12.3975 12.0984 10.3784 12.0984 9.02439 10.9163L8.2023 11.8579ZM14.6045 11.829L15.9912 10.4424L15.1073 9.55849L13.7207 10.9451L14.6045 11.829ZM15.9958 10.4377C17.7403 8.65584 17.7252 5.80172 15.962 4.03847L15.0781 4.92235C16.3568 6.2011 16.3678 8.27097 15.1026 9.56319L15.9958 10.4377ZM15.962 4.03847C14.1987 2.27521 11.3446 2.26009 9.56275 4.00458L10.4372 4.89778C11.7295 3.63263 13.7993 3.64359 15.0781 4.92235L15.962 4.03847ZM11.7977 8.14294C9.97271 6.54968 7.2513 6.54968 5.42634 8.14294L6.24842 9.08458C7.60244 7.90247 9.62157 7.90247 10.9756 9.08458L11.7977 8.14294ZM5.39543 8.17183L4.00879 9.55851L4.89269 10.4424L6.27933 9.0557L5.39543 8.17183ZM4.00414 9.56321C2.25965 11.345 2.27476 14.1992 4.03802 15.9624L4.92191 15.0785C3.64315 13.7998 3.63219 11.7299 4.89733 10.4377L4.00414 9.56321ZM4.03802 15.9624C5.80128 17.7257 8.65539 17.7408 10.4372 15.9963L9.56275 15.1031C8.27053 16.3682 6.20066 16.3573 4.92191 15.0785L4.03802 15.9624Z"
                fill="#BDBDBD"
              />
            </svg>
          </div>
        </div>
      </div>
      {/* ------------- */}
      {/* footer shareing */}
      <div className="flex flex-col">
        <div className="flex justify-end">
          <p className="pb-4 text-bodys font-normal">اشتراک‌گذاشته شده با</p>
        </div>
        <ul className="flex flex-col space-y-2">
          <li className="flex justify-between">
            <div className="cursor-pointer rounded-[6px] border-[1px] border-solid border-[#E9EBF0] px-[12px] pb-[2px] pt-[3px] text-right text-bodyxs font-normal">
              دسترسی کامل
            </div>
            <div className="flex items-center justify-between space-x-2">
              <div className="flex items-center">
                <svg
                  width="114"
                  height="25"
                  viewBox="0 0 114 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="114" height="25" rx="6" fill="#D0EBFF" />
                  <path
                    d="M11.0145 13.3109L11.1781 14.4345L11.4181 13.42L13.1036 7.46909H14.0527L15.7 13.42L15.9345 14.4509L16.1145 13.3055L17.44 7.46909H18.5745L16.5018 16H15.4763L13.72 9.78182L13.5836 9.13273L13.4527 9.78182L11.6309 16H10.6054L8.54359 7.46909H9.66723L11.0145 13.3109ZM19.3705 12.7709C19.3705 12.1491 19.4923 11.5909 19.7359 11.0964C19.9796 10.5982 20.3196 10.2145 20.7559 9.94545C21.1923 9.67636 21.6887 9.54182 22.245 9.54182C23.1105 9.54182 23.8087 9.84182 24.3396 10.4418C24.8741 11.0382 25.1414 11.8327 25.1414 12.8255V12.9018C25.1414 13.5164 25.0232 14.0691 24.7868 14.56C24.5505 15.0509 24.2123 15.4327 23.7723 15.7055C23.3323 15.9782 22.8268 16.1145 22.2559 16.1145C21.3978 16.1145 20.7014 15.8164 20.1668 15.22C19.6359 14.6236 19.3705 13.8327 19.3705 12.8473V12.7709ZM20.4614 12.9018C20.4614 13.6036 20.6232 14.1673 20.9468 14.5927C21.2741 15.0182 21.7105 15.2309 22.2559 15.2309C22.8087 15.2309 23.2468 15.0164 23.5705 14.5873C23.8941 14.1545 24.0559 13.5491 24.0559 12.7709C24.0559 12.0764 23.8905 11.5127 23.5596 11.08C23.2323 10.6473 22.7941 10.4309 22.245 10.4309C21.7105 10.4309 21.2796 10.6455 20.9523 11.0745C20.625 11.5 20.4614 12.1091 20.4614 12.9018ZM29.5633 10.6327C29.3997 10.6036 29.2215 10.5891 29.0288 10.5891C28.3197 10.5891 27.8379 10.8927 27.5833 11.5V16H26.4979V9.66182H27.5561L27.5724 10.3927C27.9288 9.82545 28.4324 9.54182 29.0833 9.54182C29.2942 9.54182 29.4542 9.56909 29.5633 9.62364V10.6327ZM32.3253 13.0655L31.6435 13.7745V16H30.558V7H31.6435V12.4436L32.2271 11.7455L34.2016 9.66182H35.5162L33.0507 12.3073L35.8053 16H34.5344L32.3253 13.0655ZM40.3273 14.32C40.3273 14.0255 40.2164 13.7982 39.9946 13.6382C39.7764 13.4745 39.3928 13.3345 38.8437 13.2182C38.2946 13.1018 37.8582 12.9618 37.5346 12.7982C37.2146 12.6309 36.9764 12.4345 36.82 12.2091C36.6673 11.9836 36.591 11.7145 36.591 11.4018C36.591 10.8818 36.8091 10.4418 37.2455 10.0818C37.6855 9.72182 38.2473 9.54182 38.931 9.54182C39.651 9.54182 40.2346 9.72727 40.6819 10.0982C41.1291 10.4691 41.3528 10.9436 41.3528 11.5218H40.2619C40.2619 11.2273 40.1364 10.9727 39.8855 10.7582C39.6346 10.54 39.3164 10.4309 38.931 10.4309C38.5382 10.4309 38.231 10.5182 38.0091 10.6927C37.7873 10.8636 37.6764 11.0873 37.6764 11.3636C37.6764 11.6255 37.7782 11.8236 37.9819 11.9582C38.1891 12.0891 38.5637 12.2164 39.1055 12.34C39.6473 12.46 40.0855 12.6036 40.42 12.7709C40.7582 12.9382 41.0073 13.14 41.1673 13.3764C41.331 13.6127 41.4128 13.9018 41.4128 14.2436C41.4128 14.8073 41.1855 15.26 40.731 15.6018C40.28 15.9436 39.6928 16.1145 38.9691 16.1145C38.46 16.1145 38.0091 16.0255 37.6164 15.8473C37.2273 15.6691 36.9219 15.4182 36.7 15.0945C36.4819 14.7709 36.3728 14.4218 36.3728 14.0473H37.4582C37.4764 14.4109 37.62 14.7 37.8891 14.9145C38.1619 15.1255 38.5219 15.2309 38.9691 15.2309C39.38 15.2309 39.7091 15.1491 39.9564 14.9855C40.2037 14.8182 40.3273 14.5964 40.3273 14.32ZM48.1785 12.9018C48.1785 13.8655 47.9566 14.6418 47.513 15.2309C47.073 15.82 46.4766 16.1145 45.7239 16.1145C44.9566 16.1145 44.3512 15.8709 43.9075 15.3836V18.4382H42.8221V9.66182H43.8148L43.8694 10.3655C44.3094 9.81636 44.9221 9.54182 45.7075 9.54182C46.4675 9.54182 47.0694 9.82909 47.513 10.4036C47.9566 10.9782 48.1785 11.7764 48.1785 12.7982V12.9018ZM47.093 12.7764C47.093 12.0636 46.9403 11.5 46.6348 11.0855C46.333 10.6709 45.9166 10.4636 45.3857 10.4636C44.7275 10.4636 44.2348 10.7545 43.9075 11.3364V14.3636C44.2312 14.9418 44.7275 15.2309 45.3966 15.2309C45.9166 15.2309 46.3294 15.0255 46.6348 14.6145C46.9403 14.2036 47.093 13.5909 47.093 12.7764ZM53.465 16C53.4032 15.8764 53.3523 15.6545 53.3123 15.3345C52.8068 15.8545 52.205 16.1145 51.5068 16.1145C50.8814 16.1145 50.3687 15.9382 49.9687 15.5855C49.5687 15.2327 49.3687 14.7855 49.3687 14.2436C49.3687 13.5818 49.6196 13.0691 50.1214 12.7055C50.6232 12.3382 51.3287 12.1545 52.2377 12.1545H53.2959V11.6582C53.2959 11.28 53.1814 10.9782 52.9523 10.7527C52.7268 10.5273 52.3941 10.4145 51.9541 10.4145C51.565 10.4145 51.2396 10.5127 50.9777 10.7091C50.7196 10.9055 50.5905 11.1418 50.5905 11.4182H49.4996C49.4996 11.1018 49.6105 10.7964 49.8323 10.5018C50.0577 10.2073 50.3632 9.97455 50.7487 9.80364C51.1341 9.62909 51.5577 9.54182 52.0196 9.54182C52.7505 9.54182 53.3214 9.72545 53.7323 10.0927C54.1468 10.4564 54.3632 10.9582 54.3814 11.5982V14.5164C54.3814 15.0982 54.4541 15.5618 54.5996 15.9073V16H53.465ZM51.665 15.1764C52.0068 15.1764 52.3287 15.0891 52.6305 14.9145C52.9359 14.7364 53.1577 14.5073 53.2959 14.2273V12.9236H52.445C51.1177 12.9236 50.4541 13.3127 50.4541 14.0909C50.4541 14.4291 50.5668 14.6945 50.7923 14.8873C51.0177 15.08 51.3087 15.1764 51.665 15.1764ZM58.6233 15.2309C59.0087 15.2309 59.3451 15.1145 59.6324 14.8818C59.9233 14.6455 60.0851 14.3527 60.1178 14.0036H61.1433C61.1214 14.3673 60.9942 14.7127 60.7614 15.04C60.5324 15.3673 60.2251 15.6291 59.8396 15.8255C59.4578 16.0182 59.0524 16.1145 58.6233 16.1145C57.7578 16.1145 57.0705 15.8273 56.5614 15.2527C56.0524 14.6782 55.7978 13.8909 55.7978 12.8909V12.7055C55.7978 12.0909 55.9105 11.5436 56.136 11.0636C56.3614 10.58 56.6869 10.2055 57.1124 9.94C57.5378 9.67455 58.0396 9.54182 58.6178 9.54182C59.3269 9.54182 59.916 9.75455 60.3851 10.18C60.8578 10.6055 61.1105 11.1582 61.1433 11.8382H60.1178C60.0851 11.4309 59.9287 11.0945 59.6487 10.8291C59.3687 10.5636 59.0251 10.4309 58.6178 10.4309C58.0651 10.4309 57.6378 10.6309 57.336 11.0309C57.0342 11.4273 56.8833 12 56.8833 12.7491V12.9509C56.8833 13.6818 57.0324 14.2455 57.3305 14.6418C57.6324 15.0345 58.0633 15.2309 58.6233 15.2309ZM64.9918 16.1145C64.13 16.1145 63.43 15.8327 62.8918 15.2691C62.3536 14.7055 62.0845 13.9509 62.0845 13.0055V12.8091C62.0845 12.18 62.2045 11.6182 62.4445 11.1236C62.6845 10.6291 63.0191 10.2418 63.4482 9.96182C63.8809 9.68182 64.35 9.54182 64.8554 9.54182C65.6809 9.54182 66.3209 9.81455 66.7754 10.36C67.2336 10.9018 67.4627 11.6782 67.4627 12.6891V13.1418H63.17C63.1845 13.7673 63.3663 14.2727 63.7154 14.6582C64.0645 15.04 64.5082 15.2309 65.0463 15.2309C65.4318 15.2309 65.7572 15.1527 66.0227 14.9964C66.2882 14.84 66.5209 14.6327 66.7209 14.3745L67.3809 14.8927C66.85 15.7073 66.0536 16.1145 64.9918 16.1145ZM64.8554 10.4309C64.4191 10.4309 64.0518 10.5909 63.7536 10.9109C63.4554 11.2309 63.2718 11.6764 63.2027 12.2473H66.3772V12.1655C66.3482 11.6164 66.2009 11.1909 65.9354 10.8891C65.67 10.5836 65.31 10.4309 64.8554 10.4309ZM79.2538 12.0073C79.2538 12.8436 79.1119 13.5745 78.8283 14.2C78.5483 14.8218 78.1501 15.2964 77.6338 15.6236C77.1174 15.9509 76.5156 16.1145 75.8283 16.1145C75.1592 16.1145 74.5647 15.9509 74.0447 15.6236C73.5247 15.2927 73.121 14.8218 72.8338 14.2109C72.5465 13.6 72.3992 12.8909 72.3919 12.0836V11.4727C72.3919 10.6509 72.5338 9.92545 72.8174 9.29636C73.1047 8.66727 73.5083 8.18545 74.0283 7.85091C74.5483 7.51636 75.1447 7.34909 75.8174 7.34909C76.501 7.34909 77.1029 7.51455 77.6229 7.84545C78.1465 8.17636 78.5483 8.65636 78.8283 9.28545C79.1119 9.91091 79.2538 10.64 79.2538 11.4727V12.0073ZM78.1301 11.4564C78.1301 10.4455 77.9265 9.67091 77.5192 9.13273C77.1156 8.59091 76.5483 8.32 75.8174 8.32C75.1083 8.32 74.5483 8.59091 74.1374 9.13273C73.7301 9.67091 73.521 10.4218 73.5101 11.3855V12.0073C73.5101 12.9891 73.7156 13.76 74.1265 14.32C74.541 14.88 75.1083 15.16 75.8283 15.16C76.5556 15.16 77.1174 14.8964 77.5138 14.3691C77.9138 13.8382 78.1192 13.0782 78.1301 12.0891V11.4564ZM86.3801 14.5055L87.6019 9.66182H88.6874L86.8383 16H85.9601L84.4219 11.1945L82.9219 16H82.0383L80.2001 9.66182H81.2801L82.5292 14.4073L84.0019 9.66182H84.8747L86.3801 14.5055ZM90.8046 9.66182L90.8428 10.4582C91.3264 9.84727 91.9591 9.54182 92.7409 9.54182C94.0791 9.54182 94.7555 10.2982 94.77 11.8109V16H93.6846V11.8055C93.6809 11.3473 93.5755 11.0091 93.3682 10.7909C93.1646 10.5727 92.8464 10.4636 92.4137 10.4636C92.0609 10.4636 91.7518 10.5582 91.4864 10.7473C91.2209 10.9327 91.0137 11.1782 90.8646 11.4836V16H89.7791V9.66182H90.8046ZM99.0348 16.1145C98.1729 16.1145 97.4729 15.8327 96.9348 15.2691C96.3966 14.7055 96.1275 13.9509 96.1275 13.0055V12.8091C96.1275 12.18 96.2475 11.6182 96.4875 11.1236C96.7275 10.6291 97.062 10.2418 97.4911 9.96182C97.9238 9.68182 98.3929 9.54182 98.8984 9.54182C99.7238 9.54182 100.364 9.81455 100.818 10.36C101.277 10.9018 101.506 11.6782 101.506 12.6891V13.1418H97.2129C97.2275 13.7673 97.4093 14.2727 97.7584 14.6582C98.1075 15.04 98.5511 15.2309 99.0893 15.2309C99.4748 15.2309 99.8002 15.1527 100.066 14.9964C100.331 14.84 100.564 14.6327 100.764 14.3745L101.424 14.8927C100.893 15.7073 100.097 16.1145 99.0348 16.1145ZM98.8984 10.4309C98.462 10.4309 98.0948 10.5909 97.7966 10.9109C97.4984 11.2309 97.3148 11.6764 97.2457 12.2473H100.42V12.1655C100.391 11.6164 100.244 11.1909 99.9784 10.8891C99.7129 10.5836 99.3529 10.4309 98.8984 10.4309ZM105.829 10.6327C105.665 10.6036 105.487 10.5891 105.294 10.5891C104.585 10.5891 104.103 10.8927 103.849 11.5V16H102.763V9.66182H103.822L103.838 10.3927C104.194 9.82545 104.698 9.54182 105.349 9.54182C105.56 9.54182 105.72 9.56909 105.829 9.62364V10.6327Z"
                    fill="#228BE6"
                  />
                </svg>
              </div>
              <div className="flex items-center space-x-2">
                <p className="text-center text-bodys font-normal">من</p>
                <div className="flex items-center justify-center">
                  <div className="h-[33px] w-[36px] rounded-[100px] bg-red-primary  px-[8px] pb-[7px] pt-[9px] text-right text-bodyxs font-normal text-black">
                    IMG
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="flex justify-between">
            <div className="cursor-pointer rounded-[6px] border-[1px] border-solid border-[#E9EBF0] px-[12px] pb-[2px] pt-[3px] text-right text-bodyxs font-normal">
              {/* استایل فیگما سلکت با اررو دان سمت راست */}
              {/* <select name="" id="">
                  <option selected>دسترسی کامل</option>
                  <option value="">ادیت</option>
                  <option value="">خواندن</option>
                </select> */}
              <div className="flex items-center space-x-1">
                <ArrowDownIconSvg />
                <p className="cursor-pointer text-right text-bodyxs font-normal">
                  دسترسی کامل
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <p className="text-center text-bodys font-normal">
                sararahimi@gmail.com
              </p>
              <div className="flex items-center justify-center">
                <div className="h-[33px] w-[36px] rounded-[100px] bg-red-primary px-[8px] pb-[7px] pt-[9px] text-center text-bodyxs font-normal text-black">
                  SR
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default ShareTask
