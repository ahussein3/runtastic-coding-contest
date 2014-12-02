import Ember from 'ember';

export default Ember.ListView.extend({
  rowHeight: 40,
  templateName: 'run-sessions-list',
  itemViewClass: Ember.ListItemView.extend({
    templateName: 'run-session-snippet'
  })
});
