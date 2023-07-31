import React, { Children } from 'react'

const Button = (props) => {
  return (
    <div>
      <button>{props.text}</button>
      {/* <button>{children}</button> */}
    </div>
  )
}

export default Button
