const path = require('path')
// 导出DefinePlugin
const { DefinePlugin } = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'build.js',
    path: path.resolve(__dirname, 'dist'),
    // // 通过asset配置,类似全局，可以单独针对图片配置
    // assetModuleFilename: "img/[name].[hash:4][ext]"
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
      // asset
      {
        test: /\.(png|svg|gif|jpe?g)$/,
        type: 'asset',
        generator: {
          filename: "img/[name].[hash:4][ext]"
        },
        // 通过图片大小来判断是否为base64,
        parser: {
          dataUrlCondition: {
            maxSize: 30 * 1024
          }
        }
      },
      // 字体图标处理
      {
        test: /\.(ttf|woff2?)$/,
        type: 'asset/resource',
        generator: {
          filename: 'font/[name].[hash:3].[ext]'
        }
      }
    ]
  },
  plugins: [
    // 构建时清空目录
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin(
      {
        title: 'html-webpack-plugin',
        template: './public/index.html'
      }
    ),
    new DefinePlugin({
      BASE_URL: '"./"'
    })
  ]
}