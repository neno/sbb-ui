import React from "react"
import { renderToStaticMarkup } from "react-dom/server"
import Input from "./index"

export default {
  title: "01-Atoms/Input"
}

export const Default = () =>
  renderToStaticMarkup(
    <Input attr={{
      "placeholder": "Placeholder Text"
    }}
    />
  )