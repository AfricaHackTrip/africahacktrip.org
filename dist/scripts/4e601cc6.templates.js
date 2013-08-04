Ember.TEMPLATES["about-us"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  


  data.buffer.push("<h1>About us</h1>\n");
  
});

Ember.TEMPLATES["application"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, stack2, hashContexts, hashTypes, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', hashContexts, hashTypes;
  data.buffer.push("\n          <a ");
  hashContexts = {'href': depth0};
  hashTypes = {'href': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'href': ("view.href")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Home</a>\n        ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', hashContexts, hashTypes;
  data.buffer.push("\n          <a ");
  hashContexts = {'href': depth0};
  hashTypes = {'href': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'href': ("view.href")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Kenya</a>\n        ");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '', hashContexts, hashTypes;
  data.buffer.push("\n          <a ");
  hashContexts = {'href': depth0};
  hashTypes = {'href': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'href': ("view.href")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Uganda</a>\n        ");
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = '', hashContexts, hashTypes;
  data.buffer.push("\n          <a ");
  hashContexts = {'href': depth0};
  hashTypes = {'href': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'href': ("view.href")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Rwanda</a>\n        ");
  return buffer;
  }

function program9(depth0,data) {
  
  var buffer = '', hashContexts, hashTypes;
  data.buffer.push("\n          <a ");
  hashContexts = {'href': depth0};
  hashTypes = {'href': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'href': ("view.href")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Tanzania</a>\n        ");
  return buffer;
  }

function program11(depth0,data) {
  
  var buffer = '', hashContexts, hashTypes;
  data.buffer.push("\n          <a ");
  hashContexts = {'href': depth0};
  hashTypes = {'href': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'href': ("view.href")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">About us</a>\n        ");
  return buffer;
  }

function program13(depth0,data) {
  
  var buffer = '', hashContexts, hashTypes;
  data.buffer.push("\n          <a ");
  hashContexts = {'href': depth0};
  hashTypes = {'href': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'href': ("view.href")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Supporters</a>\n        ");
  return buffer;
  }

function program15(depth0,data) {
  
  var buffer = '', hashContexts, hashTypes;
  data.buffer.push("\n          <a ");
  hashContexts = {'href': depth0};
  hashTypes = {'href': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'href': ("view.href")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Contact</a>\n        ");
  return buffer;
  }

  data.buffer.push("<div class=\"container-full\">\n  <div class=\"navbar navbar-inverse\">\n    <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-responsive-collapse\">\n      <span class=\"icon-bar\"></span>\n      <span class=\"icon-bar\"></span>\n      <span class=\"icon-bar\"></span>\n    </button>\n\n    <a class=\"navbar-brand\" href=\"#\">AfricaHackTrip</a>\n    <div class=\"nav-collapse collapse navbar-responsive-collapse\">\n      <ul class=\"nav navbar-nav\">\n        ");
  hashContexts = {'tagName': depth0};
  hashTypes = {'tagName': "STRING"};
  options = {hash:{
    'tagName': ("li")
  },inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo),stack1 ? stack1.call(depth0, "index", options) : helperMissing.call(depth0, "linkTo", "index", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n        ");
  hashContexts = {'tagName': depth0};
  hashTypes = {'tagName': "STRING"};
  options = {hash:{
    'tagName': ("li")
  },inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo),stack1 ? stack1.call(depth0, "kenya", options) : helperMissing.call(depth0, "linkTo", "kenya", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n        ");
  hashContexts = {'tagName': depth0};
  hashTypes = {'tagName': "STRING"};
  options = {hash:{
    'tagName': ("li")
  },inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo),stack1 ? stack1.call(depth0, "uganda", options) : helperMissing.call(depth0, "linkTo", "uganda", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n        ");
  hashContexts = {'tagName': depth0};
  hashTypes = {'tagName': "STRING"};
  options = {hash:{
    'tagName': ("li")
  },inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo),stack1 ? stack1.call(depth0, "rwanda", options) : helperMissing.call(depth0, "linkTo", "rwanda", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n        ");
  hashContexts = {'tagName': depth0};
  hashTypes = {'tagName': "STRING"};
  options = {hash:{
    'tagName': ("li")
  },inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo),stack1 ? stack1.call(depth0, "tanzania", options) : helperMissing.call(depth0, "linkTo", "tanzania", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n      </ul>\n\n      <ul class=\"nav navbar-nav pull-right\">\n        ");
  hashContexts = {'tagName': depth0};
  hashTypes = {'tagName': "STRING"};
  options = {hash:{
    'tagName': ("li")
  },inverse:self.noop,fn:self.program(11, program11, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo),stack1 ? stack1.call(depth0, "about-us", options) : helperMissing.call(depth0, "linkTo", "about-us", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n        ");
  hashContexts = {'tagName': depth0};
  hashTypes = {'tagName': "STRING"};
  options = {hash:{
    'tagName': ("li")
  },inverse:self.noop,fn:self.program(13, program13, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo),stack1 ? stack1.call(depth0, "supporters", options) : helperMissing.call(depth0, "linkTo", "supporters", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n        ");
  hashContexts = {'tagName': depth0};
  hashTypes = {'tagName': "STRING"};
  options = {hash:{
    'tagName': ("li")
  },inverse:self.noop,fn:self.program(15, program15, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo),stack1 ? stack1.call(depth0, "contact", options) : helperMissing.call(depth0, "linkTo", "contact", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n      </ul>\n    </div>\n  </div>\n</div>\n<div id=\"bigfatmap\"></div>\n<div class=\"container content\">\n  ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "outlet", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n</div>\n\n<div id=\"footer\">\n  \n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["bigfatmap"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  


  data.buffer.push("<div id=\"bigfatmap\"></div>\n");
  
});

Ember.TEMPLATES["contact"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  


  data.buffer.push("<h1>Contact</h1>\n");
  
});

Ember.TEMPLATES["index"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, stack2, hashContexts, hashTypes, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', hashContexts, hashTypes;
  data.buffer.push("\n          <a ");
  hashContexts = {'href': depth0};
  hashTypes = {'href': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'href': ("view.href")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Nairobi, Kenya</a>\n        ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', hashContexts, hashTypes;
  data.buffer.push("\n          <a ");
  hashContexts = {'href': depth0};
  hashTypes = {'href': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'href': ("view.href")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Kampala, Uganda</a>\n        ");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '', hashContexts, hashTypes;
  data.buffer.push("\n          <a ");
  hashContexts = {'href': depth0};
  hashTypes = {'href': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'href': ("view.href")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Kigali, Rwanda</a>\n        ");
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = '', hashContexts, hashTypes;
  data.buffer.push("\n          <a ");
  hashContexts = {'href': depth0};
  hashTypes = {'href': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'href': ("view.href")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Der Es Salaam, Tanzania</a>\n        ");
  return buffer;
  }

function program9(depth0,data) {
  
  var buffer = '', hashContexts, hashTypes;
  data.buffer.push("\n          <a ");
  hashContexts = {'href': depth0};
  hashTypes = {'href': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'href': ("view.href")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Demo Africa, Nairobi, Kenya</a>\n        ");
  return buffer;
  }

  data.buffer.push("<h1 id=\"tagline\">4 Weeks // 4 Countries // 8 Hackers</h1>\n\n<div id=\"intro\">\n  <p>\n    <span>\n      We are a group of developers &amp; designers from Europe, <br />\n      curious about the emerging African tech hubs.\n    </span>\n  </p>\n  <p>\n    <span>\n      We decided to explore the African tech communities ourselves and<br/>\n      share our impressions with a video documentary.\n    </span>\n  </p>\n  <p>\n    <span>Our goal is to kick off a continuous exchange with tech communities in Africa.</span>\n  </p>\n</div>\n\n<div id=\"teaser\" class=\"row\">\n  <div class=\"col-lg-6\">\n    <iframe src=\"http://player.vimeo.com/video/70288316\" id=\"teaser-video\" width=\"500\" height=\"281\" frameborder=\"0\" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>\n  </div>\n  <div class=\"col-lg-6\">\n    Publicity is a main goal of AfricaHackTrip. We want to get everyone in the tech community excited and enable cooperation, so we will blog and tweet, trying to reach as many people as possible. Most of all, we will make a movie. Actually, many small movies and one big one.\n  </div>\n</div>\n\n\n<div id=\"locations\">\n  <h3>When</h3>\n  <p>Sep 24 - Oct 27 2013</p>\n\n  <h3>Locations</h3>\n  <dl>\n    <dt>Sep 24 - Oct 01</dt> \n    <dd>\n       ");
  hashContexts = {'tagName': depth0};
  hashTypes = {'tagName': "STRING"};
  options = {hash:{
    'tagName': ("li")
  },inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo),stack1 ? stack1.call(depth0, "kenya", options) : helperMissing.call(depth0, "linkTo", "kenya", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n    </dd>\n    <dt>Oct 02 - Oct 08</dt> \n    <dd>\n       ");
  hashContexts = {'tagName': depth0};
  hashTypes = {'tagName': "STRING"};
  options = {hash:{
    'tagName': ("li")
  },inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo),stack1 ? stack1.call(depth0, "uganda", options) : helperMissing.call(depth0, "linkTo", "uganda", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n    </dd>\n    <dt>Oct 09 - Oct 15</dt>\n    <dd>\n       ");
  hashContexts = {'tagName': depth0};
  hashTypes = {'tagName': "STRING"};
  options = {hash:{
    'tagName': ("li")
  },inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo),stack1 ? stack1.call(depth0, "rwanda", options) : helperMissing.call(depth0, "linkTo", "rwanda", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n    </dd>\n    <dt>Oct 16 - Oct 23</dt> \n    <dd>\n       ");
  hashContexts = {'tagName': depth0};
  hashTypes = {'tagName': "STRING"};
  options = {hash:{
    'tagName': ("li")
  },inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo),stack1 ? stack1.call(depth0, "tanzania", options) : helperMissing.call(depth0, "linkTo", "tanzania", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n    </dd>\n    <dt>Oct 24/25</dt>\n    <dd>\n       ");
  hashContexts = {'tagName': depth0};
  hashTypes = {'tagName': "STRING"};
  options = {hash:{
    'tagName': ("li")
  },inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo),stack1 ? stack1.call(depth0, "kenya", options) : helperMissing.call(depth0, "linkTo", "kenya", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n    </dd>\n  </dl>\n</div>\n\n<div id=\"participants\">\n  <h3>Participants</h3>\n  <ul class=\"participants\">\n    <li><a href=\"");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "page.root", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("about.html#Gregor_Martynus\"><img src=\"http://www.gravatar.com/avatar/24fc194843a71f10949be18d5a692682?s=160\" alt=\"Gregor\" /></a></li>\n    <li><a href=\"");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "page.root", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("about.html#Vicy_Wenzelman\"><img src=\"");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "page.root_path", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("assets/images/vicy_80.png\" alt=\"Vicy\" /></a></li>\n    <li><a href=\"");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "page.root", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("about.html#Michael_Bumann\"><img src=\"http://www.gravatar.com/avatar/22c07ebd300e450d75e9e9ee9e974793?s=160\" alt=\"Michael\" /></a></li>\n    <li><a href=\"");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "page.root", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("about.html#Alexander_Lang\"><img src=\"http://www.gravatar.com/avatar/f29d8b3a51d303cc54b20932fa6c2639?s=160\" alt=\"Alex\" /></a></li>\n    <li><a href=\"");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "page.root", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("about.html#Martin_Stadler\"><img src=\"");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "page.root", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("assets/images/xmartin.jpg\" alt=\"Martin\" /></a></li>\n    <li><a href=\"");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "page.root", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("about.html#Jan-C_Borchardt\"><img src=\"http://www.gravatar.com/avatar/2fd3f4d5d762955e5b603794a888fa97?s=160\" alt=\"Jan\" /></a></li>\n    <li><a href=\"");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "page.root", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("about.html#Sebastian_Kippe\"><img src=\"http://www.gravatar.com/avatar/ca68e41e1ab60bd90f18384ef4b47f2a?s=160\" alt=\"Sebastian\" /></a></li>\n    <li><a href=\"");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "page.root", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("about.html#Tobias_Kraentzer\"><img src=\"http://www.gravatar.com/avatar/28bafcdc7327c4570e7cad5eecbebbab?s=160\" alt=\"Tobias\" /></a></li>\n  </ul>\n</div>\n\n<div id=\"supporters\">\n  <h3>Supporters</h3>\n  github, geekphone, etc\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["kenya"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  


  data.buffer.push("<aside>\n  <h1>Nairobi, Kenya</h1>\n  <p class=\"date\">Sep 24 - Oct 01, 2013</p>\n</aside>\n\n<main>\n  <h1>Events</h1>\n  <div class=\"lanyrd-target-schedule\">\n      <a href=\"https://lanyrd.com/2013/aht13-kenya/schedule/\"\n          class=\"lanyrd-schedule\"\n          data-lanyrd-locations\n          data-lanyrd-nostyles\n          data-lanyrd-nolink>\n          Schedule for AHT Kenya chapter on Lanyrd\n      </a>\n  </div>\n</main>\n\n<script type=\"text/javascript\">\n  (function(){window.lanyrd_badge_els=[];window.lanyrdBadgeIframes=[];window.lanyrdBadge={};window.lanyrdBadges={};var N=\"http://cdn.lanyrd.net/\";var C=\"http://badges.lanyrd.net/badges/embed/\";if(location.protocol==\"https:\"){N=\"https://s3.amazonaws.com/static.lanyrd.net/\";C=\"https://lanyrd.com/badges/embed/\"}var D=\"lanyrd-\",F=document.getElementsByTagName(\"head\")[0];function O(a,c,b){if(a.addEventListener){a.addEventListener(c,b,false)}else{if(a.attachEvent){a.attachEvent(\"on\"+c,b)}}}function L(){if(L._executed){return}L._executed=true;O(window,\"message\",function(b){var a=b.data.split(\":\"),c=lanyrdBadgeIframes[a[0]];if(c&&b.origin.indexOf(\"lanyrd.\")!=-1){c.style.height=a[1]+\"px\"}})}function M(){var a=document.createElement(\"link\");a.href=N+\"badges/embed-v1.min.css\";a.rel=\"stylesheet\";F.appendChild(a)}function P(a){var b=document.createElement(\"script\");b.src=C+\"?\"+a;F.appendChild(b)}function I(a){var b=a.slug+\".\"+a.type,d=a.options;for(var c in d){b+=\".\"+c;if(d[c]!==true){b+=\"-\"+d[c].replace(\"-\",\"%2D\").replace(\".\",\"%2E\")}}return b}var G=(function(){var f=/^https?:\\/\\/lanyrd\\.com\\/(?:\\w+)\\/([^\\/]+)\\/?/i,e=/^https?:\\/\\/lanyrd\\.com\\/((?:\\d{3,4})\\/(?:[^\\/]+))\\//i,b=/^https?:\\/\\/(?:dev\\.)?lanyrd\\.(?:com|org)\\/((?:\\d{3,4})\\/(?:[^\\/]+))\\/(speakers|attendees|trackers)\\//i,c=/^https?:\\/\\/(?:dev\\.)?lanyrd\\.(?:com|org)\\/((?:\\d{3,4})\\/(?:[^\\/]+))\\/(s[a-z]+)/i;function a(n,l){var k=n.className.split(/\\s+/),h,g=l.options,i;for(var m=0,j=k.length;m<j;m++){h=k[m];if(h.indexOf(D)===0){if(!l.type){l.type=h.slice(D.length)}else{i=h.split(\"-\");g[i[1]]=i[2]||true}}}}function d(h,m){var i=m.options,j=h.attributes,k=\"data-\"+D,l;for(var g=j.length;g--;){l=j[g];if(l.nodeName.indexOf(k)===0){i[l.nodeName.slice(k.length)]=l.nodeValue||true}}}return function(h){var i,g={options:{}};a(h,g);switch(g.type){case\"sessiontrackers\":i=c.exec(h.href);if(i){g.options.sessionid=i[2]}break;case\"schedule\":i=e.exec(h.href);break;case\"participants\":case\"speakers\":i=b.exec(h.href);if(i){g.options.usertype=i[2]}break;default:i=f.exec(h.href);break}if(!i){g.options.url=h.href;g.slug=\"d\"}else{g.slug=i[1]}d(h,g);return g}})();function H(){var c,a=[];if(document.querySelectorAll){c=document.querySelectorAll('a[class*=\"'+D+'\"]')}else{c=document.getElementsByTagName(\"a\")}for(var b=c.length;b--;){if((\" \"+c[b].className+\" \").indexOf(\" \"+D)!=-1&&!c[b]._lanyrdEnhanced){c[b]._lanyrdEnhanced=1;a.push(c[b])}}return a}var J=0;lanyrdBadge.jsonpCallbacks={};function E(b,a){var d=document.createElement(\"script\"),c=\"c\"+J;lanyrdBadge.jsonpCallbacks[c]=function(){a.apply(null,arguments);d.parentNode.removeChild(d);d=null;delete lanyrdBadge.jsonpCallbacks[c]};d.src=b+\"lanyrdBadge.jsonpCallbacks.\"+c;document.body.insertBefore(d,document.body.firstChild);J++}function K(){}(function(){function b(c){c.innerHTML=\"Loading...\";E(c.href+\"x-json/?callback=\",function(d){if(d.ok){c.parentNode.parentNode.innerHTML=d[\"abstract\"]}c=null})}function a(c){c.innerHTML=\"Loading...\";E(c.getAttribute(\"data-bio-url\")+\"?callback=\",function(d){if(d.ok){c.parentNode.parentNode.innerHTML=d.bio}c=null})}O(document.body,\"click\",function(e){var c=e.target||e.srcElement,f,d;if(c.nodeName.toLowerCase()==\"a\"){d=c.getAttribute(\"data-lanyrd-action\");switch(d){case\"expand-abstract\":b(c);f=true;break;case\"expand-bio\":a(c);f=true;break}if(f){if(e.preventDefault){e.preventDefault()}return false}}})})();var o=H(),B=0,y,x,z=true,w=\"\";for(var A=o.length;A--;){y=o[A];x=G(o[A]);if(x){z=z&&!x.options.nostyles;lanyrd_badge_els[B]=y;w+=\"b=\"+encodeURIComponent(I(x))+\"&\";B++}}if(z){M()}P(w);L()})();\n</script>\n");
  
});

Ember.TEMPLATES["rwanda"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  


  data.buffer.push("<h1>Rwanda</h1>\n");
  
});

Ember.TEMPLATES["sponsoring"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  


  data.buffer.push("<h1>Sponsoring</h1>\n");
  
});

Ember.TEMPLATES["supporters"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  


  data.buffer.push("<h1>Supporters</h1>\n");
  
});

Ember.TEMPLATES["tanzania"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  


  data.buffer.push("<h1>Tanzania</h1>\n");
  
});

Ember.TEMPLATES["uganda"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  


  data.buffer.push("<h1>Uganda</h1>\n");
  
});