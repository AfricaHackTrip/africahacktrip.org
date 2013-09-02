AHT.Router.map(function () {

  this.route('about-us', { path: "/about-us" });
  this.route('supporters', { path: "/supporters" });
  this.route('sponsoring', { path: "/sponsoring" });
  this.resource('country', { path: ':country_id' });
});


AHT.CountryRoute = Ember.Route.extend({
  setupController: function(controller, country) {
    controller.set("model", country);
  },
  model: function(params) {
    return AHT.Country.find(params.country_id);
  }
});
