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