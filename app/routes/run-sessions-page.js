import Ember from 'ember';

export default Ember.Route.extend({
  model: function (params) {
    var sortingParams = this.paramsFor('run-sessions-sorting');
    sortingParams = sortingParams.sorting.split('-');

    params = Ember.$.extend({}, params, {
      sort_by: sortingParams.objectAt(0),
      order: sortingParams.objectAt(1) || 'desc'
    });

    return this.store.findQuery('runSession', params);
  },

  setupController: function (controller) {
    controller.setProperties({
      model: [],
      currentPage: parseInt(this.paramsFor(this.routeName).page),
      pagination: this.store.metadataFor('runSession').pagination
    });
  }
});
