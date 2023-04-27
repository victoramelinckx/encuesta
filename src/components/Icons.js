import * as React from "react";

export const GithubIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 512 512"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <path fill="none" d="M0 0h512v512H0z" />
    <path
      fill="currentColor"
      d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 0 0 3.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 0 1-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0 0 25.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 0 1 5-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 0 1 112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 0 1 5 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 0 0 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32Z"
    />
  </svg>
);

export const ArrowDown = ({ className, ...rest }) => (
  <svg
  width="19"
  height="29"
  viewBox="0 0 19 29"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  className={`text-current ${className}`}
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M9.99931 0C10.2645 0 10.5189 0.105357 10.7064 0.292893C10.894 0.48043 10.9993 0.734784 10.9993 1V24.586L17.2913 18.292C17.4791 18.1042 17.7338 17.9987 17.9993 17.9987C18.2649 17.9987 18.5195 18.1042 18.7073 18.292C18.8951 18.4798 19.0006 18.7344 19.0006 19C19.0006 19.2656 18.8951 19.5202 18.7073 19.708L10.7073 27.708C10.6144 27.8011 10.5041 27.875 10.3826 27.9254C10.2611 27.9758 10.1308 28.0018 9.99931 28.0018C9.86777 28.0018 9.73753 27.9758 9.61604 27.9254C9.49455 27.875 9.3842 27.8011 9.29131 27.708L1.29131 19.708C1.10354 19.5202 0.998047 19.2656 0.998047 19C0.998047 18.7344 1.10354 18.4798 1.29131 18.292C1.47908 18.1042 1.73376 17.9987 1.99931 17.9987C2.26486 17.9987 2.51954 18.1042 2.70731 18.292L8.99931 24.586V1C8.99931 0.734784 9.10467 0.48043 9.2922 0.292893C9.47974 0.105357 9.73409 0 9.99931 0Z"
    />
  </svg>
);

export const TwitterIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 256 209"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <path fill="none" d="M0 0h256v209H0z" />
    <path
      fill="#55acee"
      d="M256 25.45a105.04 105.04 0 0 1-30.166 8.27c10.845-6.5 19.172-16.793 23.093-29.057a105.183 105.183 0 0 1-33.351 12.745C205.995 7.201 192.346.822 177.239.822c-29.006 0-52.523 23.516-52.523 52.52 0 4.117.465 8.125 1.36 11.97-43.65-2.191-82.35-23.1-108.255-54.876-4.52 7.757-7.11 16.78-7.11 26.404 0 18.222 9.273 34.297 23.365 43.716a52.312 52.312 0 0 1-23.79-6.57c-.003.22-.003.44-.003.661 0 25.447 18.104 46.675 42.13 51.5a52.592 52.592 0 0 1-23.718.9c6.683 20.866 26.08 36.05 49.062 36.475-17.975 14.086-40.622 22.483-65.228 22.483-4.24 0-8.42-.249-12.529-.734 23.243 14.902 50.85 23.597 80.51 23.597 96.607 0 149.434-80.031 149.434-149.435 0-2.278-.05-4.543-.152-6.795A106.748 106.748 0 0 0 256 25.45"
    />
  </svg>
);

export const LinkedInIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 256 256"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <path fill="none" d="M0 0h256v256H0z" />
    <g fill="none">
      <rect width={256} height={256} fill="#fff" rx={60} />
      <rect width={256} height={256} fill="#0A66C2" rx={60} />
      <path
        fill="#fff"
        d="M184.715 217.685h29.27a4 4 0 0 0 4-3.999l.015-61.842c0-32.323-6.965-57.168-44.738-57.168-14.359-.534-27.9 6.868-35.207 19.228a.32.32 0 0 1-.595-.161V101.66a4 4 0 0 0-4-4h-27.777a4 4 0 0 0-4 4v112.02a4 4 0 0 0 4 4h29.268a4 4 0 0 0 4-4v-55.373c0-15.657 2.97-30.82 22.381-30.82 19.135 0 19.383 17.916 19.383 31.834v54.364a4 4 0 0 0 4 4ZM38 59.627c0 11.865 9.767 21.627 21.632 21.627 11.862-.001 21.623-9.769 21.623-21.631C81.253 47.761 71.491 38 59.628 38 47.762 38 38 47.763 38 59.627Zm6.959 158.058h29.307a4 4 0 0 0 4-4V101.66a4 4 0 0 0-4-4H44.959a4 4 0 0 0-4 4v112.025a4 4 0 0 0 4 4Z"
      />
    </g>
  </svg>
);

export const PinterestIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 256 256"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <path fill="none" d="M0 0h256v256H0z" />
    <path
      fill="#CB1F27"
      d="M0 128.002c0 52.414 31.518 97.442 76.619 117.239-.36-8.938-.064-19.668 2.228-29.393 2.461-10.391 16.47-69.748 16.47-69.748s-4.089-8.173-4.089-20.252c0-18.969 10.994-33.136 24.686-33.136 11.643 0 17.268 8.745 17.268 19.217 0 11.704-7.465 29.211-11.304 45.426-3.207 13.578 6.808 24.653 20.203 24.653 24.252 0 40.586-31.149 40.586-68.055 0-28.054-18.895-49.052-53.262-49.052-38.828 0-63.017 28.956-63.017 61.3 0 11.152 3.288 19.016 8.438 25.106 2.368 2.797 2.697 3.922 1.84 7.134-.614 2.355-2.024 8.025-2.608 10.272-.852 3.242-3.479 4.401-6.409 3.204-17.884-7.301-26.213-26.886-26.213-48.902 0-36.361 30.666-79.961 91.482-79.961 48.87 0 81.035 35.364 81.035 73.325 0 50.213-27.916 87.726-69.066 87.726-13.819 0-26.818-7.47-31.271-15.955 0 0-7.431 29.492-9.005 35.187-2.714 9.869-8.026 19.733-12.883 27.421a127.897 127.897 0 0 0 36.277 5.249c70.684 0 127.996-57.309 127.996-128.005C256.001 57.309 198.689 0 128.005 0 57.314 0 0 57.309 0 128.002Z"
    />
  </svg>
);

export const DribbbleIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 256 256"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <path fill="none" d="M0 0h256v256H0z" />
    <path
      fill="#E74D89"
      d="M128 8.5c66 0 119.4 53.4 119.4 119.3S194 247.2 128 247.2 8.6 193.8 8.6 127.9 62 8.5 128 8.5Z"
    />
    <path
      fill="#B2215A"
      d="M128 255.7c-70.6 0-128-57.3-128-127.8C0 57.3 57.4 0 128 0s128 57.3 128 127.8-57.4 127.9-128 127.9Zm107.9-110.4c-3.7-1.2-33.8-10.1-68.1-4.7 14.3 39.2 20.1 71.2 21.2 77.8 24.6-16.5 42.1-42.7 46.9-73.1Zm-65.2 83.2c-1.6-9.6-8-43-23.3-82.8-.2.1-.5.2-.7.2-61.7 21.5-83.8 64.2-85.8 68.2 18.5 14.4 41.8 23 67.1 23 15.1.1 29.6-3 42.7-8.6ZM46.8 201c2.5-4.2 32.5-53.8 88.9-72.1 1.4-.5 2.9-.9 4.3-1.3-2.7-6.2-5.7-12.4-8.9-18.5-54.6 16.3-107.6 15.6-112.4 15.5 0 1.1-.1 2.2-.1 3.3.1 28.1 10.7 53.7 28.2 73.1ZM21 105.6c4.9.1 49.9.3 101.1-13.3C104 60.1 84.4 33.1 81.6 29.2 50.9 43.6 28.1 71.8 21 105.6Zm81.4-83.8c3 4 22.9 31 40.8 63.9 38.9-14.6 55.3-36.6 57.3-39.4-19.3-17.1-44.7-27.5-72.5-27.5-8.8 0-17.4 1.1-25.6 3Zm110.2 37.1c-2.3 3.1-20.6 26.6-61 43.1 2.5 5.2 5 10.5 7.3 15.8.8 1.9 1.6 3.8 2.4 5.6 36.4-4.6 72.5 2.8 76.1 3.5-.3-25.7-9.5-49.4-24.8-68Z"
    />
  </svg>
);

export const IQZoneIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="0.4em"
    height="0.4em"
    //viewBox="0 0 256 256"
    {...rest}
    className={`w-full h-auto ${className}`}
    viewBox="0 0 368.000000 456.000000"
    transform="translate(3, 3)"
    preserveAspectRatio="xMidYMid meet">

    <g transform="translate(0.000000,456.000000) scale(0.100000,-0.100000)"
    fill="#0464eb" stroke="none">
    <path d="M2220 4527 c-149 -51 -263 -151 -329 -289 -81 -171 -83 -337 -6 -503
    133 -287 466 -406 744 -265 124 62 237 198 282 340 28 86 30 240 5 325 -55
    187 -202 342 -374 395 -92 28 -235 27 -322 -3z"/>
    <path d="M3580 3837 c-78 -45 -138 -88 -269 -190 -185 -145 -350 -252 -503
    -327 -200 -98 -275 -121 -423 -127 -166 -7 -235 15 -510 157 -228 117 -294
    140 -406 140 -163 -1 -323 -60 -628 -234 -375 -213 -525 -315 -507 -345 4 -6
    26 -11 48 -11 45 0 71 4 318 50 90 17 230 39 311 47 l147 16 87 -28 c116 -38
    187 -91 253 -189 65 -97 82 -154 89 -292 5 -91 2 -129 -17 -215 -75 -354 -270
    -731 -443 -857 -129 -94 -389 -156 -587 -139 -65 5 -270 67 -395 120 -33 14
    -80 28 -104 32 -52 9 -52 5 8 -83 131 -192 366 -394 554 -476 68 -29 78 -30
    192 -29 140 2 295 36 550 123 211 71 477 147 565 161 45 7 130 9 210 6 160 -6
    233 -27 363 -106 195 -118 289 -197 476 -402 439 -479 577 -620 622 -634 16
    -5 26 -2 36 11 18 24 17 33 -11 149 -61 249 -293 796 -421 990 -70 107 -186
    212 -370 336 -236 157 -302 229 -348 374 -45 143 -17 349 70 517 87 169 185
    286 398 472 251 219 419 394 512 531 149 222 223 371 223 452 0 43 -17 43 -90
    0z"/>
    </g>
    </svg>
);

export const TranslateIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 48 48"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
  <path fill="#CFD8DC" d="M15,13h25c1.104,0,2,0.896,2,2v25c0,1.104-0.896,2-2,2H26L15,13z"/>
  <path fill="#546E7A" d="M26.832,34.854l-0.916-1.776l0.889-0.459c0.061-0.031,6.101-3.208,9.043-9.104l0.446-0.895l1.79,0.893l-0.447,0.895c-3.241,6.496-9.645,9.85-9.916,9.989L26.832,34.854z"/>
  <path fill="#546E7A" d="M38.019 34l-.87-.49c-.207-.116-5.092-2.901-8.496-7.667l1.627-1.162c3.139 4.394 7.805 7.061 7.851 7.087L39 32.26 38.019 34zM26 22H40V24H26z"/>
  <path fill="#546E7A" d="M32 20H34V24H32z"/>
  <path fill="#2196F3" d="M33,35H8c-1.104,0-2-0.896-2-2V8c0-1.104,0.896-2,2-2h14L33,35z"/>
  <path fill="#3F51B5" d="M26 42L23 35 33 35z"/>
  <path fill="#FFF" d="M19.172,24h-4.36l-1.008,3H11l4.764-13h2.444L23,27h-2.805L19.172,24z M15.444,22h3.101l-1.559-4.714L15.444,22z"/>
</svg>
);

export const FacebookIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 48 48"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
  <linearGradient id="CXanuwD9EGkBgTn76_1mxa" x1="9.993" x2="40.615" y1="-299.993" y2="-330.615" gradientTransform="matrix(1 0 0 -1 0 -290)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#2aa4f4"/><stop offset="1" stop-color="#007ad9"/></linearGradient><path fill="url(#CXanuwD9EGkBgTn76_1mxa)" d="M24,4C12.954,4,4,12.954,4,24c0,10.028,7.379,18.331,17.004,19.777	C21.981,43.924,22.982,41,24,41c0.919,0,1.824,2.938,2.711,2.818C36.475,42.495,44,34.127,44,24C44,12.954,35.046,4,24,4z"/><path d="M27.707,21.169c0-1.424,0.305-3.121,1.757-3.121h4.283l-0.001-5.617l-0.05-0.852l-0.846-0.114	c-0.608-0.082-1.873-0.253-4.206-0.253c-5.569,0-8.636,3.315-8.636,9.334v2.498H15.06v7.258h4.948V43.6	C21.298,43.861,22.633,44,24,44c1.268,0,2.504-0.131,3.707-0.357V30.301h5.033l1.122-7.258h-6.155V21.169z" opacity=".05"/><path d="M27.207,21.169c0-1.353,0.293-3.621,2.257-3.621h3.783V12.46l-0.026-0.44l-0.433-0.059	c-0.597-0.081-1.838-0.249-4.143-0.249c-5.323,0-8.136,3.055-8.136,8.834v2.998H15.56v6.258h4.948v13.874	C21.644,43.876,22.806,44,24,44c1.094,0,2.16-0.112,3.207-0.281V29.801h5.104l0.967-6.258h-6.072V21.169z" opacity=".05"/><path fill="#fff" d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46	c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.475	C21.988,43.923,22.981,44,24,44c0.921,0,1.82-0.062,2.707-0.182V29.301z"/></svg>
);

export const InstagramIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 48 48"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
  <radialGradient id="yOrnnhliCrdS2gy~4tD8ma" cx="19.38" cy="42.035" r="44.899" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fd5"/><stop offset=".328" stop-color="#ff543f"/><stop offset=".348" stop-color="#fc5245"/><stop offset=".504" stop-color="#e64771"/><stop offset=".643" stop-color="#d53e91"/><stop offset=".761" stop-color="#cc39a4"/><stop offset=".841" stop-color="#c837ab"/></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8ma)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"/><radialGradient id="yOrnnhliCrdS2gy~4tD8mb" cx="11.786" cy="5.54" r="29.813" gradientTransform="matrix(1 0 0 .6663 0 1.849)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#4168c9"/><stop offset=".999" stop-color="#4168c9" stop-opacity="0"/></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8mb)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"/><path fill="#fff" d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"/><circle cx="31.5" cy="16.5" r="1.5" fill="#fff"/><path fill="#fff" d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"/></svg>
);

export const SunIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <g
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <g strokeDasharray="2">
        <path d="M12 21v1M21 12h1M12 3v-1M3 12h-1">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            dur="0.2s"
            values="4;2"
          />
        </path>
        <path d="M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.2s"
            dur="0.2s"
            values="4;2"
          />
        </path>
      </g>
      <path
        fill="currentColor"
        d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z"
        opacity="0"
      >
        <set attributeName="opacity" begin="0.5s" to="1" />
      </path>
    </g>
    <g fill="currentColor" fillOpacity="0">
      <path d="m15.22 6.03l2.53-1.94L14.56 4L13.5 1l-1.06 3l-3.19.09l2.53 1.94l-.91 3.06l2.63-1.81l2.63 1.81z">
        <animate
          id="lineMdSunnyFilledLoopToMoonFilledLoopTransition0"
          fill="freeze"
          attributeName="fill-opacity"
          begin="0.6s;lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+6s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.2s"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="M13.61 5.25L15.25 4l-2.06-.05L12.5 2l-.69 1.95L9.75 4l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.2s"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="M19.61 12.25L21.25 11l-2.06-.05L18.5 9l-.69 1.95l-2.06.05l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+0.4s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.8s"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="m20.828 9.731l1.876-1.439l-2.366-.067L19.552 6l-.786 2.225l-2.366.067l1.876 1.439L17.601 12l1.951-1.342L21.503 12z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3.4s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.6s"
          dur="0.4s"
          values="1;0"
        />
      </path>
    </g>
    <mask id="lineMdSunnyFilledLoopToMoonFilledLoopTransition1">
      <circle cx="12" cy="12" r="12" fill="#fff" />
      <circle cx="22" cy="2" r="3" fill="#fff">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.1s"
          dur="0.4s"
          values="22;18"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.1s"
          dur="0.4s"
          values="2;6"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.1s"
          dur="0.4s"
          values="3;12"
        />
      </circle>
      <circle cx="22" cy="2" r="1">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.1s"
          dur="0.4s"
          values="22;18"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.1s"
          dur="0.4s"
          values="2;6"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.1s"
          dur="0.4s"
          values="1;10"
        />
      </circle>
    </mask>
    <circle
      cx="12"
      cy="12"
      r="6"
      fill="currentColor"
      mask="url(#lineMdSunnyFilledLoopToMoonFilledLoopTransition1)"
    >
      <set attributeName="opacity" begin="0.5s" to="0" />
      <animate
        fill="freeze"
        attributeName="r"
        begin="0.1s"
        dur="0.4s"
        values="6;10"
      />
    </circle>
  </svg>
);

export const MoonIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <rect x="0" y="0" width="24" height="24" fill="rgba(255, 255, 255, 0)" />
    <g
      fill="none"
      stroke="currentColor"
      strokeDasharray="2"
      strokeDashoffset="2"
      strokeLinecap="round"
      strokeWidth="2"
    >
      <path d="M0 0">
        <animate
          fill="freeze"
          attributeName="d"
          begin="1.2s"
          dur="0.2s"
          values="M12 19v1M19 12h1M12 5v-1M5 12h-1;M12 21v1M21 12h1M12 3v-1M3 12h-1"
        />
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="1.2s"
          dur="0.2s"
          values="2;0"
        />
      </path>
      <path d="M0 0">
        <animate
          fill="freeze"
          attributeName="d"
          begin="1.5s"
          dur="0.2s"
          values="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5;M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5"
        />
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="1.5s"
          dur="1.2s"
          values="2;0"
        />
      </path>
      <animateTransform
        attributeName="transform"
        dur="30s"
        repeatCount="indefinite"
        type="rotate"
        values="0 12 12;360 12 12"
      />
    </g>
    <g fill="currentColor">
      <path d="M15.22 6.03L17.75 4.09L14.56 4L13.5 1L12.44 4L9.25 4.09L11.78 6.03L10.87 9.09L13.5 7.28L16.13 9.09L15.22 6.03Z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="M19.61 12.25L21.25 11L19.19 10.95L18.5 9L17.81 10.95L15.75 11L17.39 12.25L16.8 14.23L18.5 13.06L20.2 14.23L19.61 12.25Z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="0.2s"
          dur="0.4s"
          values="1;0"
        />
      </path>
    </g>
    <g
      fill="currentColor"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <path d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z" />
      <set attributeName="opacity" begin="0.6s" to="0" />
    </g>
    <mask id="lineMdMoonFilledToSunnyFilledLoopTransition0">
      <circle cx="12" cy="12" r="12" fill="#fff" />
      <circle cx="18" cy="6" r="12" fill="#fff">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.6s"
          dur="0.4s"
          values="18;22"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.6s"
          dur="0.4s"
          values="6;2"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.6s"
          dur="0.4s"
          values="12;3"
        />
      </circle>
      <circle cx="18" cy="6" r="10">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.6s"
          dur="0.4s"
          values="18;22"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.6s"
          dur="0.4s"
          values="6;2"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.6s"
          dur="0.4s"
          values="10;1"
        />
      </circle>
    </mask>
    <circle
      cx="12"
      cy="12"
      r="10"
      fill="currentColor"
      mask="url(#lineMdMoonFilledToSunnyFilledLoopTransition0)"
      opacity="0"
    >
      <set attributeName="opacity" begin="0.6s" to="1" />
      <animate
        fill="freeze"
        attributeName="r"
        begin="0.6s"
        dur="0.4s"
        values="10;6"
      />
    </circle>
  </svg>
);

export const CircularText = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="496"
    height="496"
    viewBox="0 0 1080.000000 1080.000000"
    xmlSpace="preserve"
    className={`w-full h-auto ${className}`}
    {...rest}
  >
  <g transform="translate(0.000000,1080.000000) scale(0.100000,-0.100000)"
  stroke="none">
  <path d="M5474 9164 c-6 -3 -123 -8 -260 -12 l-249 -7 -3 -54 c-2 -30 0 -57 5
  -61 4 -4 62 -4 128 -1 70 4 125 3 133 -2 9 -7 12 -54 12 -176 0 -220 19 -534
  34 -543 6 -4 35 -8 65 -8 l54 0 -8 313 c-4 171 -9 337 -9 367 l-1 55 125 5
  c69 3 131 9 138 13 13 9 15 38 6 86 l-6 31 -77 -1 c-42 0 -81 -3 -87 -5z"/>
  <path d="M5787 8926 c-3 -8 -9 -43 -13 -78 -4 -35 -11 -68 -15 -74 -5 -6 -12
  -40 -15 -75 -3 -35 -12 -81 -20 -102 -21 -56 -18 -185 4 -222 35 -56 81 -93
  136 -109 101 -30 180 -18 249 36 l38 30 -7 -60 c-6 -56 -5 -59 17 -65 13 -4
  43 -7 66 -7 l42 0 6 48 c4 26 11 61 16 77 5 17 13 59 19 95 5 36 14 83 19 105
  27 109 42 186 48 242 l6 62 -35 6 c-19 4 -48 5 -64 3 -27 -3 -30 -7 -41 -68
  -6 -36 -16 -83 -22 -105 -6 -22 -11 -57 -11 -77 0 -20 -4 -39 -9 -42 -5 -3
  -12 -21 -15 -39 -7 -40 -45 -93 -83 -119 -39 -25 -131 -24 -183 2 -29 15 -44
  32 -60 67 -20 46 -20 51 -6 110 9 34 16 76 16 93 0 17 4 39 9 48 12 22 41 193
  35 203 -6 10 -72 29 -100 29 -12 0 -24 -6 -27 -14z"/>
  <path d="M6693 8833 c-38 -87 -55 -123 -58 -123 -1 0 -19 7 -39 15 -34 14 -36
  14 -50 -8 -24 -36 -24 -70 -1 -75 11 -2 28 -11 37 -19 17 -15 12 -43 -19 -103
  -7 -14 -13 -31 -13 -38 0 -8 -7 -26 -15 -40 -24 -45 -55 -120 -55 -135 0 -8
  -7 -28 -15 -43 -50 -96 41 -212 181 -230 73 -9 96 5 92 58 -3 41 -3 41 -58 55
  -65 16 -94 45 -85 82 7 29 49 139 70 186 8 17 25 56 39 87 l25 57 33 -10 c18
  -6 51 -20 74 -30 22 -11 48 -19 56 -19 16 0 48 50 48 75 0 6 -38 26 -85 44
  -47 19 -85 38 -85 43 0 5 12 36 26 69 31 75 29 103 -8 107 -14 2 -32 10 -38
  18 -20 24 -39 16 -57 -23z"/>
  <path d="M3955 8660 c-3 -5 -21 -17 -40 -24 -32 -14 -33 -16 -28 -58 2 -23 9
  -56 14 -73 5 -16 13 -78 18 -136 6 -58 15 -118 21 -133 12 -31 14 -136 3 -136
  -5 0 -37 27 -73 60 -36 33 -83 72 -105 87 -22 15 -42 31 -45 34 -23 26 -165
  149 -173 149 -21 0 -99 -43 -104 -58 -6 -15 -1 -20 92 -91 28 -21 64 -51 80
  -65 17 -15 57 -48 90 -74 33 -25 78 -62 100 -82 22 -20 65 -54 96 -77 48 -36
  57 -47 63 -83 7 -44 -9 -113 -30 -130 -6 -6 -35 -13 -63 -17 l-51 -6 0 -58 0
  -59 55 0 c95 0 187 67 206 149 10 43 -3 268 -21 371 -9 52 -18 136 -44 400
  -10 106 -13 115 -33 118 -11 2 -24 -2 -28 -8z"/>
  <path d="M3107 8453 c-39 -30 -46 -57 -22 -88 9 -11 38 -51 65 -90 28 -38 66
  -90 86 -115 19 -25 67 -88 105 -140 38 -52 85 -115 104 -140 19 -25 55 -73 79
  -106 67 -91 69 -92 115 -59 63 43 62 56 -4 135 -20 24 -51 66 -70 94 -19 28
  -44 62 -57 76 -13 14 -35 43 -50 65 -70 102 -278 377 -293 387 -15 11 -19 10
  -58 -19z"/>
  <path d="M7057 8426 c-88 -33 -174 -121 -210 -216 -18 -48 -24 -175 -8 -184 5
  -3 12 -21 15 -40 11 -56 92 -137 183 -182 68 -33 87 -38 148 -38 89 0 162 33
  227 101 54 58 63 74 89 156 23 70 20 106 -13 194 -27 73 -104 152 -185 190
  -70 33 -185 42 -246 19z m184 -121 c65 -12 149 -124 149 -200 0 -13 -4 -26 -9
  -29 -5 -3 -12 -18 -15 -32 -10 -37 -53 -92 -100 -126 -32 -23 -49 -28 -97 -28
  -70 0 -96 9 -143 50 -38 33 -76 106 -76 145 0 29 36 111 67 153 35 47 119 85
  168 77 11 -2 36 -7 56 -10z"/>
  <path d="M4578 8329 c-14 -7 -18 -23 -18 -63 0 -60 6 -66 69 -66 48 0 61 14
  61 66 0 33 -5 47 -22 58 -26 18 -65 20 -90 5z"/>
  <path d="M7548 7829 c-117 -121 -214 -228 -216 -237 -1 -10 15 -35 38 -57 l40
  -39 133 132 c135 135 188 172 242 172 29 0 88 -25 143 -60 21 -14 24 -12 62
  30 l40 45 -26 22 c-39 31 -138 54 -176 41 -44 -15 -45 -3 -4 42 20 22 36 44
  36 49 0 10 -79 81 -91 81 -4 0 -103 -99 -221 -221z"/>
  <path d="M3000 7960 c-58 -8 -117 -39 -162 -86 -57 -58 -96 -157 -85 -213 8
  -39 1 -39 -40 1 l-33 32 -40 -39 c-22 -21 -40 -47 -40 -57 0 -18 82 -99 305
  -304 72 -65 139 -128 150 -139 11 -11 55 -53 97 -94 l77 -73 40 43 c23 24 41
  49 41 56 0 6 -52 60 -115 120 -63 59 -115 111 -115 116 0 4 22 7 49 7 97 0
  198 76 247 187 53 119 18 243 -99 356 -76 72 -167 101 -277 87z m123 -146 c48
  -24 115 -93 122 -126 4 -15 11 -30 16 -33 15 -10 10 -70 -11 -117 -28 -65 -87
  -115 -144 -123 -132 -20 -249 64 -271 195 -12 68 35 157 105 199 44 26 136 28
  183 5z"/>
  <path d="M8273 7838 c-12 -6 -27 -25 -33 -43 -27 -83 59 -139 126 -82 72 62
  -7 167 -93 125z"/>
  <path d="M8053 7641 c-34 -26 -85 -68 -115 -93 -29 -25 -84 -71 -123 -102 -38
  -31 -96 -77 -127 -103 -32 -25 -58 -51 -58 -57 0 -6 17 -31 38 -55 l39 -45 98
  80 c54 43 125 101 159 127 33 27 81 67 106 90 26 23 63 53 83 67 20 14 39 31
  42 39 5 13 -59 102 -73 100 -4 0 -35 -22 -69 -48z"/>
  <path d="M8235 7330 c-55 -33 -107 -63 -115 -67 -8 -3 -62 -33 -120 -66 -58
  -33 -121 -68 -140 -79 -61 -35 -61 -35 -34 -88 13 -26 30 -50 38 -53 8 -3 31
  5 51 19 20 13 38 24 41 24 2 0 55 29 117 64 124 70 158 81 219 71 33 -6 54
  -19 95 -62 52 -52 53 -55 53 -112 0 -51 -4 -62 -32 -94 -19 -20 -103 -76 -193
  -128 -88 -51 -162 -94 -164 -95 -9 -8 12 -57 38 -86 l28 -31 59 35 c32 20 91
  53 129 73 39 21 89 51 113 66 24 16 47 29 52 29 21 0 84 67 101 108 62 144
  -45 329 -211 362 l-35 7 33 19 c71 41 70 38 41 91 -15 28 -34 49 -45 50 -10 1
  -64 -25 -119 -57z"/>
  <path d="M2436 7299 c-55 -29 -120 -98 -147 -155 -26 -56 -33 -174 -11 -196 6
  -6 12 -17 12 -24 0 -15 -46 -6 -61 12 -6 8 -19 14 -28 14 -19 0 -76 -99 -64
  -110 7 -7 212 -123 323 -183 69 -37 263 -144 383 -212 27 -14 54 -24 60 -22 7
  3 24 28 40 55 l27 51 -67 37 c-239 132 -239 132 -209 144 15 5 32 10 37 10 24
  0 87 46 117 86 68 88 87 185 56 290 -20 68 -99 150 -188 194 -56 27 -72 30
  -152 30 -70 -1 -97 -5 -128 -21z m222 -133 c61 -31 104 -79 126 -138 17 -46
  17 -51 0 -100 -20 -62 -42 -93 -89 -127 -29 -20 -47 -24 -102 -24 -79 0 -135
  24 -183 80 -40 45 -50 72 -50 134 0 153 159 246 298 175z"/>
  <path d="M8455 6616 c-70 -17 -107 -39 -159 -92 -36 -36 -50 -61 -66 -114 -19
  -65 -19 -71 -4 -136 8 -38 22 -80 31 -94 20 -32 81 -88 105 -96 10 -3 18 -9
  18 -13 0 -22 -34 -32 -109 -32 -68 0 -85 3 -108 21 -38 30 -81 95 -94 144 -10
  35 -8 142 3 184 3 11 -90 57 -98 49 -2 -2 -8 -36 -15 -77 -12 -82 1 -207 27
  -247 8 -12 14 -29 14 -37 0 -22 99 -125 141 -147 48 -24 182 -26 249 -4 25 8
  79 24 120 35 41 12 93 28 115 36 23 8 50 14 60 14 11 0 33 7 49 15 15 8 37 15
  47 15 10 0 43 9 74 21 60 22 64 31 44 102 -8 29 -15 37 -33 37 -12 0 -26 -3
  -30 -7 -7 -7 -46 -15 -46 -10 0 2 11 26 25 53 49 96 22 228 -66 316 -72 72
  -172 94 -294 64z m151 -122 c60 -20 88 -44 114 -99 37 -76 19 -179 -40 -228
  -33 -28 -117 -57 -163 -57 -52 0 -110 32 -150 82 -42 52 -49 130 -18 196 26
  55 53 77 124 102 66 23 73 24 133 4z"/>
  <path d="M2016 6548 c-26 -73 -25 -81 14 -90 35 -9 60 -16 224 -63 108 -30
  159 -62 186 -115 36 -70 19 -164 -40 -217 -22 -21 -33 -23 -100 -19 -41 2
  -109 14 -150 26 -41 12 -100 28 -130 35 -30 7 -68 18 -83 24 -16 6 -30 11 -32
  11 -2 0 -8 -19 -13 -42 -6 -24 -14 -53 -17 -65 -6 -18 -3 -23 12 -23 10 0 23
  -4 28 -9 14 -14 316 -93 408 -108 78 -12 180 44 218 120 14 26 23 67 26 116 4
  69 2 81 -24 133 l-29 57 54 -2 55 -2 15 53 c8 29 12 55 9 58 -5 5 -145 45
  -267 75 -59 15 -174 47 -230 64 -25 7 -61 16 -82 20 -35 5 -37 5 -52 -37z"/>
  <path d="M2200 5803 c-57 -8 -72 -15 -112 -56 -30 -29 -52 -66 -72 -117 -16
  -41 -35 -89 -42 -107 -8 -17 -14 -40 -14 -51 0 -10 -19 -40 -43 -66 -36 -38
  -49 -46 -79 -46 -28 0 -42 7 -63 32 -26 31 -27 35 -23 128 3 62 11 105 21 125
  9 17 17 35 17 41 0 6 7 17 15 24 27 22 17 48 -25 70 -55 28 -75 25 -98 -12
  -43 -72 -62 -153 -62 -266 0 -93 3 -114 24 -157 29 -59 49 -84 94 -114 40 -28
  125 -38 177 -21 51 17 108 70 129 122 10 24 22 51 28 62 5 10 20 51 33 90 44
  136 84 175 163 163 43 -8 55 -22 78 -90 16 -47 16 -55 -1 -126 -9 -42 -21 -83
  -26 -91 -5 -8 -16 -28 -23 -45 -8 -16 -26 -41 -40 -54 -14 -14 -26 -30 -26
  -37 0 -13 84 -64 105 -64 14 0 71 82 99 141 45 95 58 236 33 329 -16 56 -49
  120 -73 141 -47 41 -124 62 -194 52z"/>
  <path d="M8585 5549 c-88 -39 -181 -123 -219 -199 -28 -54 -56 -165 -56 -216
  0 -105 85 -304 129 -304 10 0 32 15 50 34 34 35 34 49 -4 96 -46 58 -57 180
  -23 272 74 205 316 271 484 133 138 -114 147 -327 18 -466 l-24 -25 39 -37
  c22 -20 47 -37 55 -37 25 0 86 88 122 175 22 54 30 201 15 261 -31 124 -125
  244 -233 301 -48 25 -64 28 -178 30 -111 3 -131 1 -175 -18z"/>
  <path d="M2480 4779 c-14 -6 -56 -17 -95 -24 -38 -8 -110 -24 -160 -35 -226
  -53 -266 -62 -420 -95 -44 -10 -84 -21 -89 -26 -6 -5 -20 -9 -32 -9 -13 0 -25
  -4 -28 -9 -6 -9 10 -111 19 -120 5 -4 87 13 210 44 28 7 68 16 90 20 22 3 63
  12 90 20 28 7 82 20 120 28 277 60 375 87 375 101 0 25 -35 116 -44 115 -6 0
  -22 -5 -36 -10z"/>
  <path d="M8420 4762 c-99 -30 -149 -71 -192 -157 -23 -44 -48 -150 -48 -198 1
  -47 31 -149 47 -154 5 -2 25 7 44 20 29 19 33 27 29 52 -3 17 -5 62 -4 100 0
  115 46 180 146 210 71 21 79 15 63 -48 -31 -120 -38 -144 -51 -174 -8 -17 -14
  -38 -14 -47 0 -9 -8 -42 -19 -74 -10 -31 -22 -73 -25 -94 l-7 -36 48 -12 c189
  -48 308 1 378 154 35 76 36 216 3 285 -46 91 -130 153 -236 173 -95 17 -105
  17 -162 0z m250 -178 c67 -57 89 -157 51 -233 -28 -54 -85 -101 -124 -102 -37
  -1 -81 2 -85 6 -3 3 6 33 43 155 7 25 24 80 36 123 13 42 29 77 36 77 6 0 26
  -12 43 -26z"/>
  <path d="M2293 4460 c-152 -53 -240 -176 -231 -325 3 -38 10 -79 16 -90 5 -11
  16 -35 23 -53 46 -126 214 -222 340 -194 127 29 220 98 266 199 22 47 25 65
  21 136 -11 241 -222 400 -435 327z m206 -134 c26 -14 61 -42 77 -63 27 -35 29
  -45 29 -120 0 -95 -12 -118 -88 -170 -58 -39 -121 -50 -193 -34 -123 28 -179
  181 -111 303 17 30 38 47 92 73 84 41 128 44 194 11z"/>
  <path d="M8084 4178 c-23 -32 -46 -87 -40 -96 6 -10 69 -47 175 -104 148 -78
  192 -125 199 -213 8 -96 -53 -181 -138 -192 -41 -6 -87 13 -215 86 -38 23 -77
  44 -85 48 -8 4 -37 20 -63 36 -45 27 -49 28 -66 13 -10 -9 -26 -35 -37 -57
  -18 -40 -17 -41 1 -53 43 -25 152 -87 175 -98 14 -7 59 -33 100 -57 125 -73
  197 -88 272 -56 59 24 125 107 149 187 21 67 21 71 4 124 -9 30 -14 58 -11 61
  3 3 21 -2 40 -12 42 -23 59 -16 91 35 25 40 26 43 9 61 -9 10 -21 19 -26 19
  -5 0 -47 23 -94 50 -47 28 -86 50 -89 50 -2 0 -70 38 -150 85 -159 92 -186
  103 -201 83z"/>
  <path d="M2657 3821 c-26 -10 -53 -23 -59 -29 -7 -7 -18 -12 -25 -12 -22 0
  -97 -76 -120 -122 -46 -93 -51 -142 -24 -245 13 -49 34 -86 76 -134 111 -126
  245 -160 381 -94 204 97 263 311 135 495 -91 132 -235 188 -364 141z m196
  -132 c62 -30 117 -115 117 -182 0 -58 -25 -109 -77 -158 -37 -36 -114 -69
  -159 -69 -33 0 -96 29 -127 58 -38 35 -77 113 -77 152 0 66 85 183 141 195 16
  4 31 11 34 16 11 17 103 10 148 -12z"/>
  <path d="M7640 3477 c-51 -26 -104 -98 -115 -154 -7 -38 5 -53 57 -72 25 -9
  28 -7 50 37 27 56 66 79 100 61 35 -18 145 -107 215 -173 70 -66 71 -62 -2
  -141 -25 -27 -45 -57 -44 -65 0 -8 13 -25 29 -37 l28 -23 47 49 c25 26 53 58
  61 69 8 12 20 22 25 22 6 0 38 -26 71 -57 l60 -58 39 45 c21 25 39 52 39 60 0
  9 -22 33 -49 53 -74 57 -76 60 -45 96 l27 32 -23 24 c-32 34 -55 37 -81 9 -26
  -28 -42 -30 -60 -7 -8 9 -43 39 -79 68 -36 29 -85 71 -110 94 -54 50 -129 91
  -167 91 -15 0 -48 -11 -73 -23z"/>
  <path d="M3155 3304 c-37 -41 -88 -100 -114 -131 -25 -31 -61 -73 -78 -92 -49
  -54 -66 -97 -67 -172 0 -75 9 -95 80 -163 63 -62 98 -76 188 -76 45 0 76 -4
  76 -10 0 -6 -29 -41 -64 -78 -90 -95 -166 -185 -166 -197 0 -16 76 -88 88 -84
  12 5 174 187 430 482 30 34 76 88 103 119 27 31 49 65 49 75 -1 10 -20 34 -44
  55 l-42 36 -72 -86 c-145 -175 -182 -209 -249 -226 -39 -11 -57 -11 -91 0 -90
  26 -151 105 -138 177 8 41 75 133 175 239 39 42 80 87 91 100 l19 25 -37 35
  c-20 19 -44 38 -53 41 -11 3 -38 -19 -84 -69z"/>
  <path d="M7365 3171 c-119 -31 -243 -164 -270 -288 -6 -29 -4 -33 18 -38 57
  -15 78 -3 99 52 48 130 190 196 304 142 54 -26 56 -24 -209 -239 -64 -52 -117
  -101 -117 -108 0 -22 58 -90 105 -122 117 -81 220 -78 340 11 82 60 117 112
  136 206 14 69 4 133 -33 205 -25 52 -104 132 -155 158 -46 24 -165 35 -218 21z
  m278 -270 c23 -39 22 -113 -2 -159 -37 -72 -102 -112 -183 -112 -45 0 -59 5
  -91 31 -44 36 -50 27 97 145 54 43 110 89 125 101 33 28 33 28 54 -6z"/>
  <path d="M3734 2861 c-29 -13 -35 -33 -23 -75 l10 -36 52 6 c105 12 223 -58
  247 -146 26 -96 -9 -190 -96 -256 -33 -25 -46 -29 -103 -29 -54 0 -73 5 -106
  27 -50 32 -101 86 -110 116 -8 28 -28 28 -71 1 -29 -17 -33 -25 -28 -47 15
  -66 97 -148 193 -193 88 -42 191 -43 268 -5 135 68 218 232 189 373 -16 74
  -35 109 -85 160 -62 62 -160 106 -246 110 -38 1 -79 -1 -91 -6z"/>
  <path d="M6873 2846 c-23 -12 -45 -24 -48 -28 -3 -3 17 -45 45 -92 27 -48 50
  -90 50 -93 0 -2 17 -32 37 -66 34 -57 37 -68 38 -141 l0 -78 -58 -54 -57 -53
  29 -58 30 -58 56 57 c42 44 55 65 55 87 0 17 5 41 11 55 l12 25 28 -44 c16
  -25 36 -45 44 -45 15 0 105 47 105 55 0 2 -22 42 -50 90 -27 48 -50 88 -50 91
  0 2 -19 36 -43 76 -23 40 -48 84 -55 98 -73 143 -109 200 -125 199 -6 0 -31
  -10 -54 -23z"/>
  <path d="M6265 2590 c-52 -21 -64 -83 -25 -125 33 -35 72 -33 104 6 19 22 25
  38 20 53 -9 29 -33 66 -43 66 -5 0 -15 2 -23 4 -7 3 -22 1 -33 -4z"/>
  <path d="M4346 2570 c-65 -25 -111 -71 -130 -131 -25 -76 -17 -143 24 -206 16
  -25 165 -140 220 -170 42 -24 93 -92 93 -126 0 -61 -61 -96 -142 -83 -65 10
  -174 68 -215 115 -28 31 -50 26 -86 -19 -26 -33 -29 -43 -20 -60 17 -32 118
  -101 195 -134 60 -25 83 -30 165 -30 79 -1 102 3 135 21 58 31 93 72 110 128
  40 132 -3 198 -217 339 -116 76 -145 124 -114 185 45 86 169 79 304 -16 34
  -25 74 -62 89 -84 14 -21 31 -39 37 -39 7 0 29 18 51 40 37 38 38 41 25 66
  -23 42 -139 143 -194 169 -126 58 -239 70 -330 35z"/>
  </g>  

  </svg>
);

export const LinkArrow = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    className={`w-full h-auto ${className}`}
    {...rest}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-5m-7 1L20 4m-5 0h5v5"
    />
  </svg>
);

