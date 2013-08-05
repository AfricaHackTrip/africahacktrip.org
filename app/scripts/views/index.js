AHT.IndexView = Ember.View.extend({

    didInsertElement: function() {
      window.Hackmap.moveToOverview();
      window.Hackmap.setHeight('400px');
      $('html, body').animate({scrollTop:0});
    }

});
