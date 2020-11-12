'use strict';

var React = require("react");
var Utils$CityWeather = require("./Utils.bs.js");

function Weather(Props) {
  var data = Props.data;
  return React.createElement("div", undefined, React.createElement("p", undefined, Utils$CityWeather.s(data.location)), React.createElement("p", undefined, Utils$CityWeather.s(data.description)), React.createElement("p", undefined, Utils$CityWeather.s(data.temp.toString())));
}

var make = Weather;

exports.make = make;
/* react Not a pure module */
