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
        // 执行顺序从右往左，从上往下,顺序不能写错, postcss应该在css-loader之前工作（先把做兼容的东西加上，然后交给css-loader处理，在交给style-loader处理）
        use: [
          'style-loader',
          // 需要用对象单独设置
          // 'css-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          'postcss-loader'
        ]
      },
      { 
        test: /\.less$/,
        // 执行顺序从右往左，从上往下,顺序不能写错
        use: ['style-loader', 'css-loader','postcss-loader', 'less-loader']
      }
    ]
  }
}