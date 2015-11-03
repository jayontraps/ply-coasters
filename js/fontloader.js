// font loader
var WebFontConfig = {
  google: {
    families: [ 'Raleway:400,300' ] //'Open+Sans::latin' 'Source+Sans+Pro:400,700:latin'
  },
  timeout: 2000
};

(function() {
  "use strict";
  var wf = document.createElement('script');
  wf.src = ('https:' == document.location.protocol ? 'https' : 'http') + '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
  wf.async = 'true';
  document.head.appendChild(wf);
  // console.log('fonts loading');
})();

