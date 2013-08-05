AHT.KenyaView = Ember.View.extend({

    didInsertElement: function() {
      setTimeout(function() {
        window.Hackmap.moveToCity('nairobi');
      }, 0);
      $('html, body').animate({scrollTop:0});
    }

});
