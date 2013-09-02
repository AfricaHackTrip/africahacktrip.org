AHT.CountryView = Ember.View.extend({
  didInsertElement: function() {
    //this.scheduleMasonry();
  },
  willClearRender: function() {
    this.$(".grid").masonry("destroy");
  },
  scheduleMasonry: function () {
    Ember.run.scheduleOnce('afterRender', this, this.applyMasonry);
  },
  applyMasonry: function() {
                  console.log("soo");
    this.$(".grid").masonry({
      itemSelector: '.tile',
       gutter: 10,
       columnWidth: 280
    });
  }
});

