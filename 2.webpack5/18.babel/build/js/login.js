"use strict";

require("../css/login.css");

require("../css/login.less");

require("../css/test.css");

// import 'css-loader!../css/login.css'
function login() {
  var oH2 = document.createElement('h2');
  oH2.innerHTML = '虚心若愚，求知若渴';
  oH2.className = 'title';
  return oH2;
}

document.body.appendChild(login());