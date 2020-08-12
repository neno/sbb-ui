import React from "react"

const Table = ({ children, classes = [], }) => {
  const cls = ["a-table", ...classes];
  return (
    <table className={cls.join(" ")}>
      {children}
    </table>
  )
}

export default Table