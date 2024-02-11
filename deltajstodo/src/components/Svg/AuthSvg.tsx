import "../../dist/output.css";

function AuthSvg(): JSX.Element {
  return (
    <div className="fixed bottom-0 w-[100%] h-[60vh] z-[-1000]">
      <svg width="100%" height="100%" viewBox="0 0 100% 100%" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 700 L0 300 L2000 0 L2000 700 Z" fill="url(#paint0_linear_0_214)" />
        <defs>
          <linearGradient
            id="paint0_linear_0_214"
            x1="1440"
            y1="257.5"
            x2="-55"
            y2="287"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#06846F" />
            <stop offset="1" stop-color="#54BEE8" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

export default AuthSvg;
