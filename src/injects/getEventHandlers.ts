// @ts-nocheck
/**
 * Gets all event-handlers from a DOM element.
 * Events with namespace are allowed.
 *
 * @param  {Element} node: DOM element
 * @param  {String} eventns: (optional) name of the event/namespace
 * @return {Object}
 */
function getEventHandlers(element, eventns) {
    const $ = window.jQuery;
    const i = (eventns || '').indexOf('.'),
        event = i > -1 ? eventns.substr(0, i) : eventns,
        namespace = i > -1 ? eventns.substr(i + 1) : void (0),
        handlers = Object.create(null);
    element = $(element);
    if (!element.length) return handlers;
    // gets the events associated to a DOM element
    const listeners = $._data(element.get(0), "events") || handlers;
    const events = event ? [event] : Object.keys(listeners);
    if (!eventns) return listeners; // Object with all event types
    events.forEach((type) => {
        // gets event-handlers by event-type or namespace
        (listeners[type] || []).forEach(getHandlers, type);
    });
    // eslint-disable-next-line
    function getHandlers(e) {
        const type = this.toString();
        const eNamespace = e.namespace || (e.data && e.data.handler);
        // gets event-handlers by event-type or namespace
        if ((event === type && !namespace) ||
            (eNamespace === namespace && !event) ||
            (eNamespace === namespace && event === type)) {
            handlers[type] = handlers[type] || [];
            handlers[type].push(e);
        }
    }
    return handlers;
}

export {
    getEventHandlers
}
