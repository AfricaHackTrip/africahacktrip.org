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

AHT.ApplicationController = Ember.Controller.extend({
    currentPathChanged: function() {
      var page;
      Ember.run.next(function(){
        if (!Ember.isNone(_paq)) {
          page = window.location.hash.length > 0 ?
                 window.location.hash.substring(1) :
                 window.location.pathname;
          page = page === '/' ? 'index' : page;

          _paq.push(['trackPageView', page]);
        }
      });
    }.observes('currentPath')
});


})();

(function() {

AHT.AboutUsView = Ember.View.extend({

    didInsertElement: function() {
      $(".nav-collapse").collapse("hide");

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


})();

(function() {

AHT.ApplicationView = Ember.View.extend({

    didInsertElement: function() {
      $(".nav-collapse").collapse("hide");
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
      $(".nav-collapse").collapse("hide");
      window.Hackmap.moveToOverview();
      $(window).on("resize", function(e) { console.log("foo");window.Hackmap.moveToOverview(); });
      window.Hackmap.setHeight('400px');
      $('html, body').animate({scrollTop:0});
    }

});


})();

(function() {

AHT.KenyaView = Ember.View.extend({

    didInsertElement: function() {
      $(".nav-collapse").collapse("hide");
      setTimeout(function() {
        window.Hackmap.moveToCity('nairobi');
        window.Hackmap.setHeight('400px');
      }, 0);
      $('html, body').animate({scrollTop:0});
    }

});


})();

(function() {

AHT.RwandaView = Ember.View.extend({

    didInsertElement: function() {
      $(".nav-collapse").collapse("hide");
      setTimeout(function() {
        window.Hackmap.moveToCity('kigali');
        window.Hackmap.setHeight('400px');
      }, 0);
      $('html, body').animate({scrollTop:0});
    }

});


})();

(function() {

AHT.SponsoringView = Ember.View.extend({

    didInsertElement: function() {
      $(".nav-collapse").collapse("hide");
      $('html, body').animate({scrollTop:0});
      window.Hackmap.setHeight('100px');
    }

});


})();

(function() {

AHT.SupportersView = Ember.View.extend({

    didInsertElement: function() {
      $(".nav-collapse").collapse("hide");
      $('html, body').animate({scrollTop:0});
      window.Hackmap.setHeight('100px');
    }

});


})();

(function() {

AHT.TanzaniaView = Ember.View.extend({

    didInsertElement: function() {
      $(".nav-collapse").collapse("hide");
      setTimeout(function() {
        window.Hackmap.moveToCity('daressalaam');
        window.Hackmap.setHeight('400px');
      }, 0);
      $('html, body').animate({scrollTop:0});
    }

});


})();

(function() {

AHT.UgandaView = Ember.View.extend({

    didInsertElement: function() {
      $(".nav-collapse").collapse("hide");
      setTimeout(function() {
        window.Hackmap.moveToCity('kampala');
        window.Hackmap.setHeight('400px');
      }, 0);
      $('html, body').animate({scrollTop:0});
    }

});


})();

(function() {

AHT.Router.map(function () {
  this.route('kenya',    { path: "/kenya" });
  this.route('uganda',   { path: "/uganda" });
  this.route('rwanda',   { path: "/rwanda" });
  this.route('tanzania', { path: "/tanzania" });

  this.route('about-us', { path: "/about-us" });
  this.route('supporters', { path: "/supporters" });
  this.route('sponsoring', { path: "/sponsoring" });
});


})();

(function() {

window.fireEvent = function(event) {
  var evt;
  if (document.createEventObject) {
    evt = document.createEventObject();
    return document.fireEvent('on' + event, evt);
  }
  else {
    evt = document.createEvent("HTMLEvents");
    evt.initEvent(event, true, true);
    return !document.dispatchEvent(evt);
  }
};


})();