"use strict";

require("@babel/polyfill");

var _lib = require("./lib");

var _path = require("path");

// src/js/main.js
console.log(_lib.pi);
console.log((0, _lib.power)(_lib.pi, _lib.pi));
var f = new _lib.Foo();
console.log(f.foo());
console.log(f.bar()); // polyfill이 필요한 코드

console.log(new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve(1);
  }, 100);
}));
console.log(Object.assign({}, {
  x: 1
}, {
  y: 2
}));
console.log(Array.from([1, 2, 3], function (v) {
  return v + v;
}));