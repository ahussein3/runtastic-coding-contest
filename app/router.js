import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('run-sessions-sorting', { path: ':sorting' }, function () {
    this.resource('run-sessions-page', { path: ':page' });
  });
});

export default Router;
