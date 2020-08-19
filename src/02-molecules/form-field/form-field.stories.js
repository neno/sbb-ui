import React from "react"
import { renderToStaticMarkup } from "react-dom/server"
import FormField from "./index"

import Label from '../../01-atoms/label'
import Input from '../../01-atoms/input'

export default {
  title: "02-Molecules/Form Field"
}

export const Default = () =>
  renderToStaticMarkup(
    <FormField>
      <Label htmlFor="field_name">
        Label Text
      </Label>
      <Input
        attr={{
          "id": "field_name",
          "name": "field_name"
        }} />
    </FormField>
  )