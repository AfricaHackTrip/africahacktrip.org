AHT.TanzaniaView = Ember.View.extend({

    didInsertElement: function() {
      $(".nav-collapse").collapse("hide");
      setTimeout(function() {
        window.Hackmap.moveToCity('daressalaam');
        window.Hackmap.setHeight('400px');
      }, 0);
      $('html, body').animate({scrollTop:0});
    }

});
