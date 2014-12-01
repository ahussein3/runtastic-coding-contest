import Ember from 'ember';

export default Ember.ArrayController.extend({
  pagination: function () {
    return this.store.metadataFor('runSession').pagination;
  }.property('@each'),

  perPage: Ember.computed.alias('pagination.per_page'),
  availablePages: Ember.computed.alias('pagination.available_pages'),
  length: Ember.computed.alias('pagination.total'),

  objectAt: function (index) {
    var perPage = this.get('perPage'),
        pageNumber = Math.floor(index / perPage),
        indexOnPage = index % perPage,
        pages = this.get('model');

    if (pageNumber in pages) {
      var runSession = pages.objectAt(pageNumber).objectAt(indexOnPage);

      if (runSession) {
        return runSession;
      }
    }

    return DS.PromiseObject.create({
      promise: this.loadPage(pageNumber).then(function (runSessions) {
        return runSessions.objectAt(indexOnPage);
      })
    });
  },

  loadPage: function (pageNumber) {
    if (pageNumber in this.get('model')) {
      return this.get('model')[pageNumber];
    }

    var pagePromise = this.store.findQuery('runSession', { page: pageNumber + 1 });
    this.get('model')[pageNumber] = pagePromise;

    return pagePromise;
  }
});
