import dekstopImg from '..Imgs/dekstopImgpng.png'

function LargTaskCard(): JSX.Element {
  return (
    <section className="w-[249px] h-[350px] rounded-[16px] p-[16px] gap-[16px] bg-[#ffff]">
      <div className="flex flex-col justify-center items-center">
        {/* <img
          src={dekstopImg}
          alt="dekstopImg"
          className="w-[217px] h-[134px] rounded-[4px]"
        /> */}
        <div className="bg-red-primary w-[217px] h-[134px] rounded-[4px]"></div>
        <div className="flex flex-col justify-end text-right space-y-2">
          <div className="flex justify-between space-y-3">
            <div className="flex justify-center items-center mb-[6px] mr-[4px]">
              <svg
                width="24"
                height="22"
                viewBox="0 0 24 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="23.8479"
                  height="21.8479"
                  rx="10.924"
                  fill="#FFF3BF"
                />
                <path
                  d="M10.7061 14.1021H9.70019L7.12258 9.9971V14.1021H6.11668V8.31813H7.12258L9.70759 12.4379V8.31813H10.7061V14.1021ZM13.1946 8.31813L14.8662 12.7522L16.5304 8.31813H17.8284V14.1021H16.8262V12.1938L16.9261 9.64577L15.2175 14.1021H14.5001L12.7952 9.64947L12.8951 12.1938V14.1021H11.8929V8.31813H13.1946Z"
                  fill="#FAB005"
                />
              </svg>
            </div>
            <div className="flex flex-col justify-end text-right gap-[9px]">
              <p className="font-yekan font-normal text-bodyxs text-right text-[#534D60]">
                اسم لیست
              </p>
              <div className="flex justify-center items-center space-x-2">
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
                    stroke-width="0.75"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M3.49951 4.49962H10.0022"
                    stroke="#BDC0C6"
                    stroke-width="0.75"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M3.49951 6.50035H10.0022"
                    stroke="#BDC0C6"
                    stroke-width="0.75"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M1.99902 8.50132H10.0024"
                    stroke="#BDC0C6"
                    stroke-width="0.75"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M6.00098 10.5021H10.0026"
                    stroke="#BDC0C6"
                    stroke-width="0.75"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <p className="font-yekan font-normal text-bodyxs text-right text-[#0E0E0E]">
                  این یک تیتر برای این تسک است.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-end items-center flex-row">
            <p className="font-yekan text-bodyxs font-normal">۲ / ۱۲</p>
            <div>
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                className="w-[16.01px] h-[16.01px] accent-brand-primary  "
              />
            </div>
            <div>۵ مهر - فردا</div>
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
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12.6668 9.84675V3.16675"
                  stroke="#FA5252"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3.3335 9.8333C3.3335 9.8333 3.91683 9.34863 5.66683 9.34863C7.41683 9.34863 8.5835 10.5 10.3335 10.5C12.0835 10.5 12.6668 9.84863 12.6668 9.84863"
                  stroke="#FA5252"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3.3335 3.12133C3.3335 3.12133 3.91683 2.5 5.66683 2.5C7.41683 2.5 8.5835 3.65133 10.3335 3.65133C12.0835 3.65133 12.6668 3.16667 12.6668 3.16667"
                  stroke="#FA5252"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </section>
  )
}
export default LargTaskCard
