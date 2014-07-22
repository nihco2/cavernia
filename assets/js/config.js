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
    /*libs*/
    'jquery': '../linker/jquery/jquery',
    'handlebars': '../linker/handlebars/handlebars',
    'ember': '../linker/ember/ember',
    'ember-data': '../linker/ember-data/ember-data',
    'async': '../linker/requirejs-plugins/async',
    'App': 'app/application',
    'models': 'app/models',
    'views': 'app/views',
    'controllers': 'app/controllers',
    'routes': 'app/routes',
    'templates': 'app/templates'
  },
  /*hbs plugin options*/
  hbs: {
    disableI18n: true,
    templateExtension: "html"
  }

});