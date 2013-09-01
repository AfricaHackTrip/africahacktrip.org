var AHT = window.AHT = Ember.Application.create({
});

window.IS_VERY_SMALL_SCREEN = $(document).innerWidth() < 768;

/* Order and include as you please. */
require('scripts/models/*');
require('scripts/routes/*');
require('scripts/controllers/*');
require('scripts/components/*');
require('scripts/views/*');
require('scripts/router');

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
