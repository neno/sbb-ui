import React from "react"

import Icon from "../icon"

const Button = ({ children, handleClick, classes = [], attr = {} }) => {
  const cls = ["a-btn", ...classes]
  return (
    <button
      type="button"
      onClick={handleClick}
      className={cls.join(" ")}
      {...attr}
    >
      {children}
    </button>
  )
}

export default Button
