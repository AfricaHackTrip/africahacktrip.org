AHT.Space = DS.Model.extend({
  country: DS.belongsTo('AHT.Country'),
  name: DS.attr('string'),
  url: DS.attr('string'),
  about: DS.attr('string'),
  pictureUrl: DS.attr('string')
});

AHT.Space.FIXTURES = [

];
