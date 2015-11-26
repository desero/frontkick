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

##### 0.0.1 (26.11.2015)

- init
