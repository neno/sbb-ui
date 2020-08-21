import React from "react"

const Label = ({children, htmlFor, attr = {}}) => {
  return (
    <label 
      className='a-label'
      {...attr}
      htmlFor={htmlFor}
    >
      {children}
    </label>
  )
}

export default Label