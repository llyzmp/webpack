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
          'css-loader',
          'postcss-loader', // 写法1 下边注释的写法， 写法2：根目录新建postcss.config.js写插件
          // {
          //   // 在postcss-loader中调用postcss,postcss结合autoprefixer插件使用
          //   loader: 'postcss-loader',
          //   options: {
          //     postcssOptions: {
          //       plugins: [
          //         // autoprefixer对一些需要加前缀的样式进行处理
          //         // require('autoprefixer'),  // 被包含在postcss-preset-env插件集合内
          //         // 插件集合
          //         require('postcss-preset-env')
          //       ]
          //     }
          //   }
          // }
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