define([
  "ember", "mixins/Converter", "text!templates/application.hbs"
], function(Ember, Converter, applicationTemplate) {

  var ApplicationView = Ember.View.extend(Converter, {
    //templateName: 'main-template',
    map: null,
    defaultTemplate: Ember.Handlebars.compile(applicationTemplate),
    classNames: ['app-view'],
    didInsertElement: function() {
      if (navigator.geolocation) {
        var self = this;
        self.showMyPosition();
      } else {
        console.log('no geoloc');
      }
    },

    showMyPosition: function() {
      var self = this;
      navigator.geolocation.getCurrentPosition(function(position) {
        var myLatitude = position.coords.latitude,
          myLongitude = position.coords.longitude,
          myPosition = new google.maps.LatLng(myLatitude, myLongitude),
          optionsGmaps = {
            center: myPosition,
            mapTypeId: google.maps.MapTypeId.SATELLITE,
            zoom: 15
          };
        self.map = new google.maps.Map(document.getElementById("map"), optionsGmaps);
        // ROADMAP peut être remplacé par SATELLITE, HYBRID ou TERRAIN
        // Zoom : 0 = terre entière, 19 = au niveau de la rue
        self.showMarker(myPosition, "Vous êtes ici");
      });
    },
    showMarker: function(position, title) {
      var self = this;
      var marker = new google.maps.Marker({
        position: position,
        map: self.map,
        title: title
      });
    },
    actions: {
      findCave: function() {
        var self = this;
        self.convert(561289, 6413404).then(function(coords) {
          var position = new google.maps.LatLng(coords.latitude, coords.longitude);
          self.showMarker(position, "grotte");
          self.map.panTo(position);
        });
      }
    }
  });
  return ApplicationView;
});