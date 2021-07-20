module.exports = class MyPlugin {
  apply(compiler){
    //  在这里注册事件,类似于window.onload
    console.log('插件运行了!!!');
  }
}