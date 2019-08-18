// Use symbols for private attributes
const _fields = Symbol('fields');

/**
 * Javascript class for building a Page data model from the received payload fetched
 * from the CMS pages.
 */
export default class Page {
    /**
     * The page constructor
     *
     * @param {Object} data  The object to parse into the model.
     */
    constructor (data) {
        this[_fields] = data;
    }

    /**
     * Getter for a CMS page's title advance custom field
     *
     * @return  {String}
     */
    get title () {
        return this[_fields].acf.masthead_title;
    }

        /**
     * Getter for a CMS page's subtitle advance custom field
     *
     * @return  {String}
     */
    get subtitle () {
        return this[_fields].acf.masthead_subtitle;
    }

    /**
     * Getter for a CMS page's mastheadImage advance custom field
     *
     * @return  {String}
     */
    get mastheadImage () {
        return this[_fields].acf.banner_image;
    }

    /**
     * Getter for a CMS page's
     *
     * @return  {String}
     */
    get slug () {
        return this[_fields].slug;
    }
};
