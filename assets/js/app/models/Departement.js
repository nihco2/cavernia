define(['ember', 'ember-data'], function(Ember, DS) {
  var attr = DS.attr,
    Departement = DS.Model.extend({
      name: DS.attr('string'),
      caverns: DS.hasMany('Cavern')
    });
  return Departement;
});