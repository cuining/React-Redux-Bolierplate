import React from 'react'

const Success = props => (
  <svg width={40} height={40} {...props}>
    <defs>
      <linearGradient x1="0%" y1="0%" x2="74.16%" y2="71.567%" id="a">
        <stop stopColor="#FF8989" offset="0%" />
        <stop stopColor="#EA4335" offset="100%" />
      </linearGradient>
    </defs>
    <path
      d="M20 40C8.954 40 0 31.046 0 20S8.954 0 20 0s20 8.954 20 20-8.954 20-20 20zm0-2.5c9.665 0 17.5-7.835 17.5-17.5S29.665 2.5 20 2.5 2.5 10.335 2.5 20 10.335 37.5 20 37.5zm-7.276-20.63l6.1 6.147 8.452-8.517 2.224 2.241L18.824 27.5 10.5 19.11l2.224-2.24z"
      fill="url(#a)"
      fillRule="evenodd"
    />
  </svg>
)

export default Success
