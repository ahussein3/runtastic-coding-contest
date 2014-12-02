import Ember from 'ember';

export function formatDate(momentDate) {
  return momentDate.format('L');
}

export default Ember.Handlebars.makeBoundHelper(formatDate);
