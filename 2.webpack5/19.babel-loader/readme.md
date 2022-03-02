# babel-loader

> 通过loader把babel跟webpack做一个集成,在lly.webpack.js中配置

- babel-loader相关配置文件
  - babel.config.js(json cjs mjs)
  - babelrc.json(js) 和babel版本有关
  - 多包管理使用babel.config.js

<!-- 1. 写在webpack配置中 -->
```js
{
   test: /\.js$/,
   use: [
      {
      loader: 'babel-loader',
      // 第一种方法，需要配置很多小插件，第二种使用预设
      options: {
         // 1.小插件自定义选择
         // plugins: [
         //   "@babel/plugin-transform-arrow-functions",
         //   "@babel/plugin-transform-block-scoping"
         // ]
         // 2.使用预设，集成很多新语法
         presets: [
            '@babel/preset-env'
         ]
      }
      }
   ]
}

```

<!-- 2.单独在babel.config.js中设置 -->