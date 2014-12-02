import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['sessions-list'],
  height: 300,

  listView: Ember.computed.alias('childViews.firstObject'),
  maxScrollTop: Ember.computed.alias('listView.maxScrollTop'),

  initPageCounter: function () {
    var listView = this.get('listView'),
        heightPerPage = (this.get('listView.totalHeight') / this.get('availablePages')),
        scrollTop = Math.ceil((this.get('currentPage') - 1) * heightPerPage);

    listView.scrollTo(scrollTop);
    listView.on('scrollYChanged', this, this.calculateScrollRatio);
  }.on('didInsertElement'),

  calculateScrollRatio: function (_scrollTop) {
    var scrollTop = _scrollTop || 0,
        maxScrollTop = this.get('maxScrollTop'),
        scrollRatio = scrollTop / maxScrollTop;

    this.set('currentPage', Math.ceil(scrollRatio * this.get('availablePages')) || 1);
  },

  initHeightCalculation: function () {
    Ember.$(window).resize(this.calculateHeight.bind(this));
  }.on('init'),

  calculateHeight: function () {
    this.set('height', this.$().height());
  }.on('didInsertElement')

});
