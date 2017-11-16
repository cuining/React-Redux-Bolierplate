import React from 'react'

const Unchecked = props => (
  <svg
    width={20}
    height={20}
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <defs>
      <circle id="a" cx={10} cy={10} r={10} />
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#FFF" xlinkHref="#a" />
      <circle stroke="#5A5F69" cx={10} cy={10} r={9.5} />
    </g>
  </svg>
)

export default Unchecked
