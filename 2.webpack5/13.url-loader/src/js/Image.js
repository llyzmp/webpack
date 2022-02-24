import oImgSrc from '../img/picture1.jpg'
import '../css/img.css'


function packImg() {
  // 01 创建一个容器元素
  const oEle = document.createElement('div')

  // 02 创建 img 标签，设置 src 属性
  const oImg = document.createElement('img')
  oImg.width = 600
  // oImg.src = require('../img/picture1.jpg').default
  // oImg.src = require('../img/picture1.jpg')
  oImg.src = oImgSrc
  oEle.appendChild(oImg)

  // 03 设置背景图片
  const oBgImg = document.createElement('div')
  oBgImg.className = 'bgBox'
  oEle.appendChild(oBgImg)

  return oEle
}

document.body.appendChild(packImg())
