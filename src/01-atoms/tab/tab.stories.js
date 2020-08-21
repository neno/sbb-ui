import React from "react"
import { renderToStaticMarkup } from "react-dom/server"
import Tab from "./index"

export default {
  title: "01-Atoms/Tab"
}

export const Default = () =>
  renderToStaticMarkup(
    <Tab>
      Label
    </Tab>
  )

  export const Active = () =>
  renderToStaticMarkup(
    <Tab active="true">
      Label
    </Tab>
  )