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


```js
// 目前login.css中的样式不需要做兼容性处理，添加前缀
// 导入的test.css文件中，样式需要做兼容性处理
// lly.webpack.js文件中css的loader配置
use: [
  'style-loader',
  'css-loader',
  'postcss-loader'
]

1. login.css @import语句导入了test.css
2. login.css可以被匹配，当它被匹配到之后就是postcss-loader进行工作
3. 基于当前代码，postcss-loader拿到了login.css当中的代码之后分析基于我们筛选条件并不需要做额外处理
4. 最终就将代码直接交给了css-loader
5. 此时css-loader是可以处理@import media url ....，这个时候它又拿到了test.css文件，但是loader不会回头找
6. 最终将处理好的css代码交给style-loader进行展示
做以下处理：给css-loader配置参数 importLoaders: 1,根据设置的数字往前找loader
{
  loader: 'css-loader',
  options: {
    importLoaders: 1
  }
},

```
