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
      message : 'Name? (default with app)',
      default : 'app'
    },
    {
      type: 'input',
      name: 'description',
      message: 'Description? (default with description)',
      default: 'description'
    },
    {
      type: 'input',
      name: 'url',
      message: 'URL? (default with app.local)',
      default: 'app.local'
    },
    {
      type: 'input',
      name: 'repo',
      message: 'Repository (default with git://github.com/foo/bar.git)',
      default: 'git://github.com/foo/bar.git'
    }
  ], function (answers) {
      this.name = answers.name;
      this.description = answers.description;
      this.url = answers.url;
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
    this.copy('scss/_b64.scss', 'src/scss/_b64.scss');
    this.copy('scss/_settings.scss', 'src/scss/_settings.scss');
    this.copy('scss/style.scss', 'src/scss/style.scss');

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
    this.installDependencies({
      callback: function () {
        chalk.green('You can run ') + chalk.blue('gulp build && gulp webserver') + chalk.green(' to preview the default build in your browser.');
      }.bind(this)
    });
  }
});

module.exports = FrontKickGenerator;
