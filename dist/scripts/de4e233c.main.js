(function() {

var AHT = window.AHT = Ember.Application.create({
});

/* Order and include as you please. */


})();

(function() {

AHT.ApplicationRoute = Ember.Route.extend({

});


})();

(function() {

AHT.KenyaRoute = Ember.Route.extend({
});


})();

(function() {

AHT.ApplicationView = Ember.View.extend({

    didInsertElement: function() {
      window.Hackmap.initializeMap();
    }

});


})();

(function() {

// AHT.TileLayer = EmberLeaflet.TileLayer.extend({
//   tileUrl: 'http://{s}.tiles.mapbox.com/v3/skddc.map-9wkh1xoj/{z}/{x}/{y}.png'
//   // options: {key: 'API-key', styleId: 997}
// });
// 
// AHT.BigfatmapView = EmberLeaflet.MapView.extend({
//   center: L.latLng(-2.350415, 35.679931),
//   zoom: 5,
//   options: {maxZoom: 19, minZoom: 0},
//   childLayers: [AHT.TileLayer]
// });


})();

(function() {

AHT.IndexView = Ember.View.extend({

    didInsertElement: function() {
      window.Hackmap.moveToOverview();
    }

});


})();

(function() {

AHT.KenyaView = Ember.View.extend({

    didInsertElement: function() {
      setTimeout(function() {
        window.Hackmap.moveToCity('nairobi');
      }, 0);
    }

});


})();

(function() {

AHT.RwandaView = Ember.View.extend({

    didInsertElement: function() {
      setTimeout(function() {
        window.Hackmap.moveToCity('kigali');
      }, 0);
    }

});


})();

(function() {

AHT.TanzaniaView = Ember.View.extend({

    didInsertElement: function() {
      setTimeout(function() {
        window.Hackmap.moveToCity('daressalaam');
      }, 0);
    }

});


})();

(function() {

AHT.UgandaView = Ember.View.extend({

    didInsertElement: function() {
      setTimeout(function() {
        window.Hackmap.moveToCity('kampala');
      }, 0);
    }

});


})();

(function() {

AHT.Router.map(function () {
  this.route('kenya',    { path: "/kenya" });
  this.route('uganda',   { path: "/uganda" });
  this.route('rwanda',   { path: "/rwanda" });
  this.route('tanzania', { path: "/tanzania" });
  this.route('contact', { path: "/contact" });
  this.route('about-us', { path: "/about-us" });
  this.route('supporters', { path: "/supporters" });
  this.route('sponsoring', { path: "/sponsoring" });
});


})();