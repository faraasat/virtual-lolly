import React from "react"

function MeltedLolly() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="263"
      height="384"
      viewBox="0 0 263 384"
    >
      <defs>
        <ellipse
          id="path-1"
          cx="119.5"
          cy="15.5"
          rx="119.5"
          ry="15.5"
        ></ellipse>
        <ellipse id="path-3" cx="20" cy="4.5" rx="20" ry="4.5"></ellipse>
      </defs>
      <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
        <g>
          <g fillRule="nonzero" transform="translate(103)">
            <rect
              width="32"
              height="292"
              x="0"
              y="2"
              fill="#C06C50"
              rx="16"
            ></rect>
            <rect
              width="32"
              height="292"
              x="0"
              y="0"
              fill="#E3A28D"
              rx="16"
            ></rect>
          </g>
          <g transform="translate(0 351)">
            <mask id="mask-2" fill="#fff">
              <use xlinkHref="#path-1"></use>
            </mask>
            <use
              fill="#000"
              fillRule="nonzero"
              opacity="0.194"
              xlinkHref="#path-1"
            ></use>
            <path
              fill="#000"
              fillRule="nonzero"
              d="M104 18.818L109 17h-5v-48h32v79h-32V21h-6l6-2.182z"
              mask="url(#mask-2)"
              opacity="0.13"
            ></path>
          </g>
          <g transform="translate(223 375)">
            <mask fill="#fff">
              <use xlinkHref="#path-3"></use>
            </mask>
            <use
              fill="#000"
              fillRule="nonzero"
              opacity="0.194"
              xlinkHref="#path-3"
            ></use>
          </g>
          <text
            fill="#FABAA5"
            fontFamily="Arial-BoldMT, Arial"
            fontSize="11"
            fontWeight="bold"
            opacity="0.614"
            transform="rotate(-90 119 110.5)"
          >
            <tspan x="34.865" y="114.5">
              Knock knock. Who&apos;s there? 404.
            </tspan>
          </text>
          <text
            fill="#C06C50"
            fontFamily="Arial-BoldMT, Arial"
            fontSize="11"
            fontWeight="bold"
            opacity="0.472"
            transform="rotate(-90 119 111.5)"
          >
            <tspan x="34.865" y="115.5">
              Knock knock. Who&apos;s there? 404.
            </tspan>
          </text>
        </g>
      </g>
    </svg>
  )
}

export default MeltedLolly
