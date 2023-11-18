// @ts-nocheck
/**
 * 
 * @param {string} selector
 */
export function printClickEvents(selector) {
    console.log(frevo.getEventHandlers($(selector)[0]));
}
