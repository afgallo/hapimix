window.addEventListener('DOMContentLoaded', () => {
  htmx.logAll()
})

document.body.addEventListener('htmx:responseError', () => {
  htmx.removeClass(htmx.find('#server-error'), 'hidden')
  // htmx.removeClass(htmx.find('#server-error'), 'block')
})

document.body.addEventListener('htmx:beforeSend', () => {
  htmx.addClass(htmx.find('#server-error'), 'hidden')
})
