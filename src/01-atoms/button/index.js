import React from "react"

import Icon from "../icon"

const Button = ({ children, handleClick, classes = [], attr = {}, type = 'button' }) => {
  const cls = ["a-btn", ...classes]
  return (
    <button
      type={type}
      onClick={handleClick}
      className={cls.join(" ")}
      {...attr}
    >
      {children}
    </button>
  )
}

export default Button
