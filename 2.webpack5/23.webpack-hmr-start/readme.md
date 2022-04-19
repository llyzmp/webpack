# webpack-hot


- 在webpack配置文件添加
  ```js
   devServer: { hot: true }
  ```
- 开发阶段屏蔽掉浏览器兼容性处理 target: 'web'

- // 表示当前模块开启热更新
if(module.hot) {
  module.hot.accept(['./title.js'], () => {
    console.log('title.js更新了')
  })
}