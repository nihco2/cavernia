define(["ember", 'async!http://maps.googleapis.com/maps/api/js?sensor=true'], function(Ember) {
  var ApplicationController = Ember.Controller.extend({
    cavernName: '',
    caverns: [],
    cavernsObserver: function() {
      this.set('cavernName', this.caverns.nom);
    }.observes('caverns')
  });
  return ApplicationController;
});