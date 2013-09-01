AHT.AboutUsView = Ember.View.extend({

    didInsertElement: function() {
      $('html, body').animate({scrollTop:0});
      window.Hackmap.setHeight('100px');

      $("#The_team .toggle").on("click", function(e) {
        e.preventDefault();
        $("#The_team article").removeClass("more");
        $(this).closest("article").addClass("more");
        $('html, body').animate({
          scrollTop: $(this).closest("article").offset().top - 50
        }, 300);
      });
    }

});
