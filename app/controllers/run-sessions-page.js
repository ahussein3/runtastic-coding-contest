import Ember from 'ember';
import DS from 'ember-data';

export default Ember.ArrayController.extend({
  perPage: Ember.computed.alias('pagination.per_page'),
  availablePages: Ember.computed.alias('pagination.available_pages'),
  length: Ember.computed.alias('pagination.total'),

  objectAt: function (index) {
    var perPage = this.get('perPage'),
        pageNumber = Math.floor(index / perPage),
        indexOnPage = index % perPage,
        model = this.get('model'),
        pagePromise;

    if (index in model) {
      return model[index];
    }

    pagePromise = this.store.find('run-session', {
      sort_by: this.get('pagination.sort_by'),
      order: this.get('pagination.order'),
      page: pageNumber + 1
    });

    return DS.PromiseObject.create({
      promise: pagePromise.then(function (runSessions) {
        var runSession = runSessions.objectAt(indexOnPage);

        model[index] = runSession
        return runSession;
      })
    });
  },

  currentPageChanged: function () {
    if (this.get('currentPage')) {
      this.replaceRoute('run-sessions-page', this.get('currentPage'));
    }
  }.observes('currentPage')
});
