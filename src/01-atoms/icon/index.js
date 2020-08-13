import React from "react"

import ArrowUpCircle from "./icons/arrow-up-circle"
import ChevronDown from "./icons/chevron-down"
import Globe from "./icons/globe"
import MagnifyingGlass from "./icons/magnifying-glass"

const icons = {
  "arrow-up-circle": ArrowUpCircle,
  "chevron-down": ChevronDown,
  "globe": Globe,
  "magnifying-glass": MagnifyingGlass,
}

const Icon = ({ name }) => {
  const Ico = icons[name]
  return <Ico />
}

export default Icon
