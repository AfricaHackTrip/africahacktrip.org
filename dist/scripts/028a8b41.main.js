(function() {

var AHT = window.AHT = Ember.Application.create({
});

window.IS_VERY_SMALL_SCREEN = $(document).innerWidth() < 768;

/* Order and include as you please. */


})();

(function() {

AHT.Country = DS.Model.extend({
  tiles: DS.hasMany('AHT.Tile'),
  people: DS.hasMany('AHT.Person'),
  spaces: DS.hasMany('AHT.Space'),
  name: DS.attr('string'),
  city_name: DS.attr('string'),
  dates: DS.attr('string'),
  intro: DS.attr('string'),

  lanyrdUrl: function() {
    return "https://lanyrd.com/2013/aht13-" + this.get("id") + "/schedule/";
  }.property("id")
});

AHT.Country.FIXTURES = [
  {
    id: "kenya",
    name: "Kenya",
    city_name: "Nairobi",
    dates: "Sep 24 - Oct 27, 2013",
    intro: "<p>Nairobi is East Africa's economic and innovation center. It may not be the fastest growing city in Africa, but it is home to a Creative Class, made up of Kenyans and expatriates alike, many of them working in ICT. From what we've heard so far, the city buzzes and hums with hacktivity.</p><p>In 2012, Kenya's ICT Board conceptualized a 5-year-plan to see ICT contribute 25% of the GDP and thus make Kenya a \"digital nation\". Key to this transition is innovation. More and more innovation takes place in hubs, where entrepreneurs cowork on finding solutions for local problems.</p><p>We are überexcited to come to Nairobi and meet the local hackers!</p>",
    tiles: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    people: [1,2,3,4, 5]

  },
  {
    id: "rwanda",
    name: "Rwanda",
    intro: "<p></p>",
    tiles: []
  },
  {
    id: "uganda",
    name: "Uganda",
    intro: "<p></p>",
    tiles: []
  },
  {
    id: "tanzania",
    name: "Tanzania",
    intro: "<p></p>",
    tiles: []
  }



];


})();

(function() {

AHT.Person = DS.Model.extend({
  country: DS.belongsTo('AHT.Country'),
  name: DS.attr('string'),
  url: DS.attr('string'),
  about: DS.attr('string'),
  pictureUrl: DS.attr('string')
});

AHT.Person.FIXTURES = [
  {
    id: 1,
    country: 1,
    name: "Martha Chumo",
    about: "Founder of Nairobi Dev School",
    pictureUrl: "http://geekfeminism.org/wp-content/uploads/2013/06/martha.jpg"
  },
  {
    id: 2,
    country: 1,
    name: "Will Mutua",
    about: 'Author of "Innovative Africa"',
    pictureUrl: "http://re-publica.de/sites/re-publica.de/files/imagecache/user_image_large/pictures/picture-1762.jpg"
  },
  {
    id: 3,
    country: 1,
    name: "Jasper Grosskurth",
    about: 'Author of "Futures of Technology in Africa"',
    pictureUrl: "http://inschrijven.nabc.nl/portals/1/images/Event03112010/Bob_van_der_Bijl.jpg"
  },
  {
    id: 4,
    country: 1,
    name: "Simeon Oriko",
    about: "We can't wait to meet the members of JamLab",
    pictureUrl: "https://vc4africa.biz/wp-content/uploads/avatars/76/63acd8eaad4c99cadaf912341b057fe3-bpfull.jpg"
  },
  {
    id: 5,
    country: 1,
    name: "Kepha Ngito",
    about: "Manages MapKibera.org",
    pictureUrl: "http://farm9.staticflickr.com/8057/8182371175_6cd5e157cd.jpg"
  }

];



})();

(function() {

AHT.Space = DS.Model.extend({
  country: DS.belongsTo('AHT.Country'),
  name: DS.attr('string'),
  url: DS.attr('string'),
  about: DS.attr('string'),
  pictureUrl: DS.attr('string')
});

AHT.Space.FIXTURES = [

];


})();

(function() {

AHT.Store = DS.Store.extend({
  revision: 12,
  adapter: 'DS.FixtureAdapter'
});


})();

(function() {

AHT.Tile = DS.Model.extend({
  country: DS.belongsTo('AHT.Country'),
  title: DS.attr('string'),
  url: DS.attr('string'),
  embed: DS.attr('string'),
  body: DS.attr('string'),
  size: DS.attr('string'),
  isMedia: DS.attr("boolean"),

  // wasn't working. couldn't get the value from the template
  //isMedia: function() {
  //  return this.get('embed') + "" != "";
  //},
  className: function() {
    var klass = "";
    klass += "tile-" + this.get("size");
    //klass += " col-md-" + this.get("size");
    return klass;
  }.property('size', 'isMedia')
});

AHT.Tile.FIXTURES = [
  {
    id: 1,
    title: "Book: Innovative Africa: The new face of Africa",
    body: "",
    url: "http://afrinnovator.com/book/",
    embed: '<a href="http://afrinnovator.com/book/"><img src="http://re-publica.de/sites/re-publica.de/files/imagecache/user_image_large/pictures/picture-1762.jpg"></a>',
    size: 2,
    isMedia: true,
    country: 1
  },
  {
    id: 3,
    title: "Mark Kaigwa on the Silicon Savannah",
    body: "",
    embed: '<iframe width="468" scrolling="no" height="263" frameborder="0" src="http://www.dctp.tv/filme/silicon-savannah-mark-kaigwa/embed/" name="dctp-embed" marginwidth="0" marginheight="0"><br></iframe>',
    isMedia: true,
    size: 2,
    country: 1
  },
  {
    id: 2,
    title: "If it works in Africa, it'll workanywhere",
    body: "BRCK is Africa's answer to internet connectivity",
    embed: '<a href="http://brck.com/"><img src="http://brck.com/images/slide2.jpg"></a>',
    isMedia: true,
    size: 4,
    country: 1
  },
  {
    id: 4,
    title: "Africa in the Focus of re:publica13",
    body: "'Innovating Africa'Eric Hersman's Keynote Speech #rp13",
    embed: '<iframe width="468" height="263" src="//www.youtube-nocookie.com/embed/1AYsmc4Kstw" frameborder="0" allowfullscreen></iframe>',
    isMedia: true,
    size: 2,
    country: 1
  },
  {
    id: 5,
    title: "Jessica Colaco of iHub and AkiraChix for SpotACheetah",
    body: "Do not be afraid and don't hesitate to take challenges in the tech world!",
    embed: '<iframe width="468" height="263" src="//www.youtube-nocookie.com/embed/FT0IP65QIpQ" frameborder="0" allowfullscreen></iframe>',
    isMedia: true,
    size: 2,
    country: 1
  },
  {
    id: 6,
    title: "ICT is to contribute 25% of GDP by 2017.",
    url: "http://www.ict.go.ke/index.php/ict-masterplan/420-overview",
    body: "",
    embed: "",
    isMedia: false,
    size: 2,
    country: 1
  },
  {
    id: 7,
    title: "The median age in Kenya is 18.8 years.",
    url: "http://www.indexmundi.com/kenya/median_age.html",
    body: "",
    embed: "",
    isMedia: false,
    size: 4,
    country: 1
  },
  {
    id: 8,
    title: "There are 30 million mobile subscribers in Kenya - and 24.6 million adults over 15 years. (July 2012)",
    url: "http://www.ict.go.ke/docs/WB_KEU%207_FINAL%20301112.pdf",
    size: 2,
    country: 1
  },
  {
    id: 9,
    title: "There are six start-up hubs in Nairobi: iHub, Nailab, Startup Garage, M:lab, iLab Africa and GrowthHub.",
    url: "http://vc4africa.biz/blog/2012/05/28/growthhub-nairobi-jobs-have-to-be-created-and-not-only-in-the-ict-sector/",
    size: 2,
    country: 1
  },
  {
    id: 10,
    title: "Kenya's first submarine fibreoptic cable was launched in 2009.",
    url: "http://www.ict.go.ke/connectionyanguvu/?page_id=12",
    size: 2,
    country: 1
  },
  {
    id: 11,
    title: "31% of Kenya's GDP is spent through M-Pesa.",
    url: "http://qz.com/57504/31-of-kenyas-gdp-is-spent-through-mobile-phones/",
    country: 4,
    size: 2
  }

];



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
                        console.log("adsd");
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
      $('html, body').animate({scrollTop:0});
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
    $container = this.$(".grid");
    $container.imagesLoaded(function() {
      window.setTimeout(function() {
        $container.masonry({
          itemSelector: '.tile',
          gutter: 10,
          columnWidth: 280
        });
      }, 400);
    });
  }
});



})();

(function() {

AHT.IndexView = Ember.View.extend({
    didInsertElement: function() {
      $(".nav-collapse").collapse("hide");
      window.Hackmap.moveToOverview();
      $(window).on("resize", function(e) { window.Hackmap.moveToOverview(); });
      window.Hackmap.setHeight('400px');
      $('html, body').animate({scrollTop:0});
      setTimeout(function() {$("#grid").masonry({
        itemSelector: 'figure'
      });}, 500);
    }

});


})();

(function() {

AHT.SponsoringView = Ember.View.extend({

    didInsertElement: function() {
      $('html, body').animate({scrollTop:0});
      window.Hackmap.setHeight('100px');
    }

});


})();

(function() {

AHT.SupportersView = Ember.View.extend({

    didInsertElement: function() {
      $('html, body').animate({scrollTop:0});
      window.Hackmap.setHeight('100px');
    }

});


})();

(function() {

AHT.TileView = Ember.View.extend({

});


})();

(function() {

AHT.Router.map(function () {

  this.route('about-us', { path: "/about-us" });
  this.route('supporters', { path: "/supporters" });
  this.route('sponsoring', { path: "/sponsoring" });
  this.resource('country', { path: ':country_id' });
});

AHT.IndexRoute = Ember.Route.extend({
  model: function(params) {
    [1,2,3,4,5,6,7,8].forEach(function(e) { AHT.Tile.find(e) });
    return AHT.Tile.all();
  }
});

AHT.CountryRoute = Ember.Route.extend({
  setupController: function(controller, country) {
    controller.set("model", country);
  },
  model: function(params) {
    return AHT.Country.find(params.country_id);
  }
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