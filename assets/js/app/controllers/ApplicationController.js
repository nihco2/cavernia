define(["ember", 'async!http://maps.googleapis.com/maps/api/js?sensor=true'], function(Ember) {
  var ApplicationController = Ember.Controller.extend({
    cavernName: '',
    departementsTmp: [],
    departements: [],
    departementsObserver: function(item) {
      this.departements.pushObject(this.departementsTmp);
    }.observes('departementsTmp')
  });
  return ApplicationController;
});