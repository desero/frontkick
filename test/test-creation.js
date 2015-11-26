/*global describe, beforeEach, it */
'use strict';
var path = require('path');
var helpers = require('yeoman-generator').test;
var assert = require('yeoman-generator').assert;

before(function(done){
  helpers.run(path.join( __dirname, '../app'))
  .withPrompts({
    'KickFrontAppName': 'app',
    'KickFrontAppDescription': 'app',
    'KickFrontAppUrl': 'url'
  })
  .on('ready', function(generator) {

  })
  .on('end', done);
});

describe('frontkick generator', function() {
  it('copies twig index file',function() {
    assert.file('src/index.twig');
  });
});
