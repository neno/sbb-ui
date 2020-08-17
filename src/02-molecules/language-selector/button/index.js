import React from "react"

import Icon from '../../../01-atoms/icon'

const Button = () => {
  return (
    <button
      type="button"
      className="m-language-selector__btn"
    >
      <Icon name="globe" />
        Deutsch
      <Icon name="chevron-down" />
    </button>
  )
}

export default Button