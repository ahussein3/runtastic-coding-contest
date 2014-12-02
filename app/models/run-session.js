import DS from 'ember-data';

var a = DS.attr;

export default DS.Model.extend({
  startTime: a('moment'),
  endTime: a('moment'),
  duration: a('number'),
  distance: a('number')
});
