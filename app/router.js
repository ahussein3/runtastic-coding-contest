import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('run-sessions-sorting', { path: ':sorting' }, function () {
    this.resource('run-sessions-page', { path: ':page' }, function () {
      this.resource('run-session', { path: ':id' });
    });
  });
});

export default Router;
