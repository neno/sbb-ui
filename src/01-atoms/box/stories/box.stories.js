import React from "react"
import { renderToStaticMarkup } from "react-dom/server"
import Box from "../index"
import { boxData } from "./box.data"

export default {
  title: "01-Atoms/Boxes"
}

export const ButtonPrimary = ({ classes = [] }) =>
  renderToStaticMarkup(<Box>{boxData}</Box>)
