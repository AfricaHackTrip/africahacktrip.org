// L.LabelOverlay = L.Class.extend({
//     initialize: function(/*LatLng*/ latLng, /*String*/ label, options) {
//         this._latlng = latLng;
//         this._label = label;
//         L.Util.setOptions(this, options);
//     },
//     options: {
//         offset: new L.Point(0, 0)
//     },
//     onAdd: function(map) {
//         this._map = map;
//         if (!this._container) {
//             this._initLayout();
//         }
//         map.getPanes().overlayPane.appendChild(this._container);
//         this._container.innerHTML = this._label;
//         map.on('viewreset', this._reset, this);
//         this._reset();
//     },
//     onRemove: function(map) {
//         map.getPanes().overlayPane.removeChild(this._container);
//         map.off('viewreset', this._reset, this);
//     },
//     _reset: function() {
//         var pos = this._map.latLngToLayerPoint(this._latlng);
//         var op = new L.Point(pos.x + this.options.offset.x, pos.y - this.options.offset.y);
//         L.DomUtil.setPosition(this._container, op);
//     },
//     _initLayout: function() {
//         this._container = L.DomUtil.create('div', 'leaflet-label-overlay');
//     }
// });

window.Hackmap = {

  m: null,

  cities: {
    nairobi: {
      lat: -1.294903,
      lng: 36.824005,
      label: '09/24-10/01'
    },
    kampala: {
      lat: 0.312079,
      lng: 32.581276,
      label: '10/02-10/08'
    },
    kigali: {
      lat: -1.952099,
      lng: 30.059570,
      label: '10/09-10/15'
    },
    daressalaam: {
      lat: -6.826216,
      lng: 39.269149,
      label: '10/16-10/23'
    }
  },

  initializeMap: function() {
    var self = this;
    L.Icon.Default.imagePath = "/images/leaflet";

    self.m = L.map('bigfatmap').setView(
      [-2.350415, 35.679931], 5
    );
    self.m.attributionControl.setPrefix('');

    L.tileLayer('https://{s}.tiles.mapbox.com/v3/skddc.map-9wkh1xoj/{z}/{x}/{y}.png', {
      attribution: '',
      maxZoom: 17
    }).addTo(self.m);

    $.each(this.cities, function(cityName, city) {
      self.addCountryLabel(cityName, city);
    });
  },

  moveToCity: function(cityName) {
   var city = this.cities[cityName];
   this.m.setView([city.lat, city.lng], 6, {animate: true});
  },

  addCountryLabel: function(cityName, index) {
    var city = this.cities[cityName];
    L.marker([city.lat, city.lng])
      .bindLabel(city.label, { noHide: true })
      .addTo(this.m)
      .showLabel();
  }

};
