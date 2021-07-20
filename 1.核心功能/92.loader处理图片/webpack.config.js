module.exports = {
  mode: 'development',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(png)|(jpg)|(gif)/,
        use: [{
          loader: "./loaders/img-loader",
          options: {
            limit: 3000, // 限制3000字节以上使用图片路径,3000字节以内使用base64
            filename: "img-[contenthash:5].[ext]"
          }
        }]
      }
    ]
  }
}