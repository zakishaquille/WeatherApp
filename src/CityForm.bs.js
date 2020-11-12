'use strict';

var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Utils$CityWeather = require("./Utils.bs.js");

function CityForm(Props) {
  var onCity = Props.onCity;
  var match = React.useState((function () {
          return "";
        }));
  var setValue = match[1];
  var value = match[0];
  var onSubmit = function (e) {
    e.preventDefault();
    return Curry._1(onCity, /* City */Block.__(0, [value]));
  };
  return React.createElement("form", {
              onSubmit: onSubmit
            }, React.createElement("input", {
                  placeholder: "Enter city",
                  type: "text",
                  value: value,
                  onChange: (function (e) {
                      return Curry._1(setValue, e.target.value);
                    })
                }), React.createElement("button", {
                  type: "submit"
                }, Utils$CityWeather.s("Submit")));
}

var make = CityForm;

exports.make = make;
/* react Not a pure module */
