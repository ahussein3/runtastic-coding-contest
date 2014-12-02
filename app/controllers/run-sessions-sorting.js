import Ember from 'ember';

export default Ember.Controller.extend({
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
