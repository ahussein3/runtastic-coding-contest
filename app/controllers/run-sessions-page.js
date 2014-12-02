import Ember from 'ember';
import DS from 'ember-data';

export default Ember.ArrayController.extend({
  perPage: Ember.computed.alias('pagination.per_page'),
  availablePages: Ember.computed.alias('pagination.available_pages'),
  length: Ember.computed.alias('pagination.total'),

  objectAt: function (index) {
    var perPage = this.get('perPage'),
        pageNumber = Math.floor(index / perPage),
        indexOnPage = index % perPage;

    return DS.PromiseObject.create({
      promise: this.store.find('run-session', {
        sort_by: this.get('pagination.sort_by'),
        order: this.get('pagination.order'),
        page: pageNumber + 1
      }).then(function (runSessions) {
        return runSessions.objectAt(indexOnPage);
      })
    });
  },

  currentPageChanged: function () {
    if (this.get('currentPage')) {
      this.replaceRoute('run-sessions-page', this.get('currentPage'));
    }
  }.observes('currentPage')
});
