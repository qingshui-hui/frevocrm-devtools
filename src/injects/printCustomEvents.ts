// @ts-nocheck
/**
 * https://stackoverflow.com/a/9517879/20308611
 * chrome.scripting.executeScript with world: 'MAIN'
 */

function printCustomEvents() {
  const events = window.jQuery._data( app.event.el[0], "events" )
  Object.values(events).forEach((eventList) => {
    eventList.forEach((/** @type {Event} */e) => {
      let eventName = e.type
      if (e.namespace) {
        eventName += '.' + e.namespace
      }
      console.log(eventName, {handler: e.handler})
    })
  })
}

export {
  printCustomEvents
}
