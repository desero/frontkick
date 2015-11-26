#<%= KickFrontAppName %>

### Setup & build

Install gulp globally so its available to CLI

```shell
npm install -g gulp
```

Install dependecies

```shell
npm install && bower install
```

Build the site

```shell
gulp build
```

Open the site in web browser

```shell
gulp webserver
```

### Preview

Built files are located in genrated `dist` folder. You can open `index.html` with your browser. Or you can run `gulp webserver` and browser will automatically open the preview.

### Requirements

Tools required: [node.js](https://nodejs.org/), [bower](http://bower.io/) and [gulp](http://gulpjs.com/)
