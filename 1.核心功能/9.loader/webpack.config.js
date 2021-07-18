module.exports = {
  mode: "development",
  module: {
    rules: [
      {
        test: /index\.js$/,    //正则表达式，匹配模块路径
        use: [
          {
            loader:  "./loaders/test-loader"    ,// 加载器
            // 可以作为参数传到loader中使用
            options: {
              changeVal: '123123zz'
            }
          }  //每个加载器的使用是一个对象
        ] // 匹配到了之后,使用哪些加载器

        // 替换上边use
        // use: ["./loaders/test-loader?changeVal=12312adad"]
      },   // 规则1
      // {}   规则2
    ],     // 模块的匹配规则
  }

}