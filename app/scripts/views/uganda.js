AHT.UgandaView = Ember.View.extend({

    didInsertElement: function() {
      setTimeout(function() {
        window.Hackmap.moveToCity('kampala');
      }, 0);
    }

});
