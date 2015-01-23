/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp();

app.import('bower_components/bootstrap/dist/css/bootstrap.css');
app.import('bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.eot');
app.import('bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.svg');
app.import('bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.ttf');
app.import('bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.woff');
app.import('bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.woff2');
app.import('bower_components/bootstrap/dist/js/bootstrap.js');

app.import('bower_components/fontawesome/css/font-awesome.css');
app.import('bower_components/fontawesome/fonts/fontawesome-webfont.eot');
app.import('bower_components/fontawesome/fonts/fontawesome-webfont.svg');
app.import('bower_components/fontawesome/fonts/fontawesome-webfont.ttf');
app.import('bower_components/fontawesome/fonts/fontawesome-webfont.woff');
app.import('bower_components/fontawesome/fonts/fontawesome-webfont.woff2');
app.import('bower_components/fontawesome/fonts/FontAwesome.otf');

module.exports = app.toTree();
