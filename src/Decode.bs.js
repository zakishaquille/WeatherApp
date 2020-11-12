'use strict';

var Json_decode = require("@glennsl/bs-json/src/Json_decode.bs.js");

function decodeMain(json) {
  return {
          temp: Json_decode.field("temp", Json_decode.$$float, json)
        };
}

function decodeWeather(json) {
  return {
          description: Json_decode.field("description", Json_decode.string, json),
          icon: Json_decode.field("icon", Json_decode.string, json)
        };
}

function decodeResponse(json) {
  return {
          name: Json_decode.field("name", Json_decode.string, json),
          main: Json_decode.field("main", decodeMain, json),
          weather: Json_decode.field("weather", (function (param) {
                  return Json_decode.array(decodeWeather, param);
                }), json)
        };
}

exports.decodeMain = decodeMain;
exports.decodeWeather = decodeWeather;
exports.decodeResponse = decodeResponse;
/* No side effect */
