const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'build.js',
    // 输出路径必须是绝对路径
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      // 写法1. 比较全面的一个loader配置写法
      // { 
      //   test: /\.css$/,  // 一般就是一个正则表达式，用于匹配我们需要处理的文件类型
      //   // 使用的loader
      //   use: [
      //     { 
      //       loader: 'css-loader', 
      //       // options: {}    // 额外的参数
      //     }
      //   ]
      // },

      // 写法2. 简单的一个loader配置写法(如：只有一个loader的情况)
      // {
      //   test: /\.css$/,
      //   loader: 'css-loader'
      // },

      // 写法3 
      { 
        test: /\.css$/,
        use: ['css-loader']
      }
    ]
  }
}