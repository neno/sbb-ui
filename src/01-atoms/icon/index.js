import React from "react"

import ChevronDown from "./icons/chevron-down"

const icons = {
  "chevron-down": ChevronDown
}

const Icon = ({ name }) => {
  const Ico = icons[name]
  return <Ico />
}

export default Icon
