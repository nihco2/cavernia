define(['ember', 'ember-data'], function(Ember) {
  var attr = DS.attr,
    cavern = DS.Model.extend({
      nom: DS.attr('string'),
      departement: DS.attr('string'),
      commune: DS.attr('string'),
      coords: DS.attr('string'),
      description: DS.attr('string'),
      acces: DS.attr('string'),
      topographie: DS.attr('string'),
      developpement: DS.attr('string'),
      denivele: DS.attr('string'),
      inventeur: DS.attr('string')
    });
  return cavern;
});