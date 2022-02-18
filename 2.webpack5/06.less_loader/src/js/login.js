// 行内加loader方法
// import 'css-loader!../css/login.css' 
import '../css/login.css' 
import '../css/login.less' 


function login() {
  const oH2 = document.createElement('h2');
  oH2.innerHTML = '虚心若愚，求知若渴',
  oH2.className = 'title'
  return oH2
}

document.body.appendChild(login())