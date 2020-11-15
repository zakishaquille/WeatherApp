'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Utils$CityWeather = require("./Utils.bs.js");

function Weather(Props) {
  var data = Props.data;
  var match = React.useState((function () {
          return /* Celcius */0;
        }));
  var setTemp = match[1];
  var temp = match[0];
  var onClick = function (param) {
    if (temp) {
      return Curry._1(setTemp, (function (param) {
                    return /* Celcius */0;
                  }));
    } else {
      return Curry._1(setTemp, (function (param) {
                    return /* Fahrenheit */1;
                  }));
    }
  };
  return React.createElement("div", {
              className: "weather-card"
            }, React.createElement("p", undefined, Utils$CityWeather.s(data.location)), React.createElement("p", undefined, Utils$CityWeather.s(data.description)), React.createElement("p", {
                  onClick: onClick
                }, Utils$CityWeather.s((
                        temp ? Utils$CityWeather.kToF(data.temp) : Utils$CityWeather.kToC(data.temp)
                      ).toString())));
}

var make = Weather;

exports.make = make;
/* react Not a pure module */
