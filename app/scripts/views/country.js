AHT.CountryView = Ember.View.extend({
  didInsertElement: function() {
    $('html, body').animate({scrollTop:0});
    window.Hackmap.setHeight('250');
    this.scheduleMasonry();
  },
  willClearRender: function() {
    this.$(".grid").masonry("destroy");
  },
  scheduleMasonry: function () {
    Ember.run.scheduleOnce('afterRender', this, this.applyMasonry);
  },
  applyMasonry: function() {
    $container = this.$(".grid")
    $container.imagesLoaded(function() {
      window.setTimeout(function() {
        $container.masonry({
          itemSelector: '.tile',
          gutter: 10,
          columnWidth: 280
        });
      }, 400)
    });
  }
});

