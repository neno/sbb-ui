import React from "react"

import Icon from "../icon"

const ToTop = () => {
  return (
    <button type="button" class="plf-to-top" data-module="to-top">
      <span class="sr-only">Nach Oben</span>
      <Icon name="arrow-up-circle" />
    </button>
  )
}

export default ToTop