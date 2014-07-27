define([
  "ember", "text!templates/search.hbs"
], function(Ember, searchTemplate) {

  var SearchView = Ember.View.extend({
    defaultTemplate: Ember.Handlebars.compile(searchTemplate),
  });
  return SearchView;
});