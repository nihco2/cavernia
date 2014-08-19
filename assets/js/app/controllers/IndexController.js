define(["ember", "mixins/Converter", "mixins/Position"], function(Ember, Converter, Position) {
  var IndexController = Ember.Controller.extend(Converter, {
    needs: ['application'],
    actions: {
      findCave: function() {
        var dpts = this.get('controllers.application.departements');
        console.log(dpts[0]);

      }
    }

  });
  return IndexController;
});