import { languages } from './language-selector.data';

import React from "react"
import { renderToStaticMarkup } from "react-dom/server"
import LanguageSelector from "../index"

export default {
  title: "02-Molecules/Language Selector"
}

export const Default = () =>
  renderToStaticMarkup(<LanguageSelector languages={languages} />)

  export const Expanded = () =>
  renderToStaticMarkup(<LanguageSelector languages={languages} classes={['m-language-selector--expanded']} />)