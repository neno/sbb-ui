import React from "react"
import { renderToStaticMarkup } from "react-dom/server"
import Button from "../index"
import Icon from "../../icon"

export default {
  title: "01-Atoms/Buttons"
}

export const ButtonPrimary = () =>
  renderToStaticMarkup(
    <Button classes={["a-btn--primary"]}>
      <span>Primary Button</span>
    </Button>
  )

export const ButtonSecondary = () =>
  renderToStaticMarkup(
    <Button classes={["a-btn--secondary"]}>
      <span>Secondary Button</span>
    </Button>
  )

export const ButtonPrimaryIcon = () =>
  renderToStaticMarkup(
    <Button classes={["a-btn--primary a-btn--icon"]}>
      <span className="sr-only">
        Hidden text
      </span>
      <Icon name="magnifying-glass" />
    </Button>
  )
