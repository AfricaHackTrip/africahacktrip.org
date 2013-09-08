AHT.Event = DS.Model.extend({
  country: DS.belongsTo('AHT.Country'),
  name: DS.attr('string'),
  description: DS.attr('string'),
  date: DS.attr('string'),
  place: DS.attr('string'),
  lanyrdUrl: DS.attr('string'),

});

AHT.Event.FIXTURES = [
  {
    id: 1,
    country: 1,
    name: "Barcamp",
    description: "",
    date: "Saturday 25th. Sept.",
    place: "iHub",
    type: "barcamp",
    lanyrdUrl: ""
  }
];
