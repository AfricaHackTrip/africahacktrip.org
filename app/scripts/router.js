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
  didTransition: function() {
    Ember.run.next(function(){
      if (!Ember.isNone(_paq)) {
        page = window.location.hash.length > 0 ?
               window.location.hash.substring(1) :
               window.location.pathname;
        page = page == '/' ? 'index' : page;

        _paq.push(['trackPageView', page]);
      }
    });
  }
});
