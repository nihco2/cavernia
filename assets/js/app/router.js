define(["ember"], function(Ember) {
  var Router = Ember.Router.extend({
    root: Ember.Route.extend({
      index: Ember.Route.extend({
        route: '/'
      })
    })
  });
  Router.map(function() {
    this.resource('search');
  });
  return Router;
});