// ==UserScript==
// @name         No DC AD
// @author       Snack
// @namespace    snack.studio
// @description  we hate ad
// @include      http://dcinside.com/
// @include      http://dcinside.com/*
// @include      http://*.dcinside.com/
// @include      http://*.dcinside.com/*
// @version      1
// @run-at       document-start
// @updateURL    https://raw.githubusercontent.com/Snack-X/no-dc-ad/master/no-dc-ad.user.js
// @grant        none
// ==/UserScript==

(function(window) {
  var noop = function() { };

  Object.defineProperties(window, {
    adBlockDetected:    { value: noop, enumerable: true, writable: false },
    adBlockNotDetected: { value: noop, enumerable: true, writable: false },
    checkAgain:         { value: noop, enumerable: true, writable: false },
  });
})(window);
