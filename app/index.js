'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');


var FrontKickGenerator = yeoman.generators.Base.extend({
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

        // have Yeoman greet the user
        this.log(this.yeoman);

        // replace it with a short and sweet description of your generator
        this.log(chalk.magenta('Yo Jeet!.'));

        var prompts = [
          {
            type: 'confirm',
            name: 'KickFrontAppName',
            message: 'Name? (default with app)',
            default: 'app'
          },
          {
            type: 'confirm',
            name: 'KickFrontAppDescription',
            message: 'Name? (default with description)',
            default: 'description'
          },
          {
            type: 'confirm',
            name: 'KickFrontAppUrl',
            message: 'Name? (default with app.local)',
            default: 'app.local'
          }
      ];

        this.prompt(prompts, function (props) {
            this.KickFrontAppName = props.KickFrontAppName;
            this.KickFrontAppDescription = props.KickFrontAppDescription;
            this.KickFrontAppUrl = props.KickFrontAppUrl;

            done();
        }.bind(this));
    },

    app: function () {
        this.mkdir('src');
        // this.mkdir('dist');

        this.mkdir('src/images');
        this.mkdir('src/fonts');

        // this.copy('index.html', 'app/index.html');

        // SASS
        this.mkdir('src/scss');
        this.copy('scss/_b64.scss', 'src/scss/_b64.scss');
        this.copy('scss/_settings.scss', 'src/scss_settings.scss');
        this.copy('scss/style.scss', 'src/scss/style.scss');

        this.mkdir('src/js');
        this.copy('js/javascript.js', 'src/js/javascript.js');

        this.copy('_bowerrc', '.bowerrc');
        this.template('_package.json', 'package.json');
        this.template('_bower.json', 'bower.json');

        this.copy('_gulpfile.js', 'gulpfile.js');
    },

    projectfiles: function () {
        // this.copy('editorconfig', '.editorconfig');
        // this.copy('jshintrc', '.jshintrc');
    },

    install: function () {
        this.installDependencies();
    }
});

module.exports = FrontKickGenerator;
