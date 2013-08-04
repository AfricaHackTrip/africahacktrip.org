var AHT = window.AHT = Ember.Application.create({
});

/* Order and include as you please. */
require('scripts/routes/*');
require('scripts/controllers/*');
require('scripts/models/*');
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
