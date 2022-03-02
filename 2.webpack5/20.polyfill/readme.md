# polyfill配置

> 配置polyfill，更加方便的处理js的兼容性补充操作（比如promise某些浏览器不兼容）
> @babel/preset-env不能对所有的js做兼容性处理
> 安装 core-js regenerator-runtime

1. polyfill是什么
   1. @babel/polyfill



```js
// 在babel.config.js中配置
// 单独的babel配置文件内容，告诉babel-loader使用什么插件
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        // useBuiltIns默认false, 不对当前js处理做polyfill填充
        // useBuiltIns设置为 usage, 依据用户源代码中所使用到的新语法进行填充
        // useBuiltIns设置为 entry, 依据兼容的浏览器条件配置，不管源代码中是否用到，进行填充
        useBuiltIns: 'usage',
        corejs: 3
      }
    ]
  ]
}

```