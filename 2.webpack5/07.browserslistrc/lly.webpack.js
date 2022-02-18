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
      { 
        test: /\.css$/,
        // 执行顺序从右往左，从上往下,顺序不能写错
        use: ['style-loader', 'css-loader']
      },
      { 
        test: /\.less$/,
        // 执行顺序从右往左，从上往下,顺序不能写错
        use: ['style-loader', 'css-loader', 'less-loader']
      }
    ]
  }
}