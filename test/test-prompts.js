/*global describe, beforeEach, it */
'use strict';

var path = require('path');
var helpers = require('yeoman-generator').test;
var assert = require('yeoman-generator').assert;

before(function(done){
  helpers.run(path.join( __dirname, '../app'))
  .withPrompts({
    name: 'frontkick-app',
    description: 'Frontkick app generated with Yeoman',
    repo: 'git://github.com/foo/bar.git',
    url: 'app.local'
  })
  .on('ready', function (generator) {
    // This is called right before `generator.run()` is called
  })
  .on('end', done);
});

describe('frontkick generator with prompts', function() {
  it('copies twig index file', function() {
    assert.file('src/index.twig');
  });
});
