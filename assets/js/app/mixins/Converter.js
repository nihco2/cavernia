define([
  "ember"
], function(Ember) {
  var Converter = Ember.Mixin.create({
    convert: function(latitude, longitude) {
      var self = this;
      return new Ember.RSVP.Promise(function(resolve, reject) {
        var r = Math.sqrt(Math.pow(latitude - 700000.0, 2) + Math.pow(longitude - 12655612.04987618, 2)),
          theta = Math.atan((latitude - 700000.0) / (12655612.04987618 - longitude)),
          lambda = 0.0523598776 + theta / 0.725607765053268,
          isomlat = -(1 / 0.725607765053268) * Math.log(Math.abs(r / 11754255.426095668)),
          phi = self.computeLatitude(isomlat, 0.08181919104, 0.00000000001),
          coords = {
            latitude: phi * 180 / Math.PI,
            longitude: lambda * 180 / Math.PI
          };
        resolve(coords);
      }, function(err) {
        reject(err);
      });
    },
    convertToLambert: function(lat, long) {
      //this function converts GPS-System coordinates (latitude, longitude) into x,y coordinates using the french Lambert-93 system. Returns x,y in an array.
      return new Ember.RSVP.Promise(function(resolve, reject) {
        var e = 0.0818191910435,
          n = 0.725607765053268,
          c = 11754255.426095668,
          ys = 700000,
          xs = 12655612.04987618,
          isomLat = Math.log(Math.tan(Math.PI / 4 + lat / 2) * Math.pow((1 - e * Math.sin(lat)) / (1 + e * Math.sin(lat)), e / 2)),
          x = xs + c * Math.exp(-n * isomLat) * Math.sin(n * (long - 3)),
          y = ys - c * Math.exp(-n * isomLat) * Math.cos(n * (long - 3)),
          coords = {
            latitude: x,
            longitude: y
          };
        resolve(coords);
      }, function(err) {
        reject(err);
      });
    },

    computeLatitude: function(isomlat, excent, epsilone) {
      var phi = 2 * Math.atan(Math.exp(isomlat) - Math.PI / 2);

      do {
        var oldPhi = phi;
        phi = 2 * Math.atan(Math.pow((1 + excent * Math.sin(oldPhi)) / (1 - excent * Math.sin(oldPhi)), excent / 2) * Math.exp(isomlat)) - Math.PI / 2;
      }
      while (Math.abs(phi - oldPhi) >= epsilone);

      return phi;
    }
  });
  return Converter;
});