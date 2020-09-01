import React from "react"

const Input = ({classes = [], attr = {}}) => {
  const cls = ["a-input", ...classes]
  return (
    <input 
      className={cls.join(" ")}
      type="text" 
      required
      {...attr}
    />
  )
}

export default Input