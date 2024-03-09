import Checkbox from '../../../AuthPage/AuthComponents/Checkbox'

function MiniTaskCard (): JSX.Element {
  return (
    <section className="h-[298px] w-[249px] gap-[16px] rounded-[16px] bg-[#ffff] p-[16px] shadow-[0px_50px_100px_-20px_#32325D40,0px_30px_60px_-30px_#0000004D]">
      <div className="flex flex-col justify-center ">
        {/* ---------------------heder------------------------------------ */}
        {/* <img
          src={dekstopImg}
          alt="dekstopImg"
          className="w-[217px] h-[134px] rounded-[4px]"
        /> */}
        <div className="h-[134px] w-[217px] rounded-[4px] bg-red-primary"></div>
        {/* -----------------body-------------------------- */}
        <div className="mt-3 flex flex-col justify-end space-y-2 text-right">
          {/* -------------div 1--------------------------- */}
          <div className="flex justify-end space-y-3">
            <div className="flex flex-col justify-end gap-[9px] text-right">
              <p className="text-right text-bodyxs font-normal text-[#534D60]">
                اسم لیست
              </p>
              <div className="flex items-center justify-center space-x-2">
                <svg
                  width="12"
                  height="13"
                  viewBox="0 0 12 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.99902 2.49864H10.0024"
                    stroke="#BDC0C6"
                    strokeWidth="0.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3.49951 4.49962H10.0022"
                    stroke="#BDC0C6"
                    strokeWidth="0.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3.49951 6.50035H10.0022"
                    stroke="#BDC0C6"
                    strokeWidth="0.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M1.99902 8.50132H10.0024"
                    stroke="#BDC0C6"
                    strokeWidth="0.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6.00098 10.5021H10.0026"
                    stroke="#BDC0C6"
                    strokeWidth="0.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p className="text-right text-bodyxs font-normal text-[#0E0E0E]">
                  .این یک تیتر برای این تسک است
                </p>
              </div>
            </div>
          </div>
          {/* -----div 2 ------- */}
          <div className="flex items-center justify-end space-x-1">
            <p className="text-bodyxs font-normal text-gray-primary">۲ / ۱۲</p>
            <div className="mt-1">
              <Checkbox />
            </div>
            <div className="text-right text-bodyxs font-normal text-[#343434]">
              ۵ مهر - فردا
            </div>
            <div>
              <svg
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.33333 14.4999V3.11987"
                  stroke="#FA5252"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12.6668 9.84675V3.16675"
                  stroke="#FA5252"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3.3335 9.8333C3.3335 9.8333 3.91683 9.34863 5.66683 9.34863C7.41683 9.34863 8.5835 10.5 10.3335 10.5C12.0835 10.5 12.6668 9.84863 12.6668 9.84863"
                  stroke="#FA5252"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3.3335 3.12133C3.3335 3.12133 3.91683 2.5 5.66683 2.5C7.41683 2.5 8.5835 3.65133 10.3335 3.65133C12.0835 3.65133 12.6668 3.16667 12.6668 3.16667"
                  stroke="#FA5252"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <div className="flex justify-end">
            <div className="flex justify-between gap-[8px]">
              <div>
                <svg
                  width="42"
                  height="24"
                  viewBox="0 0 42 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="42" height="24" rx="12" fill="#F3D9FA" />
                  <path
                    d="M11.069 13.9836C11.2618 13.9836 11.4327 13.9291 11.5818 13.82C11.7781 13.6818 11.8763 13.4764 11.8763 13.2036C11.8763 13.04 11.7345 12.8091 11.4509 12.5109C11.309 12.3655 11.1672 12.2345 11.0254 12.1182C10.509 12.5436 10.2509 12.9145 10.2509 13.2309C10.2509 13.5 10.3527 13.7018 10.5563 13.8364C10.6327 13.8873 10.7218 13.9255 10.8236 13.9509C10.9072 13.9727 10.989 13.9836 11.069 13.9836ZM10.7963 9.30909C10.8036 9.31273 10.8127 9.32 10.8236 9.33091C10.8454 9.35636 10.8727 9.38727 10.9054 9.42364C11.0072 9.52909 11.12 9.64909 11.2436 9.78364C11.6327 10.2018 12.06 10.6655 12.5254 11.1745C12.6709 11.3382 12.7909 11.48 12.8854 11.6C13.02 11.7673 13.1345 11.9291 13.229 12.0855C13.469 12.4927 13.589 12.9 13.589 13.3073C13.589 13.7182 13.5072 14.0855 13.3436 14.4091C13.2163 14.6527 13.0472 14.8618 12.8363 15.0364C12.389 15.4 11.8 15.5818 11.069 15.5818C10.3381 15.5818 9.75087 15.3982 9.30723 15.0309C9.09996 14.86 8.9345 14.6545 8.81087 14.4145C8.64723 14.0982 8.56541 13.7364 8.56541 13.3291C8.56541 12.6127 8.85996 11.9273 9.44905 11.2727L9.80905 10.8636L9.48723 10.52L10.7909 9.29818L10.7963 9.30909ZM17.3414 14.7527C17.3414 15.8873 17.056 16.7782 16.4851 17.4255C15.8487 18.1491 14.9178 18.5109 13.6923 18.5109H13.1523V16.7218H13.6923C14.3614 16.7218 14.8378 16.5709 15.1214 16.2691C15.4087 15.9673 15.5523 15.4618 15.5523 14.7527V11.8127H17.3414V14.7527ZM15.9996 9.62L14.9196 10.7109L13.8396 9.63091L14.9196 8.54L15.9996 9.62ZM18.3669 9.60364L17.2978 10.6836L16.1905 9.61455L17.2814 8.52364L18.3669 9.60364ZM17.0578 8.19636L16.1087 9.14545L15.1705 8.20727L16.1196 7.25818L17.0578 8.19636ZM21.9536 13.7982V13.2364C21.9536 12.9018 21.8827 12.6364 21.7409 12.44C21.5991 12.2473 21.4064 12.1509 21.1627 12.1509C20.9155 12.1509 20.7191 12.2473 20.5736 12.44C20.4391 12.6182 20.3718 12.8491 20.3718 13.1327C20.3718 13.1655 20.3736 13.2 20.3773 13.2364C20.3882 13.4291 20.4736 13.5745 20.6336 13.6727C20.7718 13.7564 20.9482 13.7982 21.1627 13.7982H21.9536ZM21.1627 10.3618C21.9664 10.3618 22.6064 10.6545 23.0827 11.24C23.5227 11.7745 23.7427 12.44 23.7427 13.2364V15.2382C23.7427 16.5036 23.2209 17.4073 22.1773 17.9491C21.7736 18.16 21.2936 18.3127 20.7373 18.4073C20.3045 18.4836 19.8318 18.5218 19.3191 18.5218V16.7327C20.2282 16.7327 20.9118 16.6055 21.37 16.3509C21.7409 16.1473 21.9264 15.8909 21.9264 15.5818H21.1627C20.5118 15.5818 19.9609 15.4073 19.51 15.0582C18.9609 14.6364 18.6864 14.0291 18.6864 13.2364C18.6864 12.4836 18.8682 11.8455 19.2318 11.3218C19.6755 10.6818 20.3191 10.3618 21.1627 10.3618ZM28.2047 11.8073V13.2964C28.2047 13.4527 28.2847 13.5782 28.4447 13.6727C28.572 13.7527 28.7011 13.7927 28.832 13.7927H29.0829V15.5818H28.832C28.6211 15.5818 28.3974 15.5473 28.1611 15.4782C28.0556 16.2818 27.7847 16.9291 27.3484 17.42C26.712 18.1436 25.7811 18.5055 24.5556 18.5055H24.0156V16.7164H24.5556C25.2247 16.7164 25.7011 16.5655 25.9847 16.2636C26.272 15.9618 26.4156 15.4564 26.4156 14.7473V11.8073H28.2047ZM33.5474 12.8109C33.5765 12.9855 33.591 13.1527 33.591 13.3127C33.591 13.8073 33.4492 14.2509 33.1656 14.6436C32.711 15.2691 31.971 15.5818 30.9456 15.5818H28.8129V13.7927H30.9074C31.2347 13.7927 31.4656 13.7491 31.6001 13.6618C31.7383 13.5782 31.8074 13.4455 31.8074 13.2636C31.8074 13.2091 31.8001 13.1491 31.7856 13.0836C31.7492 12.8982 31.7129 12.7091 31.6765 12.5164C31.6619 12.4436 31.6474 12.3655 31.6329 12.2818L31.611 12.1782L31.5947 12.0745C31.5401 11.7764 31.4983 11.5636 31.4692 11.4364L33.1765 10.9182C33.2856 11.4309 33.4092 12.0618 33.5474 12.8109ZM30.0947 18.6091L29.0147 17.5509L30.0947 16.4382L31.1747 17.5509L30.0947 18.6091ZM32.4456 18.6309L31.3547 17.5509L32.4619 16.4709L33.531 17.5509L32.4456 18.6309ZM31.2947 19.8909L30.3456 18.9418L31.2838 18.0036L32.2329 18.9527L31.2947 19.8909Z"
                    fill="#BE4BDB"
                  />
                </svg>
              </div>
              <div>
                <svg
                  width="41"
                  height="24"
                  viewBox="0 0 41 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="41" height="24" rx="12" fill="#D0EBFF" />
                  <path
                    d="M22.7243 12.74C22.7607 12.8964 22.7789 13.06 22.7789 13.2309C22.7789 13.3691 22.7661 13.5127 22.7407 13.6618C22.6789 14 22.557 14.3073 22.3752 14.5836C21.9425 15.2491 21.3116 15.5818 20.4825 15.5818C20.108 15.5818 19.757 15.5255 19.4298 15.4127C19.208 15.3291 19.0061 15.22 18.8243 15.0855C18.3916 15.4164 17.8952 15.5818 17.3352 15.5818C17.0261 15.5818 16.7461 15.5473 16.4952 15.4782C16.4698 16.2964 16.2334 16.9655 15.7861 17.4855C15.488 17.8345 15.1025 18.0964 14.6298 18.2709C14.157 18.4382 13.6207 18.5218 13.0207 18.5218H11.7825C11.1934 18.5218 10.657 18.3909 10.1734 18.1291C9.68977 17.8709 9.30068 17.5055 9.00614 17.0327C8.80614 16.7018 8.6625 16.3436 8.57523 15.9582C8.50614 15.6455 8.47159 15.3145 8.47159 14.9655C8.47159 14.8782 8.47341 14.7909 8.47705 14.7036C8.53159 13.7909 8.81705 12.8182 9.33341 11.7855L10.9316 12.5764C10.5207 13.4127 10.297 14.1564 10.2607 14.8073C10.257 14.8727 10.2552 14.9364 10.2552 14.9982C10.2552 15.4382 10.3461 15.8018 10.528 16.0891C10.677 16.3291 10.8789 16.5018 11.1334 16.6073C11.3261 16.6909 11.5425 16.7327 11.7825 16.7327H13.0207C13.7043 16.7327 14.1643 16.62 14.4007 16.3945C14.608 16.1982 14.7116 15.8345 14.7116 15.3036V11.8127H16.4952V13.1382C16.4952 13.5745 16.7352 13.7927 17.2152 13.7927C17.4152 13.7927 17.5734 13.7545 17.6898 13.6782C17.8534 13.5727 17.9352 13.3927 17.9352 13.1382V11.8127H19.7243V13.1382C19.7243 13.3636 19.7661 13.5236 19.8498 13.6182C19.948 13.7345 20.128 13.7927 20.3898 13.7927C20.8043 13.7927 21.0116 13.6491 21.0116 13.3618C21.0116 13.3 21.0025 13.2309 20.9843 13.1545C20.777 12.3 20.6425 11.7273 20.5807 11.4364L22.3152 11.0218C22.4207 11.4582 22.557 12.0309 22.7243 12.74ZM26.5719 14.7527C26.5719 15.8873 26.2864 16.7782 25.7155 17.4255C25.0792 18.1491 24.1483 18.5109 22.9228 18.5109H22.3828V16.7218H22.9228C23.5919 16.7218 24.0683 16.5709 24.3519 16.2691C24.6392 15.9673 24.7828 15.4618 24.7828 14.7527V11.8127H26.5719V14.7527ZM30.3287 9.30909L30.4269 9.45091C30.4487 9.48364 30.4687 9.51091 30.4869 9.53273C30.5123 9.56909 30.536 9.60545 30.5578 9.64182C30.6196 9.72909 30.685 9.82 30.7541 9.91455C30.9323 10.1727 31.1305 10.4582 31.3487 10.7709C31.6323 11.1709 31.9414 11.6091 32.276 12.0855C32.5378 12.4636 32.6869 12.8582 32.7232 13.2691C32.7305 13.3418 32.7341 13.4145 32.7341 13.4873C32.7341 13.8291 32.656 14.1527 32.4996 14.4582C32.3069 14.8255 32.0305 15.1109 31.6705 15.3145C31.3069 15.5218 30.8996 15.6255 30.4487 15.6255C29.925 15.6255 29.2432 15.5164 28.4032 15.2982C28.1523 15.2327 27.8996 15.16 27.645 15.08C27.565 15.0582 27.4887 15.0345 27.416 15.0091C27.3905 15.0018 27.3687 14.9964 27.3505 14.9927L27.3341 14.9818H27.3232L27.896 13.2855C28.0341 13.3327 28.196 13.3836 28.3814 13.4382C28.6105 13.5036 28.836 13.5636 29.0578 13.6182C29.6541 13.7636 30.1178 13.8364 30.4487 13.8364C30.685 13.8364 30.8396 13.7691 30.9123 13.6345C30.9378 13.5836 30.9505 13.5291 30.9505 13.4709C30.9505 13.3655 30.905 13.2473 30.8141 13.1164C30.4796 12.64 30.1705 12.2 29.8869 11.7964C29.6723 11.4909 29.4723 11.2055 29.2869 10.94C28.996 10.5291 28.8505 10.3218 28.8505 10.3182L30.3287 9.30909Z"
                    fill="#228BE6"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default MiniTaskCard
