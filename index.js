/*!
 * dotfile-regex <https://github.com/regexps/dotfile-regex>
 *
 * Copyright (c) 2015, 2017, Jon Schlinkert.
 * Released under the MIT License.
 */

'use strict';

module.exports = function dotfileRegex() {
  return /(?:\/|^)(\.[^\/]*)$/;
};
