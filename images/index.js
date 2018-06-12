/* eslint-env browser */

/**
 * This is a registry of `HTMLImageIcon` objects.
 *
 * Hypergrid comes with a few images (see below).
 *
 * Application developer is free to register additional image objects here (see {@link module:images.add|add}).
 * @module images
 */

'use strict';

var _ = require('object-iterators');

var images = require('./images'); // this is the file generated by gulpfile.js (and ignored by git)

/**
 * <img src="https://raw.githubusercontent.com/openfin/fin-hypergrid/master/images/calendar.png">
 * @name calendar
 * @memberOf module:images
 */

/**
 * <img src="https://raw.githubusercontent.com/openfin/fin-hypergrid/master/images/checked.png">
 * @name checked
 * @memberOf module:images
 */

/**
 * <img src="https://raw.githubusercontent.com/openfin/fin-hypergrid/master/images/unchecked.png">
 * @name unchecked
 * @memberOf module:images
 */

/**
 * <img src="https://raw.githubusercontent.com/openfin/fin-hypergrid/master/images/filter-off.png">
 * @name filter-off
 * @memberOf module:images
 */

/**
 * <img src="https://raw.githubusercontent.com/openfin/fin-hypergrid/master/images/filter-on.png">
 * @name filter-on
 * @memberOf module:images
 */

/**
 * <img src="https://raw.githubusercontent.com/openfin/fin-hypergrid/master/images/up-down.png">
 * @name up-down
 * @memberOf module:images
 */

_(images).each(function(image, key) {
    var element = new Image();
    element.src = 'data:' + image.type + ';base64,' + image.data;
    images[key] = element;
});

/**
 * Synonym of {@link module:images.checked|checked} (unaffected if `checked` overridden).
 * @name checkbox-on
 * @memberOf module:images
 */
images['checkbox-on'] = images.checked;

/**
 * Synonym of {@link module:images.unchecked|unchecked} (unaffected if `unchecked` overridden).
 * @name checkbox-off
 * @memberOf module:images
 */
images['checkbox-off'] = images.unchecked;

/**
 * @name add
 * @method
 * @param {string} key
 * @param {HTMLImageElement} img
 * @memberOf module:images
 */
images.add = function(key, img) {
    return images[key] = img;
};

/**
 * Convenience function.
 * @name checkbox
 * @method
 * @param {boolean} state
 * @returns {HTMLImageElement} {@link module:images.checked|checked} when `state` is truthy or {@link module:images.unchecked|unchecked} otherwise.
 * @memberOf module:images
 */
images.checkbox = function(state) {
    return images[state ? 'checked' : 'unchecked'];
};

/**
 * Convenience function.
 * @name filter
 * @method
 * @param {boolean} state
 * @returns {HTMLImageElement} {@link module:images.filter-off|filter-off} when `state` is truthy or {@link module:images.filter-on|filter-on} otherwise.
 * @memberOf module:images
 */
images.filter = function(state) {
    return images[state ? 'filter-on' : 'filter-off'];
};

module.exports = images;