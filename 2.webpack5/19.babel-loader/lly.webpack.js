const path = require('path')
// 导出DefinePlugin
const { DefinePlugin } = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    // 添加个js目录
    filename: 'js/build.js',
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
      },
      {
        test: /\.js$/,
        use: ['babel-loader'] // 使用单独文件配置babel.config.js
        // use: [
        //   {
        //     loader: 'babel-loader',
        //     // 第一种方法，需要配置很多小插件，第二种使用预设
        //     options: {
        //       // 1.小插件自定义选择
        //       // plugins: [
        //       //   "@babel/plugin-transform-arrow-functions",
        //       //   "@babel/plugin-transform-block-scoping"
        //       // ]
        //       // 2.使用预设，集成很多新语法
        //       presets: [
        //         '@babel/preset-env'
        //       ]
        //     }
        //   }
        // ]
      }
    ]
  },
  plugins: [
    // 构建时清空目录
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin(
      {
        title: 'babel-loader',
        template: './public/index.html'
      }
    ),
    new DefinePlugin({
      BASE_URL: '"./"'
    }),
    new CopyWebpackPlugin({
      // 需要配置拷贝对象的配置项
      patterns: [
        {
          // 从哪里开始拷贝,默认去找output输出的地方
          from: 'public',
          globOptions: {
            // 忽略需要copy的文件, **/代表当前目录public下的文件
            ignore: ['**/index.html']
          }
        }
      ]
    })
  ]
}