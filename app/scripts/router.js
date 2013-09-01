AHT.Router.map(function () {
  this.resource('country', { path: ':country_id' });

  this.route('about-us', { path: "/about-us" });
  this.route('supporters', { path: "/supporters" });
  this.route('sponsoring', { path: "/sponsoring" });
});

AHT.IndexRoute = Ember.Router.extend({
  setupController: function(controller, country) {
    console.log("goo");
    controller.set("countries", AHT.Country.all());
  },

});

AHT.CountryRoute = Ember.Route.extend({
  setupController: function(controller, country) {
    controller.set("model", country);
    controller.set("countries", AHT.Country.all());
  },
  model: function(params) {
    return AHT.Country.find(params.country_id);
  }
});
