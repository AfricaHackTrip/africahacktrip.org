AHT.Router.map(function () {
  this.route('kenya',    { path: "/kenya" });
  this.route('uganda',   { path: "/uganda" });
  this.route('rwanda',   { path: "/rwanda" });
  this.route('tanzania', { path: "/tanzania" });

  this.route('about-us', { path: "/about-us" });
  this.route('supporters', { path: "/supporters" });
  this.route('sponsoring', { path: "/sponsoring" });
});

AHT.Router.reopen({
  didTransition: function(infos) {
    if (window._gaq === undefined) { return; }
    Ember.run.next(function(){
      _gaq.push(['_trackPageview', window.location.hash.substr(1)]);
    });
  }
});
