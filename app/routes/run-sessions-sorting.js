import Ember from 'ember';
import SortingOption from 'runtastic-coding-contest/models/sorting-option';

var options = [
  {
    id: 'start_time',
    label: 'Start Time',
    wide: true
  },
  {
    id: 'duration',
    label: 'Duration'
  },
  {
    id: 'end_time',
    label: 'End'
  },
  {
    id: 'distance',
    label: 'Distance'
  },
  {
    id: 'encoded_trace',
    label: 'Trace'
  }
].map(function (data) {
  return SortingOption.create(data);
});

export default Ember.Route.extend({
  model: function (params) {
    return params.sorting;
  },
  afterModel: function () {
    var page = this.paramsFor('run-sessions-page').page;

    Ember.run.later(function () {
      this.replaceWith('run-sessions-page', page || '1');
    }.bind(this));
  },
  setupController: function (controller) {
    controller.set('options', options);
    this._super.apply(this, arguments);
  }
});
