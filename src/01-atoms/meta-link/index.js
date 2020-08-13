import React from "react"

const MetaLink = ({ children, url, classes = [], attr = {} }) => {
  const cls = ["a-meta-link", ...classes]
  return (
    <a
      href={url}
      className={cls.join(" ")}
      {...attr}
    >
      {children}
    </a>
  )
}

export default MetaLink
