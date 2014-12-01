import Ember from 'ember';

export default Ember.ListView.extend({
  height: 300,
  rowHeight: 30,
  templateName: 'run-sessions-list',
  itemViewClass: Ember.ListItemView.extend({
    templateName: 'run-session-snippet'
  })
});
