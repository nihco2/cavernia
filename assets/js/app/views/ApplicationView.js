define([
  "ember", "mixins/Converter", "text!templates/application.hbs"
], function(Ember, Converter, applicationTemplate) {

  var ApplicationView = Ember.View.extend(Converter, {
    defaultTemplate: Ember.Handlebars.compile(applicationTemplate),
    classNames: ['app-view']
  });
  return ApplicationView;
});