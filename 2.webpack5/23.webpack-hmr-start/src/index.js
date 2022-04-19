import './title'

// 表示当前模块开启热更新
if(module.hot) {
  module.hot.accept(['./title.js'], () => {
    console.log('title.js更新了')
  })
}