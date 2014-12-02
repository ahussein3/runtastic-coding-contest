import Ember from 'ember';

export function formatTime(momentDate) {
  return momentDate.format('LT');
}

export default Ember.Handlebars.makeBoundHelper(formatTime);
