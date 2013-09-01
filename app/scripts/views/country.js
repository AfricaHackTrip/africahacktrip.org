AHT.CountryView = Ember.View.extend({

    didInsertElement: function() {
      window.setTimeout(function() {
        $("#grid").masonry({
          itemSelector: '.tile',
          columnWidth: 234,
          gutter: 10
        });
      }, 400);
    }
});

