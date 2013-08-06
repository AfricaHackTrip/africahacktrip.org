AHT.SponsoringView = Ember.View.extend({

    didInsertElement: function() {
      $(".nav-collapse").collapse("hide");
      $('html, body').animate({scrollTop:0});
      window.Hackmap.setHeight('100px');
    }

});
