AHT.ApplicationView = Ember.View.extend({

    didInsertElement: function() {
      $('html, body').animate({scrollTop:0});
      window.Hackmap.initializeMap();
    }

});
