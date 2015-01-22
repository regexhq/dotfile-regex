/*!
 * dotfile-regex <https://github.com/jonschlinkert/dotfile-regex>
 *
 * Copyright (c) 2015 Jon Schlinkert.
 * Licensed under the MIT License
 */

'use strict';

var assert = require('assert');
var re = require('./')();

it('should match dotfiles', function () {
  assert.equal(re.exec('a/b/c/d/.gitignore')[0], '/.gitignore');
  assert.equal(re.exec('a/b/c/d/.gitignore')[1], '.gitignore');
  assert.equal(re.exec('a/.b/c/.gitignore')[0], '/.gitignore');
  assert.equal(re.exec('a/.b/c/.gitignore')[1], '.gitignore');
  assert.equal(re.exec('a/.gitignore')[0], '/.gitignore');
  assert.equal(re.exec('a/.gitignore')[1], '.gitignore');
  assert.equal(re.exec('.gitignore')[0], '.gitignore');
  assert.equal(re.exec('.gitignore')[1], '.gitignore');
  assert.equal(re.exec('/.gitignore')[0], '/.gitignore');
  assert.equal(re.exec('/.gitignore')[1], '.gitignore');
});

it('should not match non-dotfiles', function () {
  assert.equal(re.exec('a/b/c/d/e.js'), null);
  assert.equal(re.exec('a/b.c.d/e.js'), null);
  assert.equal(re.exec('a/b.js'), null);
  assert.equal(re.exec('a/.b/c/a.js'), null);
  assert.equal(re.exec('.gitignore/foo'), null);
});

it('should return false when the file is not a dotfile', function () {
  assert.equal(re.test('a/b/c/d/e.js'), false);
  assert.equal(re.test('a/b.c.d/e.js'), false);
  assert.equal(re.test('a/b.js'), false);
  assert.equal(re.test('a/.b/c/a.js'), false);
  assert.equal(re.test('.gitignore/foo'), false);
});

it('should return true when the file is a dotfile', function () {
  assert.equal(re.test('a/b/c/d/.gitignore'), true);
  assert.equal(re.test('a/.b/c/.gitignore'), true);
  assert.equal(re.test('a/.gitignore'), true);
  assert.equal(re.test('.gitignore'), true);
  assert.equal(re.test('/.gitignore'), true);
});
