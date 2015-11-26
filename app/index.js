'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var mkdirp = require('mkdirp');

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

        var prompts = [
          {
            type: 'input',
            name: 'KickFrontAppName',
            message: 'Name? (default with app)',
            default: 'app'
          },
          {
            type: 'input',
            name: 'KickFrontAppDescription',
            message: 'Name? (default with description)',
            default: 'description'
          },
          {
            type: 'input',
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
        this.installDependencies();
    }
});

module.exports = FrontKickGenerator;
