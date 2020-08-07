import React, { useEffect, useRef } from "react"

const Box = ({ children, classes = [], attr = {} }) => (
  <div className={`a-box ${classes.join(" ")}`} {...attr}>
    {children}
  </div>
)

export default Box
