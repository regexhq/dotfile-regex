/*!
 * dotfile-regex <https://github.com/regexps/dotfile-regex>
 *
 * Copyright (c) 2015-2017, Jon Schlinkert.
 * Released under the MIT License.
 */

'use strict';

require('mocha');
var assert = require('assert');
var regex = require('./');

function test(str) {
  return regex().test(str);
}

describe('dotfile-regex', function() {
  var notdotfile = [
    'a/b/c/d/e.js',
    'a/b.c.d/e.js',
    'a/b.js',
    'a/.b/c/a.js',
  ].forEach(function(filepath) {
    it('should not match non-dotfiles: ' + filepath, function() {
      assert(!test(filepath));
    });
  });

  var falsey = [
    './foo',
    '.git/foo',
    '.github/contributor.md',
    '.gitignore/foo',
    'a/.b/c/a.js',
    'a/.git/c/a.js',
    'a/b.c.d/e.js',
    'a/b.js',
    '/../git',
    'a/b/c/d/e.js',
  ].forEach(function(filepath) {
    it('should be false: ' + filepath, function() {
      assert(!test(filepath));
    });
  });

  var truthy = [
    '.editorconfig',
    '.git',
    '.gitignore',
    '.travis.yml',
    '/.git',
    '/.gitignore',
    'a/.b/c/.gitignore',
    'a/.gitignore',
    'a/b.c.d/e.js/.git',
    'a/b/c/d/.gitignore',
  ].forEach(function(filepath) {
    it('should be true: ' + filepath, function() {
      assert(test(filepath));
    });
  });

  it('should match dotfiles', function() {
    assert.equal(regex().exec('a/b/c/d/.gitignore')[0], '/.gitignore');
    assert.equal(regex().exec('a/.b/c/.gitignore')[0], '/.gitignore');
    assert.equal(regex().exec('a/.gitignore')[0], '/.gitignore');
    assert.equal(regex().exec('.gitignore')[0], '.gitignore');
    assert.equal(regex().exec('/.gitignore')[0], '/.gitignore');
  });
});
