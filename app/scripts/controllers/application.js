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
