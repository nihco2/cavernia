define([
  "views/ApplicationView",
  "controllers/ApplicationController",
  "routes/ApplicationRoute",
  "app/router",
  "models/cavern"
], function(ApplicationView, ApplicationController, ApplicationRoute, Router, ApplicationStore) {
  /*Module Pattern*/
  var App = {
    ApplicationView: ApplicationView,
    ApplicationController: ApplicationController,
    ApplicationRoute: ApplicationRoute,
    Router: Router,
    ApplicationStore: DS.Store.extend()
  };

  return App;
});