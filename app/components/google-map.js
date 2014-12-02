import Ember from 'ember';

/* global google */

var mapsLoader = new Ember.RSVP.Promise(function(resolve){
  window.resolveGoogleMaps = resolve;

  Ember.$(document).ready(function(){
    Ember.$.getScript('https://maps.googleapis.com/maps/api/js??v=3.exp&libraries=geometry&callback=resolveGoogleMaps');
  });
});

export default Ember.Component.extend({
  classNames: ['google-map'],

  loadMap: function () {
  }.on('didInsertElement'),

  createMap: function () {
    mapsLoader.then(function () {
      Ember.run.later(function(){
        var map = new google.maps.Map(this.element),
            path = this.get('path'),
            poly = new google.maps.Polyline(),
            bounds = new google.maps.LatLngBounds();

        map.setOptions({
          disableDefaultUI: true,
          draggable: false,
          scrollwheel: false,
          zoomControl: true
        });

        path = google.maps.geometry.encoding.decodePath(path);

        var polyOptions = {
          strokeColor: '#e74c3c',
          strokeOpacity: 1.0,
          strokeWeight: 3,
          path: path,
          map: map
        };

        poly.setOptions(polyOptions);

        path.forEach(function(latlng){
          bounds.extend(latlng);
        });

        map.fitBounds(bounds);
      }.bind(this));
    }.bind(this));
  }.on('didInsertElement')
});
