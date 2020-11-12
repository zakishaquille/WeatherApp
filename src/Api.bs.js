'use strict';

var Caml_array = require("bs-platform/lib/js/caml_array.js");
var Env$CityWeather = require("./Env.bs.js");
var Decode$CityWeather = require("./Decode.bs.js");

var api = "https://api.openweathermap.org/data/2.5/weather?appid=" + Env$CityWeather.api_key;

function apiByCity(city) {
  return api + ("&q=" + city);
}

function apiByGeo(lat, lon) {
  return api + ("&lat=" + (lat.toString() + ("&lon=" + lon.toString())));
}

function getEndpoint(q) {
  if (q.tag) {
    return apiByGeo(q[0], q[1]);
  } else {
    return apiByCity(q[0]);
  }
}

function formatWeatherData(w) {
  return {
          temp: w.main.temp,
          location: w.name,
          description: Caml_array.caml_array_get(w.weather, 0).description,
          icon: Caml_array.caml_array_get(w.weather, 0).icon
        };
}

function fetchWeather(endpoint) {
  return fetch(endpoint).then((function (prim) {
                  return prim.json();
                })).then((function (json) {
                return Promise.resolve(formatWeatherData(Decode$CityWeather.decodeResponse(json)));
              }));
}

function getWeather(q) {
  return fetchWeather(getEndpoint(q));
}

exports.api = api;
exports.apiByCity = apiByCity;
exports.apiByGeo = apiByGeo;
exports.getEndpoint = getEndpoint;
exports.formatWeatherData = formatWeatherData;
exports.fetchWeather = fetchWeather;
exports.getWeather = getWeather;
/* No side effect */
