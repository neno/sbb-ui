import createModule from "./create-module"

const Collapsible = createModule({
  constructor: function({ el, state, options }) {
    const trigger = el.querySelector(options.triggerSelector)
    const target = el.querySelector(options.targetSelector)
    const activeCls = options.triggerSelector.replace(".", "") + "--active"

    function showTarget() {
      console.log("showTarget")
      trigger.setAttribute("aria-expanded", "true")
      trigger.classList.add(activeCls)
      target.setAttribute("aria-visible", "true")
    }

    function hideTarget() {
      console.log("hideTarget")
      trigger.setAttribute("aria-expanded", "false")
      trigger.classList.remove(activeCls)
      target.setAttribute("aria-visible", "false")
    }

    function toggle() {
      if (trigger.getAttribute("aria-expanded") === "true") {
        hideTarget()
      } else {
        showTarget()
      }
    }

    function bindEvents() {
      trigger.addEventListener("click", toggle)
    }

    function unbindEvents() {
      trigger.removeEventListener("click", toggle)
    }

    // Public Methods
    state.init = () => {
      bindEvents()
    }

    state.destroy = () => {
      unbindEvents()
    }

    state.init()
    return state
  }
})

export default Collapsible
