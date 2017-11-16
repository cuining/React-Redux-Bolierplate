import React from 'react'

const Checked = props => (
  <svg
    width={20}
    height={20}
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <defs>
      <linearGradient x1="17.739%" y1="0%" x2="74.937%" y2="77.114%" id="a">
        <stop stopColor="#ECECEC" offset="0%" />
        <stop stopColor="#FFF" offset="100%" />
      </linearGradient>
      <circle id="b" cx={10} cy={10} r={10} />
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="url(#a)" xlinkHref="#b" />
      <circle stroke="#1D1C1E" cx={10} cy={10} r={9.5} />
      <path
        fill="#EA4335"
        d="M9.435 11.856L3.5 7 2 8.5 9.5 16 20 5.5 18.5 4l-9.065 7.856z"
      />
    </g>
  </svg>
)

export default Checked
