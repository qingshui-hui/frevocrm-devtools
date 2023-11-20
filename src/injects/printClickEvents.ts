// @ts-nocheck
/**
 * 
 * @param {string} selector
 */
export function printClickEvents(selector) {
    const target = $(selector).first()
    target.parents().each((_, elem) => {
        if (elem.tagName === 'html') {
            elem = document;
        }
        const events = $(elem).data('events');
        if (!events || !events.click) return true;
        events.click.forEach(item => {
            /** @type {string} */
            const selector = item.selector;
            if (!selector) return true;
    
            // selectorはjqueryのものであるため、$()を必ず使用する
            $(selector).each((_, elem2) => {
                if (elem2.isEqualNode(target[0]) 
                    || elem2.contains(target[0])
                ) {
                    console.log(item.selector, item)
                }
            })
        })
    })
}
