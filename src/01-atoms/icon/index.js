import React from "react"

import ChevronDown from "./icons/chevron-down"
import ArrowUpCircle from "./icons/arrow-up-circle"
import MagnifyingGlass from "./icons/magnifying-glass"

const icons = {
  "chevron-down": ChevronDown,
  "arrow-up-circle": ArrowUpCircle,
  "magnifying-glass": MagnifyingGlass
}

const Icon = ({ name }) => {
  const Ico = icons[name]
  return <Ico />
}

export default Icon
