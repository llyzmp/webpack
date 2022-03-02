# babel

1. 为什么需要babel?
   1. JSX TS ES6+  ---> 浏览器平台直接使用，需要转换
   2. 一些特性需要兼容处理，需要postcss
   3. 处理js兼容
      1. 命令行中使用命令安装babel-cli
      2. @babel/plugin-transform-arrow-functions  箭头函数转换普通函数的插件, 命令行可以使用npx babel src --out-dir build --plugins=plugin-transform-arrow-functions
      3. @babel/plugin-transform-block-scoping  作用域转换 如const -> var
      4. @babel/preset-env -D   预设集合(集成很多小插件如：箭头函数转换，const转换var), 命令行中npx babel src --out-dir build --presets=@babel/preset-env
2. 