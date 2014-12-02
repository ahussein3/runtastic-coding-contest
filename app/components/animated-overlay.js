import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['overlay'],
  classNameBindings: ['isHidden:hidden'],

  animate: function () {
    this.set('isHidden', true);

    Ember.run.later(function () {
      this.set('isHidden', false);
    }.bind(this), 30);
  }.on('didInsertElement')
});
