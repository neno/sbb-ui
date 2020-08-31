import React from "react"
import { renderToStaticMarkup } from "react-dom/server"
import Notification from "./index"

import Icon from "../icon"

export default {
  title: "01-Atoms/Notification"
}

export const Default = () =>
  renderToStaticMarkup(
    <Notification>
      <Icon name="magnifying-glass" />
      <div className="a-notification__text">
        <p>Notification Text</p>
      </div>
    </Notification>
  )

  export const Error = () =>
  renderToStaticMarkup(
    <Notification classes={["a-notification--error"]}>
      <Icon name="sign-exclamation-point" />
      <div className="a-notification__text">
        <strong>Notification Title</strong>
        <ul className="a-notification__error-list">
          <li><a href="#">Input field 1</a></li>
          <li><a href="#">Input field 2</a></li>
        </ul>
      </div>
    </Notification>
  )