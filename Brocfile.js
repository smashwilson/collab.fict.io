/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp();

app.import('bower_components/bootstrap/dist/css/bootstrap.css');
app.import('bower_components/bootstrap/dist/js/bootstrap.js');

app.import('bower_components/fontawesome/css/font-awesome.css');
app.import('bower_components/fontawesome/fonts/fontawesome-webfont.eot', { destDir: 'fonts' });
app.import('bower_components/fontawesome/fonts/fontawesome-webfont.svg', { destDir: 'fonts' });
app.import('bower_components/fontawesome/fonts/fontawesome-webfont.ttf', { destDir: 'fonts' });
app.import('bower_components/fontawesome/fonts/fontawesome-webfont.woff', { destDir: 'fonts' });
app.import('bower_components/fontawesome/fonts/fontawesome-webfont.woff2', { destDir: 'fonts' });
app.import('bower_components/fontawesome/fonts/FontAwesome.otf', { destDir: 'fonts' });

module.exports = app.toTree();
