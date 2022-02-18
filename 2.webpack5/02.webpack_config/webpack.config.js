const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'build.js',
    // 输出路径必须是绝对路径
    path: path.resolve(__dirname, 'dist')
  }
}