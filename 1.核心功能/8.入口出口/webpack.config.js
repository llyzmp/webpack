const path = require('path');

module.exports = {
  mode: 'development',
  // 入口
  entry: {
    // 配置多个chunk
    main: './src/index.js',     // 属性名: chunk的名称,属性值:入口模块
    // a: './src/a.js'
  },

  // 出口
  output: {
    path: path.resolve(__dirname,'target'),    // 必须配置一个绝对路径,表示资源放置的文件夹,默认是dist
    filename: '[name].[hash].js',     // 配置的合并的js文件规则,, 多个chunk对应多个文件


  }
}