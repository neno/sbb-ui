import "../styles/index.scss"
import Collapsible from "./libs/Collapsible"

const timeout = process.env.STORYBOOK_TIMEOUT || 0

/**
 * IMPORTANT: in storybook this will not work with HMR (hot module replacement)
 * You need to reload the page and wait for the timeout
 */

setTimeout(() => {
  document.querySelectorAll("[data-module='collapsible']").forEach(el => {
    new Collapsible(el)
  })
}, timeout)
