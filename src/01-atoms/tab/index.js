import React from "react"

const Tab = ({ label, id, active }) => {
  return (
    <button
      role="tab"
      type="button"
      aria-selected={active}
      className={active ? 'a-tab a-tab--active' : 'a-tab'}
      id={id}
      aria-controls={`${id}-tab`}
    >
      {label}
    </button>
  )
}

export default Tab
