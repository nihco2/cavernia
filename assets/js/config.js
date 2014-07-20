define({
  app_name: "appName",
  shim: {
    'ember': {
      deps: ['handlebars', 'jquery'],
      exports: 'Ember'
    },
    'ember-data': {
      deps: ['ember'],
      exports: 'DS'
    }
  },
  paths: {
    'App': 'app/application',
    'models': 'app/models',
    'views': 'app/views',
    'controllers': 'app/controllers',
    'routes': 'app/routes',
    'templates': 'app/templates',
    /*libs*/
    'jquery': '../linker/jquery/jquery',
    'handlebars': '../linker/handlebars/handlebars',
    'ember': '../linker/ember/ember',
    'ember-data': '../linker/ember-data/ember-data'
  },
  /*hbs plugin options*/
  hbs: {
    disableI18n: true,
    templateExtension: "html"
  }

});