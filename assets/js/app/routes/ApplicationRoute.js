define([
  "ember"
], function(Ember) {

  var ApplicationRoute = Ember.Route.extend({
    setupController: function(controller, model) {
      var self = this;
      socket.get('/cavern', function(response) {
        // response === {success: true, message: 'hi there!'}
        console.log('HEY!', response.cavern);
        response.cavern.forEach(function(item) {
          //self.store.createRecord('cavern', item);
        })

      });
    }
  });
  return ApplicationRoute;
});