AHT.IndexView = Ember.View.extend({

    didInsertElement: function() {
      window.Hackmap.moveToOverview();
      $('html, body').animate({scrollTop:0});
    }

});
