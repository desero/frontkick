'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var optionOrPrompt = require('yeoman-option-or-prompt');
var chalk = require('chalk');

var FrontKickGenerator = yeoman.generators.Base.extend({

  _optionOrPrompt: optionOrPrompt,

  init: function () {
    this.pkg = require('../package.json');
    this.on('end', function () {
      if (!this.options['skip-install']) {
        this.installDependencies();
      }
    });
  },

  askFor: function () {
    var done = this.async();

    this.log('Welcome to Frontkick Generator.');

    this._optionOrPrompt([{
      type    : 'input',
      name    : 'name',
      message : 'Name:',
      default : 'app'
    },
    {
      type: 'input',
      name: 'description',
      message: 'Description:',
      default: 'description'
    },
    {
      type: 'input',
      name: 'author',
      message: 'Author:',
      default: 'author <author@example.com>'
    },
    {
      type: 'input',
      name: 'url',
      message: 'URL:',
      default: 'http://0.0.0.0:8000'
    },
    {
      type: 'input',
      name: 'repo',
      message: 'Repository:',
      default: 'git://github.com/foo/bar.git'
    }
  ], function (answers) {
      this.name = answers.name;
      this.description = answers.description;
      this.url = answers.url;
      this.repo = answers.repo;
      done();
    }.bind(this));
  },

  app: function () {
    // TWIG
    this.copy('index.twig', 'src/index.twig');
    this.copy('twig/footer.twig', 'src/twig/footer.twig');
    this.copy('twig/layout.twig', 'src/twig/layout.twig');
    this.copy('twig/navigation.twig', 'src/twig/navigation.twig');

    // SASS
    this.copy('sass/_b64.scss', 'src/sass/_b64.scss');
    this.copy('sass/_settings.scss', 'src/sass/_settings.scss');
    this.copy('sass/style.scss', 'src/sass/style.scss');

    // Javascript
    this.copy('js/javascript.js', 'src/js/javascript.js');

    // MISC
    this.copy('_gitkeep', 'src/images/.gitkeep');
    this.copy('_gitkeep', 'src/fonts/.gitkeep');
    this.copy('_gitignore', '.gitignore');
    this.copy('_bowerrc', '.bowerrc');
    this.template('_README.md', 'README.md');
    this.template('_package.json', 'package.json');
    this.template('_bower.json', 'bower.json');
    this.copy('_gulpfile.js', 'gulpfile.js');
  },

  install: function () {
    this.installDependencies();
  },

  end: function () {
    var howToInstall = '\nYou can run ' + chalk.yellow.bold('gulp build && gulp webserver') + ' to preview the default build in your browser. ' + '\nYou can run the watcher ' + chalk.yellow.bold('gulp watcher') + ' to watch for your files in dev enviroment.';
    this.log(howToInstall);
  }
});

module.exports = FrontKickGenerator;
