AHT.AboutUsView = Ember.View.extend({

    didInsertElement: function() {
      $('html, body').animate({scrollTop:0});
      $("#The_team .toggle").on("click", function(e) {
        console.log("ooo");
        e.preventDefault();
        $("#The_team article").removeClass("more");
        console.log($(this));
        $(this).closest("article").addClass("more");
      });

    }

});
