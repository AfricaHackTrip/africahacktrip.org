AHT.IndexView = Ember.View.extend({

    didInsertElement: function() {
      window.Hackmap.moveToOverview();
    }

});
