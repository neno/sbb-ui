import React, { useEffect, useRef } from "react"

const Box = ({ children, classes = [], attr = {} }) => (
  <div className={`a-box ${classes.join(" ")}`} {...attr}>
    <p className="font-primary">{children}</p>
    <p className="font-secondary">{children}</p>
  </div>
)

export default Box
