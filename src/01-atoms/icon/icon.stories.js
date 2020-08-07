import React from "react"
import { renderToStaticMarkup } from "react-dom/server"
import Icon from "./index"

export default {
  title: "01-Atoms/Icons"
}

export const ChevronDown = () =>
  renderToStaticMarkup(<Icon name="chevron-down" />)

export const ArrowUpCircle = () =>
renderToStaticMarkup(<Icon name="arrow-up-circle" />)