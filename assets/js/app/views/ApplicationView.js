define([
  "ember"
], function(Ember, applicationTemplate) {

  var ApplicationView = Ember.View.extend({
    templateName: 'main-template'
  });
  return ApplicationView;
});