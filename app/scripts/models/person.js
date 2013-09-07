AHT.Person = DS.Model.extend({
  country: DS.belongsTo('AHT.Country'),
  name: DS.attr('string'),
  url: DS.attr('string'),
  about: DS.attr('string'),
  pictureUrl: DS.attr('string')
});

AHT.Person.FIXTURES = [
  {
    id: 1,
    country: 1,
    name: "Martha Chumo",
    about: "Founder of Nairobi Dev School",
    pictureUrl: "http://geekfeminism.org/wp-content/uploads/2013/06/martha.jpg"
  },
  {
    id: 2,
    country: 1,
    name: "Will Mutua",
    about: 'Author of "Innovative Africa"',
    pictureUrl: "http://re-publica.de/sites/re-publica.de/files/imagecache/user_image_large/pictures/picture-1762.jpg"
  },
  {
    id: 3,
    country: 1,
    name: "Jasper Grosskurth",
    about: 'Author of "Futures of Technology in Africa"',
    pictureUrl: "http://inschrijven.nabc.nl/portals/1/images/Event03112010/Bob_van_der_Bijl.jpg"
  },
  {
    id: 4,
    country: 1,
    name: "Simeon Oriko",
    about: "We can't wait to meet the members of JamLab",
    pictureUrl: "https://vc4africa.biz/wp-content/uploads/avatars/76/63acd8eaad4c99cadaf912341b057fe3-bpfull.jpg"
  },
  {
    id: 5,
    country: 1,
    name: "Kepha Ngito",
    about: "Manages MapKibera.org",
    pictureUrl: "http://farm9.staticflickr.com/8057/8182371175_6cd5e157cd.jpg"
  }

];

