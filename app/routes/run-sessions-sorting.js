import Ember from 'ember';

export default Ember.Route.extend({
  model: function (params) {
    return params.sorting;
  },
  afterModel: function () {
    var page = this.paramsFor('run-sessions-page').page;

    Ember.run.later(function () {
      this.replaceWith('run-sessions-page', page || '1');
    }.bind(this));
  }
});
