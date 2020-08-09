import React from "react"

const Input = ({attr = {}}) => {
  return (
    <input 
      className="a-input" 
      type="text" 
      {...attr}
    />
  )
}

export default Input