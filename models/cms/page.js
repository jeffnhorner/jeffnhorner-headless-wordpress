// Use symbols for private attributes
const _fields = Symbol('fields');

export default class Page {
    /**
     * The page constructor
     *
     * @param {Object} data  The object to parse into the model.
     */
    constructor (data) {
        console.log(data);
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
     * Getter for a CMS page's subTitle advance custom field
     *
     * @return  {String}
     */
    get subTitle () {
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
};
