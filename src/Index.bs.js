'use strict';

var React = require("react");
var ReactDom = require("react-dom");
var App$CityWeather = require("./App.bs.js");
var Styles$CityWeather = require("./Styles.bs.js");

var style = document.createElement("style");

document.head.appendChild(style);

style.innerHTML = Styles$CityWeather.style;

function makeContainer(text) {
  var container = document.createElement("div");
  container.className = "container";
  var title = document.createElement("div");
  title.className = "containerTitle";
  title.innerText = text;
  var content = document.createElement("div");
  container.appendChild(title);
  container.appendChild(content);
  document.body.appendChild(container);
  return content;
}

ReactDom.render(React.createElement(App$CityWeather.make, { }), makeContainer("Weather App"));

exports.style = style;
exports.makeContainer = makeContainer;
/* style Not a pure module */
