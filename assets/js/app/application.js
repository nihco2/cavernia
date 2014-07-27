define([
  "views/ApplicationView",
  "views/IndexView",
  "views/SearchView",
  "controllers/ApplicationController",
  "controllers/IndexController",
  "controllers/SearchController",
  "routes/ApplicationRoute",
  "routes/IndexRoute",
  "routes/SearchRoute",
  "mixins/converter",
  "app/router",
  "models/cavern"
], function(
  ApplicationView,
  IndexView,
  SearchView,
  ApplicationController,
  IndexController,
  SearchController,
  ApplicationRoute,
  IndexRoute,
  SearchRoute,
  Converter,
  Router,
  Cavern
) {
  /*Module Pattern*/
  var App = {
    ApplicationView: ApplicationView,
    IndexView: IndexView,
    SearchView: SearchView,
    ApplicationController: ApplicationController,
    IndexController: IndexController,
    SearchController: SearchController,
    ApplicationRoute: ApplicationRoute,
    IndexRoute: IndexRoute,
    SearchRoute: SearchRoute,
    Converter: Converter,
    Router: Router,
    Cavern: Cavern,
    rootElement: '#ember-app'
  };
  return App;
});