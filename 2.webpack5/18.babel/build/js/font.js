"use strict";

require("../font/iconfont.css");

require("../css/index.css");

function packFont() {
  var oEle = document.createElement('div');
  var oSpan = document.createElement('span');
  oSpan.className = 'iconfont icon-linggan lly-icon';
  oEle.appendChild(oSpan);
  return oEle;
}

document.body.appendChild(packFont());