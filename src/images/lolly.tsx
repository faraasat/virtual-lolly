import React from "react"

function Lolly({ top, mid, bottom }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="163"
      height="431"
      className="lollipop"
      viewBox="0 0 163 431"
    >
      <defs>
        <path
          id="path-1"
          d="M50.585 0h62.172c16.302 0 29.818 12.625 30.928 28.89l18.769 275c1.166 17.08-11.736 31.872-28.817 33.038a31 31 0 01-2.111.072H31c-17.12 0-31-13.88-31-31a31 31 0 01.078-2.202l19.585-275C20.818 12.573 34.318 0 50.585 0z"
        ></path>
        <path
          id="path-3"
          d="M99 0h14c16.302 0 29.818 12.625 30.928 28.89l18.769 275c1.165 17.08-11.737 31.872-28.818 33.038a31 31 0 01-2.11.072h-14a31 31 0 002.11-.072c17.081-1.166 29.983-15.958 28.818-33.039l-18.769-275C128.818 12.625 115.302 0 99 0z"
        ></path>
      </defs>
      <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
        <g>
          <g fillRule="nonzero" transform="translate(65 137)">
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
            <path
              fill="#8C0040"
              fillOpacity="0.182"
              d="M0 200L32 200 32 218 0 223.801515z"
            ></path>
          </g>
          <mask id="mask-2" fill="#fff">
            <use xlinkHref="#path-1"></use>
          </mask>
          <use
            fill={bottom}
            fillRule="nonzero"
            className="lollyBottom"
            xlinkHref="#path-1"
          ></use>
          <path
            fill={top}
            fillRule="nonzero"
            d="M-25 -9H199V125H-25z"
            className="lollyTop"
            mask="url(#mask-2)"
          ></path>
          <path
            fill={mid}
            fillRule="nonzero"
            d="M-29 113H195V224H-29z"
            className="lollyMiddle"
            mask="url(#mask-2)"
          ></path>
          <path
            fill="#67000D"
            fillRule="nonzero"
            d="M79.77 0C63.468 0 49.952 12.625 48.842 28.89l-18.769 275c-1.166 17.08 11.736 31.872 28.817 33.038a31 31 0 002.111.072H17c-17.12 0-31-13.88-31-31a31 31 0 01.078-2.202l19.585-275C6.818 12.573 20.318 0 36.585 0H79.77z"
            mask="url(#mask-2)"
            opacity="0.096"
          ></path>
          <mask fill="#fff">
            <use xlinkHref="#path-3"></use>
          </mask>
          <use
            fill="#FFF"
            fillRule="nonzero"
            opacity="0.113"
            xlinkHref="#path-3"
          ></use>
          <g
            fill="#FFF"
            fillRule="nonzero"
            opacity="0.6"
            transform="rotate(-94 86.455 -37.419)"
          >
            <rect width="4" height="4" x="20" y="0" rx="2"></rect>
            <rect width="18" height="4" x="0" y="0" rx="2"></rect>
          </g>
          <path
            fill="#A7563C"
            fillRule="nonzero"
            d="M97 337H65V153c0-8.837 7.163-16 16-16s16 7.163 16 16v184z"
            opacity="0.062"
          ></path>
        </g>
      </g>
    </svg>
  )
}

export default Lolly
