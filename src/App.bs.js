'use strict';

var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Api$CityWeather = require("./Api.bs.js");
var Geo$CityWeather = require("./Geo.bs.js");
var Utils$CityWeather = require("./Utils.bs.js");
var Weather$CityWeather = require("./Weather.bs.js");
var CityForm$CityWeather = require("./CityForm.bs.js");

function App(Props) {
  var match = React.useState((function () {
          
        }));
  var setWeather = match[1];
  var weather = match[0];
  var onWeather = function (w) {
    w.then((function (data) {
              return Promise.resolve(Curry._1(setWeather, (function (param) {
                                return data;
                              })));
            })).catch((function (e) {
            console.log(e);
            return Promise.resolve(Curry._1(setWeather, (function (param) {
                              
                            })));
          }));
    
  };
  var onCity = function (city) {
    return onWeather(Api$CityWeather.getWeather(city));
  };
  React.useEffect((function () {
          var sendGeo = function (lat, lon) {
            return onWeather(Api$CityWeather.getWeather(/* Geo */Block.__(1, [
                              lat,
                              lon
                            ])));
          };
          var sendErr = function (e) {
            console.log(e);
            
          };
          Geo$CityWeather.getGeolocation(sendGeo, sendErr);
          
        }), ([]));
  return React.createElement("div", undefined, React.createElement(CityForm$CityWeather.make, {
                  onCity: onCity
                }), weather !== undefined ? React.createElement(Weather$CityWeather.make, {
                    data: weather
                  }) : React.createElement("h1", undefined, Utils$CityWeather.s("Loading...")));
}

var make = App;

exports.make = make;
/* react Not a pure module */
