'use strict';


function s(prim) {
  return prim;
}

function kToC(k) {
  return k - 273.15;
}

function kToF(k) {
  return (k - 273.15) * 9 / 5 + 32;
}

exports.s = s;
exports.kToC = kToC;
exports.kToF = kToF;
/* No side effect */
