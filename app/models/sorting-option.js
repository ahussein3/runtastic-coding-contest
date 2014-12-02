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
  }.property('isAscending', 'isActive'),

  className: function () {
    var classes = [];

    if (this.get('isActive')) {
      classes.push('active');
    }

    if (this.get('wide')) {
      classes.push('wide');
    }

    return classes.join(' ');
  }.property('isActive', 'wide')
});
