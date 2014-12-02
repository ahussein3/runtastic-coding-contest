/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp();

app.import('vendor/fast-click.js');
app.import('vendor/list-view.js');
app.import('bower_components/moment/min/moment-with-locales.js');
app.import('bower_components/moment-duration-format/lib/moment-duration-format.js');

module.exports = app.toTree();

