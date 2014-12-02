import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['sessions-list'],
  itemHeight: 40,

  listView: Ember.computed.alias('childViews.firstObject'),
  maxScrollTop: Ember.computed.alias('listView.maxScrollTop'),

  pageHeight: function () {
    return this.get('perPage') * this.get('itemHeight');
  }.property('perPage', 'itemHeight'),

  calculateHeight: function () {
    this.set('height', this.$().height());
    Ember.$(window).resize(this.calculateHeight.bind(this));
    Ember.run.later(function(){
      this.trigger('didInsertList');
    }.bind(this));
  }.on('didInsertElement'),

  initPageCounter: function () {
    var listView = this.get('listView');

    this.gotoPage(this.get('currentPage'));
    listView.on('scrollYChanged', this, this.calculateCurrentPage);
  }.on('didInsertList'),

  calculateCurrentPage: function (_scrollTop) {
    var scrollTop = _scrollTop || 0,
        currentPage = (scrollTop / this.get('itemHeight') / this.get('perPage')) + 1;

    this.set('currentPage', Math.round(currentPage));
  },

  gotoPage: function (number) {
    this.get('listView').scrollTo((number - 1) * this.get('pageHeight'));
  },

  actions: {
    prevPage: function () {
      var number = Math.max(1, this.get('currentPage') - 1);
      this.gotoPage(number);
    },
    nextPage: function () {
      var number = Math.min(this.get('currentPage') + 1, this.get('availablePages'));
      this.gotoPage(number);
    }
  }

});
