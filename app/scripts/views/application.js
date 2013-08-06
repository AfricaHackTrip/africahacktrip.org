AHT.ApplicationView = Ember.View.extend({

    didInsertElement: function() {
      $(".nav-collapse").collapse("hide");
      window.Hackmap.initializeMap();
    }

});
