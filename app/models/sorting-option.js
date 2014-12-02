import Ember from 'ember';

export default Ember.Object.extend({
  isActive: false,
  isAscending: true,

  slug: function () {
    var parts = [ this.get('id') ];

    if (!this.get('isAscending')) {
      parts.push('asc');
    }

    return parts.join('-');
  }.property('isAscending', 'isActive')
});
