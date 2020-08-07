import React from "react"

import ChevronDown from "./icons/chevron-down"
import ArrowUpCircle from "./icons/arrow-up-circle"

const icons = {
  "chevron-down": ChevronDown,
  "arrow-up-circle": ArrowUpCircle
}

const Icon = ({ name }) => {
  const Ico = icons[name]
  return <Ico />
}

export default Icon
