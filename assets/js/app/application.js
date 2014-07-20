define([
  "views/ApplicationView",
  "controllers/ApplicationController",
  "routes/ApplicationRoute",
  "app/router",
  "models/cavern"
], function(ApplicationView, ApplicationController, ApplicationRoute, Router) {
  /*Module Pattern*/
  var App = {
    ApplicationView: ApplicationView,
    ApplicationController: ApplicationController,
    ApplicationRoute: ApplicationRoute,
    Router: Router
  };

  return App;
});