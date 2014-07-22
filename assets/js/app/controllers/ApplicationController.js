define(["ember"], function(Ember) {
  var ApplicationController = Ember.Controller.extend({
    cavernName:'',
    caverns: [],
    cavernsObserver:function(){
      this.set('cavernName',this.caverns.nom);
    }.observes('caverns')
  });
  return ApplicationController;
});