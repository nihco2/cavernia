define([
  "views/ApplicationView",
  "controllers/ApplicationController",
  "routes/ApplicationRoute",
  "mixins/converter",
  "app/router",
  "models/cavern"
], function(ApplicationView, ApplicationController, ApplicationRoute, Converter, Router, Cavern) {
  /*Module Pattern*/
  var App = {
    ApplicationView: ApplicationView,
    ApplicationController: ApplicationController,
    ApplicationRoute: ApplicationRoute,
    Converter: Converter,
    Router: Router,
    Cavern: Cavern
  };
  return App;
});