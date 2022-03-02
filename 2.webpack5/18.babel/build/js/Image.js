"use strict";

var _picture = _interopRequireDefault(require("../img/picture1.jpg"));

require("../css/img.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function packImg() {
  // 01 创建一个容器元素
  var oEle = document.createElement('div'); // 02 创建 img 标签，设置 src 属性

  var oImg = document.createElement('img');
  oImg.width = 600; // oImg.src = require('../img/picture1.jpg').default
  // oImg.src = require('../img/picture1.jpg')

  oImg.src = _picture.default;
  oEle.appendChild(oImg); // 03 设置背景图片

  var oBgImg = document.createElement('div');
  oBgImg.className = 'bgBox';
  oEle.appendChild(oBgImg);
  return oEle;
}

document.body.appendChild(packImg());