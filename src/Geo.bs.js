'use strict';

var Curry = require("bs-platform/lib/js/curry.js");

var geo = navigator.geolocation;

function getGeolocation(sendGeo, sendErr) {
  var onSuccess = function (p) {
    return Curry._2(sendGeo, p.coords.latitude, p.coords.longitude);
  };
  var onError = Curry.__1(sendErr);
  if (geo !== undefined) {
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
    return ;
  } else {
    console.log("None available");
    return ;
  }
}

exports.geo = geo;
exports.getGeolocation = getGeolocation;
/* geo Not a pure module */
