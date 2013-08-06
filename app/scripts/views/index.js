AHT.IndexView = Ember.View.extend({

    didInsertElement: function() {
      $(".nav-collapse").collapse("hide");
      window.Hackmap.moveToOverview();
      $(window).on("resize", function(e) { console.log("foo");window.Hackmap.moveToOverview(); });
      window.Hackmap.setHeight('400px');
      $('html, body').animate({scrollTop:0});
    }

});
