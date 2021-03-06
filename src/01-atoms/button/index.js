import React from "react"

import Icon from "../icon"

const Button = ({ children, handleClick, classes = [], attr = {}, type, url, arrows }) => {
  const cls = ["a-btn", ...classes]
  const CustomTag = url ? 'a' : 'button'
  return (
    <CustomTag
      onClick={handleClick}
      className={cls.join(" ")}
      {... type ? {type: type} : {type: "button"}}
      {... url ? {href: url} : {}}
      {...attr}
    >
      {arrows && <Icon name="arrow-right" />}
      {children}
      {arrows && <Icon name="arrow-right" />}
    </CustomTag>
  )
}

export default Button
