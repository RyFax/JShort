/**
 * @author RyFax (Maxandre R.)
 * @version 0.1.0
 */

class ShortElements {
    /**
     * @param {NodeList} elements
     */
    constructor(elements) {
        this.items = elements;
    }

    /**
     * @return {boolean} isSingle
     */
    isSingle() {
        return this.items.length === 1;
    }

    /**
     * @return {*|Node}
     */
    first() {
        return this.items[0];
    }

    /**
     * @param {*} [value]
     * @return {[]|*}
     */
    value(value) {
        if(value) {
            if(this.isSingle())
                return this.first().value = value;
            else
                this.forEach(i => i.value = value);
        }else {
            if(this.isSingle()) {
                return this.first().value;
            }else {
                let values = [];
                this.forEach(i => values.push(i.value));
                return values;
            }
        }
    }

    /**
     * @param {function} fn
     */
    forEach(fn) {
        this.items.forEach(fn);
    }

    /**
     * @param {string|string[]} event
     * @param {function} fn
     */
    event(event, fn) {
        if(Array.isArray(event)) {
            event.forEach(e => {
                if(this.isSingle())
                    this.first().addEventListener(e, fn);
                else
                    this.forEach(i => i.addEventListener(e, fn));
            })
        }else {
            if(this.isSingle())
                this.first().addEventListener(event, fn);
            else
                this.forEach(i => i.addEventListener(event, fn));
        }
    }
}

/**
 * @param {string} selectors
 * @return {ShortElements}
 */
function s(selectors) {
    return new ShortElements(document.querySelectorAll(selectors))
}