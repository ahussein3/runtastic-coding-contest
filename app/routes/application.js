import Ember from 'ember';

var sportTypes = [
  { id: 1, icon: 'ion-man' },
  { id: 2, icon: 'ion-woman' },
  { id: 3, icon: 'ion-female' },
  { id: 4, icon: 'ion-male' },
  { id: 5, icon: 'ion-fork' },
  { id: 6, icon: 'ion-beer' },
  { id: 7, icon: 'ion-wineglass' },
  { id: 8, icon: 'ion-coffee' },
  { id: 9, icon: 'ion-icecream' },
  { id: 10, icon: 'ion-pizza' }
];



export default Ember.Route.extend({
  model: function () {
    var types = [];

    for (var i = 0; i < 7; i++) {
      types = types.concat(sportTypes.map(function(sportType){
        return {
          id: sportType.id + (i*10),
          icon: sportType.icon
        }
      }));
    }

    return this.store.pushMany('sportType', types);
  }
});
