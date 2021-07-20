var loaderUtil = require('loader-utils');



function loader(buffer) { // 给的是buffer
  console.log('文件输出字节',buffer.byteLength);
  // 得到配置,通过配置看字节超过限制使用base64格式,不超过使用图片路径形式
  var {limit=1000,filename = "[contenthash].[ext]"} = loaderUtil.getOptions(this);
  if(buffer.byteLength >= limit) {
    var content = getFilePath.call(this,buffer,filename);
    console.log(content);
  }else {
    var content = getBase64(buffer);
  }


  return `module.exports = \`${content}\``;
}
loader.raw = true;  // 该loader要处理的是原始数据

module.exports = loader; 

// 图片转换为base64格式
function getBase64(buffer) {
  return "data:image/png;base64," + buffer.toString('base64')
}

// 得到文件路径
function getFilePath(buffer,name) {
  var filename = loaderUtil.interpolateName(this,name,{
    content: buffer
  });
  console.log(filename);
  // 上下文提供一个方法
  this.emitFile(filename,buffer);

  return filename
}