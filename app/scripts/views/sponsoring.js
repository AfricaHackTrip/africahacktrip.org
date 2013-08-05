AHT.SponsoringView = Ember.View.extend({

    didInsertElement: function() {
      $('html, body').animate({scrollTop:0});
      window.Hackmap.setHeight('100px');
    }

});
