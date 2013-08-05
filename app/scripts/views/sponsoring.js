AHT.SponsoringView = Ember.View.extend({

    didInsertElement: function() {
      $('html, body').animate({scrollTop:0});
    }

});
