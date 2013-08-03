AHT.TileLayer = EmberLeaflet.TileLayer.extend({
  tileUrl: 'http://{s}.tiles.mapbox.com/v3/skddc.map-9wkh1xoj/{z}/{x}/{y}.png'
  // options: {key: 'API-key', styleId: 997}
});

AHT.BigfatmapView = EmberLeaflet.MapView.extend({
  center: L.latLng(-2.350415, 35.679931),
  zoom: 5,
  options: {maxZoom: 19, minZoom: 0},
  childLayers: [AHT.TileLayer]
});
