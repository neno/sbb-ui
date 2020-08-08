import "../styles/index.scss"
import Collapsible from "./libs/Collapsible"

const timeout = process.env.STORYBOOK_TIMEOUT || 0
console.log("My timeout", timeout)

setTimeout(() => {
  const el = document.querySelector("[data-module='collapsible']")
  if (el) {
    new Collapsible(el)
  }
}, timeout)
