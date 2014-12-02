import Ember from 'ember';
import SortingOption from 'runtastic-coding-contest/models/sorting-option';

export default Ember.Controller.extend({
  initOptions: function () {
    var options = [
      {
        id: 'start_time',
        label: 'Start Time'
      },
      {
        id: 'end_time',
        label: 'End Time'
      },
      {
        id: 'duration',
        label: 'Duration'
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

    this.set('options', options);
  }.on('init'),

  activeOption: function () {
    return this.get('options').findBy('isActive');
  }.property('options.@each.isActive'),

  sortingChanged: function () {
    var params = this.get('model').split('-'),
        id = params.objectAt(0),
        isAscending = (params.objectAt(1) === 'asc'),
        activeOption = this.get('activeOption');

    if (this.get('activeOption.id') === id) {
      activeOption.set('isAscending', isAscending);
    } else {
      if (activeOption) {
        activeOption.setProperties({
          isActive: false,
          isAscending: true
        });
      }

      this.get('options').findBy('id', id).setProperties({
        isActive: true,
        isAscending: isAscending
      });
    }

  }.observes('model')

});
