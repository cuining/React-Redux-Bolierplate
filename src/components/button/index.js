import React from 'react'
import classNames from 'classnames'
import './style.css'

export default ({children, ghost, className, ...props}) => {

  return (
    <button className={classNames('z-button', {
      'ghost': !!ghost,
      [className]: !!className
    })} {...props}>{children}</button>
  )
}
