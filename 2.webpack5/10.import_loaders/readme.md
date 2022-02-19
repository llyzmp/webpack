postcss是一个通过javascript来转换样式的工具


browserslist筛选出要兼容的平台

1. postcss是什么： javascript转换样式的工具
2. less(less-loader) -> css -> css-loader
3. postcss-preset-env: 预设--插件集合（比如颜色设置为#12345678有些浏览器不支持，需要新的插件，这个插件集合里边很多类似的小插件，可以使用）
4. autoprefixer: npm i autoprefixer -D 结合postcss使用，可以对样式做一个前缀的添加
5. postcss-cli工具：为了在命令行可以使用postcss局部命令（npm i postcss -D）, 命令行使用npx postcss --use autoprefixer -o ret.css ./src/css/test.css
6. 借助 https://autoprefixer.github.io/ 平台查看
7. 结合browserslist，postcss, Autoprefixer就可以给相应的css样式做前缀兼容性处理

8. 不可能每次都使用命令行在操作转换样式兼容，使用工具postcss-loader (npm i postcss-loader -D)

**注意：loader中书写插件可能会重复，代码就会冗余，在项目根目录新建一个postcss.config.js文件配置插件**