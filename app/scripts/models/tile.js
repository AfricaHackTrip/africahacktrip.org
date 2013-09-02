AHT.Tile = DS.Model.extend({
  country: DS.belongsTo('AHT.Country'),
  title: DS.attr('string'),
  url: DS.attr('string'),
  embed: DS.attr('string'),
  body: DS.attr('string'),
  size: DS.attr('string'),
  isMedia: DS.attr("boolean"),

  // wasn't working. couldn't get the value from the template
  //isMedia: function() {
  //  return this.get('embed') + "" != "";
  //},
  className: function() {
    var klass = "";
    klass += "tile-" + this.get("size");
    //klass += " col-md-" + this.get("size");
    return klass;
  }.property('size', 'isMedia')
});

AHT.Tile.FIXTURES = [
  {
    id: 1,
    title: "Book: Innovative Africa: The new face of Africa",
    body: "",
    url: "http://afrinnovator.com/book/",
    embed: '<a href="http://afrinnovator.com/book/"><img src="http://re-publica.de/sites/re-publica.de/files/imagecache/user_image_large/pictures/picture-1762.jpg"></a>',
    size: 2,
    isMedia: true,
    country: 1
  },
  {
    id: 3,
    title: "Mark Kaigwa on the Silicon Savannah",
    body: "",
    embed: '<iframe width="468" scrolling="no" height="263" frameborder="0" src="http://www.dctp.tv/filme/silicon-savannah-mark-kaigwa/embed/" name="dctp-embed" marginwidth="0" marginheight="0"><br></iframe>',
    isMedia: true,
    size: 2,
    country: 1
  },
  {
    id: 2,
    title: "If it works in Africa, it'll workanywhere",
    body: "BRCK is Africa's answer to internet connectivity",
    embed: '<a href="http://brck.com/"><img src="http://brck.com/images/slide2.jpg"></a>',
    isMedia: true,
    size: 4,
    country: 1
  },
  {
    id: 4,
    title: "Africa in the Focus of re:publica13",
    body: "'Innovating Africa'Eric Hersman's Keynote Speech #rp13",
    embed: '<iframe width="468" height="263" src="//www.youtube-nocookie.com/embed/1AYsmc4Kstw" frameborder="0" allowfullscreen></iframe>',
    isMedia: true,
    size: 2,
    country: 1
  },
  {
    id: 5,
    title: "Jessica Colaco of iHub and AkiraChix for SpotACheetah",
    body: "Do not be afraid and don't hesitate to take challenges in the tech world!",
    embed: '<iframe width="468" height="263" src="//www.youtube-nocookie.com/embed/FT0IP65QIpQ" frameborder="0" allowfullscreen></iframe>',
    isMedia: true,
    size: 2,
    country: 1
  },
  {
    id: 6,
    title: "ICT is to contribute 25% of GDP by 2017.",
    url: "http://www.ict.go.ke/index.php/ict-masterplan/420-overview",
    body: "",
    embed: "",
    isMedia: false,
    size: 2,
    country: 1
  },
  {
    id: 7,
    title: "The median age in Kenya is 18.8 years.",
    url: "http://www.indexmundi.com/kenya/median_age.html",
    body: "",
    embed: "",
    isMedia: false,
    size: 4,
    country: 1
  },
  {
    id: 8,
    title: "There are 30 million mobile subscribers in Kenya - and 24.6 million adults over 15 years. (July 2012)",
    url: "http://www.ict.go.ke/docs/WB_KEU%207_FINAL%20301112.pdf",
    size: 2,
    country: 1
  },
  {
    id: 9,
    title: "There are six start-up hubs in Nairobi: iHub, Nailab, Startup Garage, M:lab, iLab Africa and GrowthHub.",
    url: "http://vc4africa.biz/blog/2012/05/28/growthhub-nairobi-jobs-have-to-be-created-and-not-only-in-the-ict-sector/",
    size: 2,
    country: 1
  },
  {
    id: 10,
    title: "Kenya's first submarine fibreoptic cable was launched in 2009.",
    url: "http://www.ict.go.ke/connectionyanguvu/?page_id=12",
    size: 2,
    country: 1
  },
  {
    id: 11,
    title: "31% of Kenya's GDP is spent through M-Pesa.",
    url: "http://qz.com/57504/31-of-kenyas-gdp-is-spent-through-mobile-phones/",
    country: 4,
    size: 2
  }

];

