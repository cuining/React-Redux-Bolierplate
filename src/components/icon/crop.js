import React from 'react'

const Crop = props => (
  <svg width={20} height={20} {...props}>
    <path
      d="M2 17V2h15V0h1v2h2v1H3v17H2v-2H0v-1h2zM18 4v14H4v-1h13V4h1z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
)

export default Crop
