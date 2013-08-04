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
  data.buffer.push("\n      </ul>\n    </div>\n  </div>\n</div>\n<div id=\"bigfatmap\"></div>\n<div class=\"container\">\n  ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "outlet", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n</div>\n");
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
  


  data.buffer.push("<h1>index.hbs</h1>\n");
  
});

Ember.TEMPLATES["kenya"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  


  data.buffer.push("<aside>\n  <h1>Nairobi, Kenya</h1>\n  <p class=\"date\">Sep 24 - Oct 01, 2013</p>\n</aside>\n\n<main>\n  <h1>Events</h1>\n  <div class=\"lanyrd-target-schedule\">\n      <a href=\"https://lanyrd.com/2013/aht13-kenya/schedule/\"\n          class=\"lanyrd-schedule\"\n          data-lanyrd-locations\n          data-lanyrd-nostyles\n          data-lanyrd-nolink>\n          Schedule for AHT Kenya chapter on Lanyrd\n      </a>\n  </div>\n</main>\n\n<script type=\"text/javascript\">\n(function(){if(window.lanyrdBadge){return}window.lanyrd_badge_els=[];window.lanyrdBadgeIframes=[];window.lanyrdBadge={};window.lanyrdBadges={init:o};var c=\"http://cdn.lanyrd.net/\";var n=\"http://badges.lanyrd.net/badges/embed/\";if(location.protocol==\"https:\"){c=\"https://s3.amazonaws.com/static.lanyrd.net/\";n=\"https://lanyrd.com/badges/embed/\"}var m=\"lanyrd-\",k=document.getElementsByTagName(\"head\")[0];function o(){var v=i(),p=0,s,t,r=true,u=\"\";for(var q=v.length;q--;){s=v[q];t=j(v[q]);if(t){r=r&&!t.options.nostyles;lanyrd_badge_els[p]=s;u+=\"b=\"+encodeURIComponent(h(t))+\"&\";p++}}if(r){d()}a(u);e()}function b(r,p,q){if(r.addEventListener){r.addEventListener(p,q,false)}else{if(r.attachEvent){r.attachEvent(\"on\"+p,q)}}}function e(){if(e._executed){return}e._executed=true;b(window,\"message\",function(q){var r=q.data.split(\":\"),p=lanyrdBadgeIframes[r[0]];if(p&&q.origin.indexOf(\"lanyrd.\")!=-1){p.style.height=r[1]+\"px\"}})}function d(){var p=document.createElement(\"link\");p.href=c+\"badges/embed-v1.min.css\";p.rel=\"stylesheet\";k.appendChild(p)}function a(q){var p=document.createElement(\"script\");p.src=n+\"?\"+q;k.appendChild(p)}function h(s){var r=s.slug+\".\"+s.type,p=s.options;for(var q in p){r+=\".\"+q;if(p[q]!==true){r+=\"-\"+p[q].replace(\"-\",\"%2D\").replace(\".\",\"%2E\")}}return r}var j=(function(){var p=/^https?:\\/\\/lanyrd\\.com\\/(?:\\w+)\\/([^\\/]+)\\/?/i,q=/^https?:\\/\\/lanyrd\\.com\\/((?:\\d{3,4})\\/(?:[^\\/]+))\\//i,t=/^https?:\\/\\/(?:dev\\.)?lanyrd\\.(?:com|org)\\/((?:\\d{3,4})\\/(?:[^\\/]+))\\/(speakers|attendees|trackers)\\//i,s=/^https?:\\/\\/(?:dev\\.)?lanyrd\\.(?:com|org)\\/((?:\\d{3,4})\\/(?:[^\\/]+))\\/(s[a-z]+)/i;function u(B,C){var z=B.className.split(/\\s+/),A,x=C.options,w;for(var y=0,v=z.length;y<v;y++){A=z[y];if(A.indexOf(m)===0){if(!C.type){C.type=A.slice(m.length)}else{w=A.split(\"-\");x[w[1]]=w[2]||true}}}}function r(A,B){var w=B.options,v=A.attributes,z=\"data-\"+m,y;for(var x=v.length;x--;){y=v[x];if(y.nodeName.indexOf(z)===0){w[y.nodeName.slice(z.length)]=y.nodeValue||true}}}return function(w){var v,x={options:{}};u(w,x);switch(x.type){case\"sessiontrackers\":v=s.exec(w.href);if(v){x.options.sessionid=v[2]}break;case\"schedule\":v=q.exec(w.href);break;case\"participants\":case\"speakers\":v=t.exec(w.href);if(v){x.options.usertype=v[2]}break;default:v=p.exec(w.href);break}if(!v){x.options.url=w.href;x.slug=\"d\"}else{x.slug=v[1]}r(w,x);return x}})();function i(){var p,r=[];if(document.querySelectorAll){p=document.querySelectorAll('a[class*=\"'+m+'\"]')}else{p=document.getElementsByTagName(\"a\")}for(var q=p.length;q--;){if((\" \"+p[q].className+\" \").indexOf(\" \"+m)!=-1&&!p[q]._lanyrdEnhanced){p[q]._lanyrdEnhanced=1;r.push(p[q])}}return r}var g=0;lanyrdBadge.jsonpCallbacks={};function l(r,s){var p=document.createElement(\"script\"),q=\"c\"+g;lanyrdBadge.jsonpCallbacks[q]=function(){s.apply(null,arguments);p.parentNode.removeChild(p);p=null;delete lanyrdBadge.jsonpCallbacks[q]};p.src=r+\"lanyrdBadge.jsonpCallbacks.\"+q;document.body.insertBefore(p,document.body.firstChild);g++}function f(){try{document.body.doScroll(\"up\");return o()}catch(p){}if(!executed){setTimeout(f,30)}}if(document.addEventListener){document.addEventListener(\"DOMContentLoaded\",o,false);window.addEventListener(\"load\",o,false)}else{if(document.attachEvent){document.createElement(\"abbr\");f()}}(function(){function p(r){r.innerHTML=\"Loading...\";l(r.href+\"x-json/?callback=\",function(s){if(s.ok){r.parentNode.parentNode.innerHTML=s[\"abstract\"]}r=null})}function q(r){r.innerHTML=\"Loading...\";l(r.getAttribute(\"data-bio-url\")+\"?callback=\",function(s){if(s.ok){r.parentNode.parentNode.innerHTML=s.bio}r=null})}b(document.body,\"click\",function(s){var u=s.target||s.srcElement,r,t;if(u.nodeName.toLowerCase()==\"a\"){t=u.getAttribute(\"data-lanyrd-action\");switch(t){case\"expand-abstract\":p(u);r=true;break;case\"expand-bio\":q(u);r=true;break}if(r){if(s.preventDefault){s.preventDefault()}return false}}})})()})();\n</script>\n");
  
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