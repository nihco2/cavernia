define([
  "ember"
], function(Ember) {

  var ApplicationView = Ember.View.extend({
    templateName: 'main-template',
    classNames: ['app-view'],
    didInsertElement: function() {
      if (navigator.geolocation) {
        var centerpos = new google.maps.LatLng(50, 10);
        var optionsGmaps = {
          center: centerpos,
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          zoom: 5
        };
        var map = new google.maps.Map(document.getElementById("map"), optionsGmaps);
      } else {
        console.log('no geoloc');
      }
    }
  });
  return ApplicationView;
});