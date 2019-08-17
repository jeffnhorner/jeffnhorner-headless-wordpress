// Use symbols for private attributes
const _fields = Symbol('fields');

export default class GlobalSettings {
    /**
     * The page constructor
     *
     * @param {Object} data  The object to parse into the model.
     */
    constructor (data) {
        this[_fields] = data;
    }

    /**
     * Getter for the global website logo
     *
     * @return  {String}
     */
    get logo () {
        return this[_fields].website_logo;
    }

    /**
     * Getter for the global website favicon
     *
     * @return  {String}
     */
    get favicon () {
        return this[_fields].favicon;
    }
}
