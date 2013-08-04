AHT.RwandaView = Ember.View.extend({

    didInsertElement: function() {
      setTimeout(function() {
        window.Hackmap.moveToCity('kigali');
      }, 0);
    }

});
