import React from 'react'

const Filter = props => (
  <svg width={20} height={20} {...props}>
    <g stroke="currentColor" fill="none" fillRule="evenodd">
      <circle cx={10} cy={7} r={6.5} />
      <circle cx={7} cy={13} r={6.5} />
      <circle cx={13} cy={13} r={6.5} />
    </g>
  </svg>
)

export default Filter
