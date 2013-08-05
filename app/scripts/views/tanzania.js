AHT.TanzaniaView = Ember.View.extend({

    didInsertElement: function() {
      setTimeout(function() {
        window.Hackmap.moveToCity('daressalaam');
      }, 0);
      $('html, body').animate({scrollTop:0});
    }

});
