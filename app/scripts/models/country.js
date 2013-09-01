AHT.Country = DS.Model.extend({
  tiles: DS.hasMany('AHT.Tile'),
  name: DS.attr('string'),
  intro: DS.attr('string')
});

AHT.Country.FIXTURES = [
  {
    id: "kenya",
    name: "kenya",
    intro: "<p>Nairobi is East Africa's economic and innovation center. It may not be the fastest growing city in Africa, but it is home to a Creative Class, made up of Kenyans and expatriates alike, many of them working in ICT. From what we've heard so far, the city buzzes and hums with hacktivity.</p><p>In 2012, Kenya's ICT Board conceptualized a 5-year-plan to see ICT contribute 25% of the GDP and thus make Kenya a \"digital nation\". Key to this transition is innovation. More and more innovation takes place in hubs, where entrepreneurs cowork on finding solutions for local problems.</p><p>We are ¸berexcited to come to Nairobi and meet the local hackers!</p>",
    tiles: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
  },
  {
    id: "rwanda",
    name: "Rwanda",
    intro: "<p></p>",
    tiles: []
  },
  {
    id: "uganda",
    name: "Uganda",
    intro: "<p></p>",
    tiles: []
  },
  {
    id: "tanzania",
    name: "Tanzania",
    intro: "<p></p>",
    tiles: []
  }



];