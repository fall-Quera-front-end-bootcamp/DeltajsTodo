const Comment = (): JSX.Element => {
  return (
    <main className="w-[660px] bg-[#ffffff] p-6 gap-6 rounded-t-[12px] border-solid border-[1px] border-[#F4F4F4] shadow-lg">
      <section className="flex flex-col space-y-2">
        {/* Heder */}
        <div className="flex justify-between items-center">
          <div>
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
                d="M12.0003 3.9967C7.02826 3.9967 2.99658 7.35678 2.99658 11.4969C3.07174 13.9952 4.44959 16.2718 6.62809 17.4971C6.4117 18.0852 6.11079 18.6386 5.73486 19.1399C5.52737 19.4428 5.5325 19.8434 5.74769 20.141C5.96287 20.4385 6.34174 20.5688 6.69442 20.4666C7.89725 20.1164 9.02941 19.5582 10.0395 18.8171C10.6861 18.9383 11.3425 18.9986 12.0003 18.9971C16.9724 18.9971 21.0041 15.6371 21.0041 11.4969C21.0041 7.35679 16.9724 3.9967 12.0003 3.9967Z"
                stroke="#AEAEAE"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8.99902 9.99911H15.0015"
                stroke="#AEAEAE"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8.99902 13.0005H12.0003"
                stroke="#AEAEAE"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <p className="font-medium text-[16px] text-right">کامنت شما</p>
        </div>
        {/* ------------- */}
        {/* body textarea */}
        <div>
          <textarea
            id="message"
            className="block p-2.5 w-full text-right text-[#1E1E1E] rounded-[12px] border-solid border-gray-secondary focus:ring-blue-500"
            placeholder=""
          ></textarea>
        </div>
        {/* -------------- */}
        {/* footer */}
        <div className="flex justify-between items-center">
          <button className="w-[82px] h-[29px] bg-[#208D8E] py-[6px] px-[12px] rounded-[6px] gap-[4px] font-extrabold text-white text-bodyxs text-center">
            ثبت کامنت
          </button>
          <div className="flex flex-row items-center space-x-[16px]">
            <div>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21 12C21 7.038 16.962 3 12 3C7.037 3 3 7.037 3 12"
                  stroke="#C9CBDA"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3 12C3 16.963 7.037 21 12 21C16.963 21 21 16.962 21 12"
                  stroke="#C9CBDA"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15.3281 9.5C15.1901 9.5 15.0781 9.612 15.0791 9.75C15.0791 9.888 15.1911 10 15.3291 10C15.4671 10 15.5791 9.888 15.5791 9.75C15.5791 9.612 15.4671 9.5 15.3281 9.5"
                  stroke="#C9CBDA"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8.63914 9.5C8.50114 9.5 8.38914 9.612 8.39014 9.75C8.39014 9.888 8.50214 10 8.64014 10C8.77814 10 8.89014 9.888 8.89014 9.75C8.89014 9.612 8.77814 9.5 8.63914 9.5"
                  stroke="#C9CBDA"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 17C13.667 17 15 15.667 15 14H9C9 15.667 10.333 17 12 17V17Z"
                  stroke="#C9CBDA"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div>
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
                  d="M18.414 6.414L15.586 3.586C15.211 3.211 14.702 3 14.172 3H7C5.895 3 5 3.895 5 5V19C5 20.105 5.895 21 7 21H17C18.105 21 19 20.105 19 19V7.828C19 7.298 18.789 6.789 18.414 6.414V6.414Z"
                  stroke="#C9CBDA"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M19 8H15C14.448 8 14 7.552 14 7V3"
                  stroke="#C9CBDA"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.99951 13.0004L10.9529 13.9538C11.7034 14.7043 12.7212 15.1259 13.7826 15.1259C14.8439 15.1259 15.8618 14.7043 16.6123 13.9538L19.6445 10.9215C21.4575 9.10839 21.4575 6.16893 19.6445 4.35579V4.35579C17.8314 2.54286 14.8919 2.54286 13.0788 4.35579L12.1914 5.24416"
                  stroke="#C9CBDA"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14.0008 9.99919L13.0474 9.04579C12.297 8.29529 11.2791 7.87366 10.2177 7.87366C9.15639 7.87366 8.13852 8.29529 7.38806 9.04579L4.35579 12.0781C2.54286 13.8912 2.54286 16.8307 4.35579 18.6438V18.6438C6.16893 20.4567 9.10839 20.4567 10.9215 18.6438L11.8089 17.7554"
                  stroke="#C9CBDA"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 12C16 14.209 14.209 16 12 16C9.791 16 8 14.209 8 12C8 9.791 9.791 8 12 8V8C14.209 8 16 9.791 16 12V13.5C16 14.881 17.119 16 18.5 16C19.881 16 21 14.881 21 13.5V12C21 7.029 16.971 3 12 3C7.029 3 3 7.029 3 12C3 16.971 7.029 21 12 21C13.149 21 14.317 20.782 15.444 20.315C16.052 20.063 16.614 19.747 17.133 19.386"
                  stroke="#C9CBDA"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Comment
