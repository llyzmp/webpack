const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'build.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              esModule: false
            }
          },
          'postcss-loader'
        ]
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'less-loader'
        ]
      },
      {
        test: /\.(png|svg|gif|jpe?g)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              // // 打包文件带名字，hash 6位，加上扩展名
              // name: '[name].[hash:6].[ext]',
              // // 文件输出文件夹
              // outputPath: 'img',
              // 简写
              name: 'img/[name].[hash:6].[ext]',
            }
          }
        ]
      }
    ]
  }
}