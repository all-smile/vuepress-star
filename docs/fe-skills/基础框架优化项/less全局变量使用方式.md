# less全局变量使用方式

## 一：在入口文件main.js里面引入

```js
import '@/styles/index.scss'
```

## 二：vue-cli2
### 1.在assets文件夹下创建–>base–>variable.less,如下

```css
// 自定义less全局变量
@data-color-cyan: #70ffe1;
@data-color-green: #00d08f;
@data-color-orange: #fa6400;
@data-state-orange: #fe824c;

@big-size: 30px;
@large-size: 25px;
@default-size: 20px;
@small-size: 15px;
@mini-size: 10px;
```

### 2.在build文件夹的utils.js进行配置,配置过后才能全局使用,
找到`exports.cssLoaders = function (options) {}`,把配置写在里面:

```javascript
function lessResourceLoader() {
  var loaders = [
    cssLoader,
    'less-loader',
    {
      loader: 'sass-resources-loader',
      options: {
        resources: [
          //这是你自定义less的变量的路劲
          path.resolve(__dirname, '../src/assets/less/base/variable.less'),
        ]
      }
    }
  ];
  if (options.extract) {
    return ExtractTextPlugin.extract({
      use: loaders,
      fallback: 'vue-style-loader'
    })
  } else {
    return ['vue-style-loader'].concat(loaders)
  }
}
//最后把 lessResourceLoader('less')放在下面,替换原先的less:xxxx
return {
  css: generateLoaders(),
  postcss: generateLoaders(),
  less: lessResourceLoader('less'),
  sass: generateLoaders('sass', { indentedSyntax: true }),
  scss: generateLoaders('sass'),
  stylus: generateLoaders('stylus'),
  styl: generateLoaders('stylus')
}
```
### 3.less变量的使用:

```css
.yn-default-wrapper {
  padding: @small-size;
  background: #fff;
}
```

## 三：vue-cli3.0

1. less文件的创建随意，想在哪里创建都可以，我一般都是在assets文件夹下
2. vue-cli3.0我是在vue.config.js文件下配置的，详情代码如下：

```javascript
module.exports = {
  chainWebpack: config => {
    const types = ["vue-modules", "vue", "normal-modules", "normal"];
    types.forEach(type =>
      addStyleResource(config.module.rule("less").oneOf(type))
                 );
  },
}
function addStyleResource(rule) {
  rule
    .use("style-resource")
    .loader("style-resources-loader")
    .options({
      patterns: [
        // 需要全局导入的less路径，自己修改
        path.resolve(__dirname, "./src/assets/style/base/component.less"),
        path.resolve(__dirname, "./src/assets/style/base/element_revise.less"),
        path.resolve(__dirname, "./src/assets/style/base/index.less"),
        path.resolve(__dirname, "./src/assets/style/base/reset.less")
      ]
    });
}
```

以上是网站粘的
***

## vuecli4
```bash
npm install sass-resources-loader -D
```
### _vue.config.js_
```javascript
// vue.config.js
module.exports = {
  chainWebpack: config => {
    const oneOfsMap = config.module.rule('less').oneOfs.store
    oneOfsMap.forEach(item => {
      item
        .use('sass-resources-loader')
        .loader('sass-resources-loader')
        .options({
          // Provide path to the file with resources
          resources: './path/to/resources.scss',

          // Or array of paths
          resources: ['./path/to/vars.scss', './path/to/mixins.scss', './path/to/functions.scss']
        })
        .end()
    })
  }
}
```

























