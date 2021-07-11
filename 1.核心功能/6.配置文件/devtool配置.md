# deevtool配置

[toc]

## source map 源码地图

source map是一门独立的技术,与webpack无关

前端发展到目前,很多时候不会直接运行源代码,可能需要对源代码进行合并,压缩,转换等操作,真正运行的是转换后的代码,这样就给调试带来了困难,因为当运行发生错误时,看不到源码的错误,而是转换后的代码

为了解决这一问题,chrome浏览器先支持了source map, 其他浏览器随后慢慢支持

source map实际上是一个配置,配置中不仅记录了所有源码内容,还记录了和转换后的代码对应关系

最佳实践:
1. source map 应在开发环境中使用,作为一种调试手段
2. source map 不应该在生产环境中使用,source map的文件一般计较大, 不仅会导致额外的网络传输,还容易暴露原始代码,几遍要在生产环境中使用source map, 用于调试的真实代码运行问题,也要做出一些处理规避网络传输和代码暴露的问题




## webpack中的source map

使用webpack编译后的代码难以调试,可以通过devtool配置来优化调试体验
查阅文档:
`https://www.webpackjs.com/configuration/devtool/`
