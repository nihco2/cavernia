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
  "mixins/position",
  "app/router",
  "models/cavern",
  "models/departement"
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
  Position,
  Router,
  Cavern,
  Departement
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
    Position: Position,
    Router: Router,
    Cavern: Cavern,
    Departement: Departement,
    rootElement: '#ember-app'
  };
  return App;
});