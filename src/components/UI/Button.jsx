import React from 'react'

export default function Button({ children, style, ...props }) {
  return (
    <button className={style || 'button'} {...props} >{children}</button>
  )
}
