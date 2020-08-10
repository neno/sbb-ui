import React from "react"
import { renderToStaticMarkup } from "react-dom/server"
import SearchForm from "./index"

export default {
  title: "02-Molecules/Search Form"
}

export const Default = () =>
  renderToStaticMarkup(<SearchForm />)