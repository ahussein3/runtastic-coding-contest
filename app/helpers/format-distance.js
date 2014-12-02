import Ember from 'ember';

export function formatDistance(input) {
  if (!input) {
    input = 0;
  }
  if (input < 1000) {
    return '%@ m'.fmt(input);
  }
  if (input < 10000) {
    return '%@ km'.fmt((input / 1000).toFixed(1));
  }

  return '%@ km'.fmt(Math.round(input / 1000));
}

export default Ember.Handlebars.makeBoundHelper(formatDistance);
