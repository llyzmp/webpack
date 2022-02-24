# file-loader-config

/**
 * 打包图片：
 *  - img src
 *    + 使用 require 导入图片，此时如果不配置 esModule: false ，则需.default 导出
 *    + 也可以在配置当中设置 esModule: false
 *    + 采用 import xxx from 图片资源，此时可以直接使用 xxxx
 *  - background url
 */


## 占位符
- [ext]: 扩展名
- [name]: 文件名
- [hash]: 文件内容
- [contentHash]: 
- [hash:<length>]
- [path]: