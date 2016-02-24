# generator-frontkick

[Yeoman](http://yeoman.io) generator for Front Kickstart using [jeet](http://jeet.gs/), [sass](http://sass-lang.com/) and [twig](https://github.com/justjohn/twig.js).

## Features!
* Gulp tasking
* Sass compiling
* HTML compiled with twig.js
* Publishing to dist directory
* Server with LiveReload (0.0.0.0:8000)
* Bower install

## Getting Started

```
$ npm install -g yo
```

To install generator-frontkick from npm, run:

```
$ npm install -g generator-frontkick
```

Finally, initiate the generator:

```
$ yo frontkick
```

### Usage

After instalation just run ````gulp watch```` (in project folder) for watching your project.

#### Main Gulp Tasks:

..for watching (Sass, JS, Images, Fonts)
```
$ gulp watch
```
..for publishing project (dist directory)
```
$ gulp build
```
..for dist directory preview (server on 0.0.0.0:8000) with LiveReload
```
$ gulp webserver
```

#### License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)

#### Changelog

##### 0.3.6 (24.2.2016)
* Fixed sass folder name
* Minor sass fixes

##### 0.3.5 (14.1.2016)
* Added gulp watch command to app readme file
* Gulp taksk cleanup

##### 0.3.0 (7.12.2015)
* Added repository filed
* Fixed some minor issues
* Added the ability to skip prompts with passed options via CLI
* Cleanup

##### 0.0.1 (26.11.2015)
* Initial release
