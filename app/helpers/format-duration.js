import Ember from 'ember';

/* global moment */

export function formatDuration(miliseconds) {
  return moment.duration(miliseconds / 1000, 'seconds').format('h:mm', { trim: false });
}

export default Ember.Handlebars.makeBoundHelper(formatDuration);
