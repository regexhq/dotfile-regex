/*!
 * dotfile-regex <https://github.com/regexps/dotfile-regex>
 *
 * Copyright (c) 2015 Jon Schlinkert, contributors.
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function dotfileRegex() {
  return /(?:\/|^)(\.[^\/]*)$/;
};
