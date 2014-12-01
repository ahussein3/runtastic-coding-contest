import Ember from 'ember';

export default Ember.Component.extend({
  scrollYChanged: function () {
    this.get('childViews.firstObject').on('scrollYChanged', this, this.calculateScrollRatio);
  }.on('didInsertElement'),

  calculateScrollRatio: function (_scrollTop) {
    var scrollTop = _scrollTop || 0,
        maxScrollTop = this.get('childViews.firstObject.maxScrollTop');

    this.set('scrollRatio', scrollTop / maxScrollTop);
  }.on('didInsertElement'),

  currentPage: function () {
    return Math.ceil(this.get('scrollRatio') * this.get('availablePages')) || 1;
  }.property('scrollRatio', 'availablePages')
});
