define({
  app_name: "cavernia",
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
    'bootsrap': '../linker/bootstrap/bootstrap',
    'handlebars': '../linker/handlebars/handlebars',
    'ember': '../linker/ember/ember',
    'ember-data': '../linker/ember-data/ember-data',
    'async': '../linker/requirejs-plugins/async',
    'text': '../linker/requirejs-plugins/text',
    'App': 'app/application',
    'models': 'app/models',
    'views': 'app/views',
    'controllers': 'app/controllers',
    'routes': 'app/routes',
    'mixins': 'app/mixins',
    'templates': 'app/templates'
  }

});