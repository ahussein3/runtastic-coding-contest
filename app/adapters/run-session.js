import ApplicationAdapter from './application';

var promises = {};
var meta = {};

export default ApplicationAdapter.extend({
  findQuery: function (store, model, query) {
    var uid = Ember.keys(query).sort().map(function (k) {
      return query[k];
    }).join('-');

    if (!promises[uid]) {
      promises[uid] = this._super.apply(this, arguments);
    }

    promises[uid].then(function (data) {
      if (data.meta) {
        meta[uid] = data.meta;
      }

      store.metaForType('run-session', meta[uid]);
    });

    return promises[uid];
  }
});
