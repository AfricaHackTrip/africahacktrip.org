AHT.ApplicationView = Ember.View.extend({

    didInsertElement: function() {
      window.Hackmap.initializeMap();
    }

});
