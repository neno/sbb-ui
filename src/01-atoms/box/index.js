import React, { useEffect, useRef } from "react"

const Box = ({ children, classes = [], attr = {} }) => (
  <div className={`a-box ${classes.join(" ")}`} {...attr}>
    <p>{children}</p>
  </div>
)

export default Box
