import "../styles/index.scss"
import Collapsible from "./libs/Collapsible"

setTimeout(() => {
  const el = document.querySelector("[data-module='collapsible']")
  if (el) {
    new Collapsible(el)
  }
}, 2000)
