import React from "react"

const Error = ({children, attr = {}}) => {
  return (
    <p className='a-error'
      {...attr}
    >
      {children}
    </p>
  )
}

export default Error