// @ts-nocheck

export function hilightClickEvents() {
    frevo.getEventHandlers(document, 'click').click.forEach((/** @type {Event} */ event) => {
        console.log(event);
        let eventName = event.type
        if (event.namespace) {
            eventName += '.' + event.namespace
        }
        if (event.selector) {
            $(event.selector).css('background', 'yellow')
            $(event.selector).data('click-event', `${eventName}`)
            // $(event.selector).append(`${eventName}`)
        }
    })
    $('*').toArray().forEach(elem => {
        (frevo.getEventHandlers(elem, 'click').click || []).forEach((/** @type {Event} */ event) => {
            console.log(event);
            let eventName = event.type
            if (event.namespace) {
                eventName += '.' + event.namespace
            }
            if (event.selector) {
                $(event.selector).css('background', 'yellow')
                // $(event.selector).append(`${eventName}`)
            } else {
                if (
                    elem.tagName
                    && elem.tagName !== 'html'
                    && elem.tagName !== 'body'
                ) {
                    $(elem).css('background', 'yellow')
                    $(event.selector).data('click-event', `${eventName}`)
                    // $(elem).append(`${eventName}`)
                }
            }
        })
    })
}
