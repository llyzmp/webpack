postcss是一个通过javascript来转换样式的工具


browserslist筛选出要兼容的平台

1. postcss是什么： javascript转换样式的工具
2. less(less-loader) -> css -> css-loader
3. autoprefixer: npm i autoprefixer -D 结合postcss使用，可以对样式做一个前缀的添加
4. postcss-cli工具：为了在命令行可以使用postcss局部命令（npm i postcss -D）, 命令行使用npx postcss --use autoprefixer -o ret.css ./src/css/test.css
5. 借助 https://autoprefixer.github.io/ 平台查看
6. 结合browserslist，postcss, Autoprefixer就可以给相应的css样式做前缀兼容性处理

