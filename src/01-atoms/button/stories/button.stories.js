import React from "react"
import { renderToStaticMarkup } from "react-dom/server"
import Button from "../index"
import Icon from "../../icon"

export default {
  title: "01-Atoms/Buttons"
}

export const Default = () =>
  renderToStaticMarkup(
    <Button>
      Default Button
    </Button>
  )

export const ButtonPrimary = () =>
  renderToStaticMarkup(
    <Button classes={["a-btn--primary"]}>
      Label
    </Button>
  )

export const ButtonWithArrows = () =>
  renderToStaticMarkup(
    <Button classes={["a-btn--primary a-btn--arrows"]}>
      <Icon name="arrow-right" />
      Label
      <Icon name="arrow-right" />
    </Button>
  )

export const ButtonSearch = () =>
  renderToStaticMarkup(
    <Button classes={["a-btn--primary a-btn--search"]}>
      <span className="sr-only">
        Label
      </span>
      <Icon name="magnifying-glass" />
    </Button>
  )
