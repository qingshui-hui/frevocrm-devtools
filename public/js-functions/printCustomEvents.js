
/**
 * https://stackoverflow.com/a/9517879/20308611
 * chrome.scripting.executeScript with world: 'MAIN'
 */

(function() {
  const events = window.jQuery._data( app.event.el[0], "events" )
  Object.entries(events).forEach(([key, eventList]) => {
    eventList.forEach((/** @type {Event} */e) => {
      let eventName = e.type
      if (e.namespace) {
        eventName += '.' + e.namespace
      }
      console.log(eventName, e.handler)
    })
  })
})()
