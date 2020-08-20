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
      <span className="a-btn__animation">
        <Icon name="arrow-right" />
        Primary Button
        <Icon name="arrow-right" />
      </span>
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
    <Button classes={["a-btn--primary a-btn--search"]}>
      <span className="sr-only">
        Hidden text
      </span>
      <Icon name="magnifying-glass" />
    </Button>
  )
