import React from "react"

const Label = (attr = {}) => {
  return (
    <label 
      className='a-label'
      {...attr}
    />
  )
}

export default Label