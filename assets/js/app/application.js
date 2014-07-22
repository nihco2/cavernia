define([
  "views/ApplicationView",
  "controllers/ApplicationController",
  "routes/ApplicationRoute",
  "app/router",
  "models/cavern"
], function(ApplicationView, ApplicationController, ApplicationRoute, Router, Cavern) {
  /*Module Pattern*/
  var App = {
    ApplicationView: ApplicationView,
    ApplicationController: ApplicationController,
    ApplicationRoute: ApplicationRoute,
    Router: Router,
    Cavern:Cavern
  };

  return App;
});