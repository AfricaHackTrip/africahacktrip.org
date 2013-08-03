window.Hackmap = {

  m: null,

  cities: {
    nairobi: {
      lat: -1.294903,
      lng: 36.824005
    },
    kampala: {
      lat: 0.312079,
      lng: 32.581276
    },
    kigali: {
      lat: -1.952099,
      lng: 30.059570
    },
    daressalaam: {
      lat: -6.826216,
      lng: 39.269149
    }
  },

  initializeMap: function() {
    var self = this;

    self.m = L.map('bigfatmap').setView(
      [-2.350415, 35.679931], 5
    );
    self.m.attributionControl.setPrefix('');

    L.tileLayer('http://{s}.tiles.mapbox.com/v3/skddc.map-9wkh1xoj/{z}/{x}/{y}.png', {
      attribution: '',
      maxZoom: 17
    }).addTo(self.m);
  },

  moveToCity: function(cityName) {
   var city = this.cities[cityName];
   var latlng = new L.LatLng(city.lat, city.lng);

   this.m.setView(latlng, 6, {animate: true});
  }

};
