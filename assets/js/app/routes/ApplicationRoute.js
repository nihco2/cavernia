define([
  "ember"
], function(Ember) {

  var ApplicationRoute = Ember.Route.extend({
    setupController: function(controller, model) {
      var self = this;
      socket.get('/cavern', function(response) {
        response.cavern.forEach(function(item) {
          var arr = Ember.keys(item);
          //dptName = arr[0];
          self.get('controller').set('departementsTmp', item);
        });
      });
    }
  });
  return ApplicationRoute;
});