# vuecli4创建项目

```bash
vue create <project-name>

? Check the features needed for your project: (Press <space> to select, <a> to toggle all, <i> to invert selection)
>( ) Babel //转码器，可以将ES6代码转为ES5代码，从而在现有环境执行。
( ) TypeScript// TypeScript是一个JavaScript（后缀.js）的超集（后缀.ts）包含并扩展了 JavaScript 的语法，需要被编译输出为 JavaScript在浏览器运行
( ) Progressive Web App (PWA) Support// 渐进式Web应用程序
( ) Router // vue-router（vue路由）
( ) Vuex // vuex（vue的状态管理模式）
( ) CSS Pre-processors // CSS 预处理器（如：less、sass）
( ) Linter / Formatter // 代码风格检查和格式化（如：ESlint）
( ) Unit Testing // 单元测试（unit tests）
( ) E2E Testing // e2e（end to end） 测试
```

**vue.config.js**

```js
const path = require('path');
const IS_PROD = ['production', 'prod'].includes(process.env.NODE_ENV);
const resolve = (dir) => path.join(__dirname, dir);

console.log('NODE_ENV===', process.env.NODE_ENV);
console.log('IS_PROD===', IS_PROD);

module.exports = {
  publicPath: IS_PROD ? './' : '/',  // 公共路径
  indexPath: 'index.html', // 相对于打包路径index.html的路径
  outputDir: process.env.outputDir || 'dist', // 'dist', 生产环境构建文件的目录
  assetsDir: 'static', // 相对于outputDir的静态资源(js、css、img、fonts)目录
  lintOnSave: true, // 是否在开发环境下通过 eslint-loader 在每次保存时 lint 代码
  // runtimeCompiler: true, // 是否使用包含运行时编译器的 Vue 构建版本
  productionSourceMap: !IS_PROD, // 生产环境的 source map
  parallel: require("os").cpus().length > 1, // 是否为 Babel 或 TypeScript 使用 thread-loader。该选项在系统的 CPU 有多于一个内核时自动启用，仅作用于生产构建。
  pwa: {}, // 向 PWA 插件传递选项。
  chainWebpack: config => {
    config.plugin('html')
      .tap(args => {
        args[0].title = 'H5前端框架'
        return args
      })
    config.optimization
			.runtimeChunk(true)
    // 引入less全局变量
    const oneOfsMap = config.module.rule('less').oneOfs.store
    oneOfsMap.forEach(item => {
      item
        .use('sass-resources-loader')
        .loader('sass-resources-loader')
        .options({
          resources: [
            path.resolve(__dirname, './src/assets/less/base.less'), // 不采用此移动端适配方案
            path.resolve(__dirname, './src/assets/less/public.less')
          ]
        })
        .end()
    })
    config.resolve.symlinks(true); // 修复热更新失效
    // 如果使用多页面打包，使用vue inspect --plugins查看html是否在结果数组中
    config.plugin("html").tap(args => {
      // 修复 Lazy loading routes Error
      args[0].chunksSortMode = "none";
      return args;
    });
    config.resolve.alias // 添加别名
      .set('@', resolve('src'))
      .set('@assets', resolve('src/assets'))
      .set('@components', resolve('src/components'))
      .set('@baseComponents', resolve('src/base-components'))
      .set('@utils', resolve('src/libs/utils'))
      .set('@views', resolve('src/views'))
      .set('@store', resolve('src/store'));
  },
  css: {
    extract: IS_PROD,
    requireModuleExtension: true,// 去掉文件名中的 .module
    loaderOptions: {
      // 给 less-loader 传递 Less.js 相关选项
      less: {
        // `globalVars` 定义全局对象，可加入全局变量 eg: color: @primary;
        globalVars: {
          // primary: 'red'
        }
      }
    }
  },
  devServer: {
    overlay: { // 让浏览器 overlay 同时显示警告和错误
      warnings: true,
      errors: true
    },
    host: "0.0.0.0",
    port: 8080, // 端口号
    https: false, // https:{type:Boolean}
    open: true, //配置自动启动浏览器
    hotOnly: true, // 热更新
    // proxy: 'http://localhost:8080'   // 配置跨域处理,只有一个代理
    proxy: { //配置多个跨域
      "/h5api": {
        target: "http://172.11.11.11:7071",
        changeOrigin: true,
        // ws: true,//websocket支持
        secure: false,
        pathRewrite: {
          "^/h5api": ""
        },
	      logLevel: 'debug', // 查看代理日志
      },
      "/api2": {
        target: "http://172.12.12.12:2018",
        changeOrigin: true,
        //ws: true,//websocket支持
        secure: false,
        pathRewrite: {
          "^/api2": "/"
        },
	      logLevel: 'debug',
      },
    }
  }
}
```
## 完整配置
```javascript
'use strict'
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

const CompressionPlugin = require('compression-webpack-plugin')

const name = process.env.VUE_APP_TITLE || '三体' // 网页标题

const port = process.env.port || process.env.npm_config_port || 80 // 端口

// vue.config.js 配置说明
//官方vue.config.js 参考文档 https://cli.vuejs.org/zh/config/#css-loaderoptions
// 这里只列一部分，具体配置参考文档
module.exports = {
  // 部署生产环境和开发环境下的URL。
  // 默认情况下，Vue CLI 会假设你的应用是被部署在一个域名的根路径上
  // 例如 https://www.ruoyi.vip/。如果应用被部署在一个子路径上，你就需要用这个选项指定这个子路径。例如，如果你的应用被部署在 https://www.ruoyi.vip/admin/，则设置 baseUrl 为 /admin/。
  // 部署多个项目，用文件夹区分
  publicPath: process.env.NODE_ENV === "production" ? "/" : "/",
  // 在npm run build 或 yarn build 时 ，生成文件的目录名称（要和baseUrl的生产环境路径一致）（默认dist）
  outputDir: 'dist',
  // 用于放置生成的静态资源 (js、css、img、fonts) 的；（项目打包之后，静态资源会放在这个文件夹下）
  assetsDir: 'static',
  // 是否开启eslint保存检测，有效值：ture | false | 'error'
  lintOnSave: process.env.NODE_ENV === 'development',
  // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
  productionSourceMap: false,
  // webpack-dev-server 相关配置
  devServer: {
    host: '0.0.0.0',
    port: port,
    open: true,
    proxy: {
      // detail: https://cli.vuejs.org/config/#devserver-proxy
      [process.env.VUE_APP_BASE_API]: {
        target: `http://localhost:8080`,
        changeOrigin: true,
        pathRewrite: {
          ['^' + process.env.VUE_APP_BASE_API]: ''
        }
      }
    },
    disableHostCheck: true
  },
  css: {
    loaderOptions: {
      sass: {
        sassOptions: { outputStyle: "expanded" }
      }
    }
  },
  configureWebpack: {
    name: name,
    resolve: {
      alias: {
        '@': resolve('src')
      }
    },
    plugins: [
      // http://doc.ruoyi.vip/ruoyi-vue/other/faq.html#使用gzip解压缩静态文件
      new CompressionPlugin({
        test: /\.(js|css|html)?$/i,     // 压缩文件格式
        filename: '[path].gz[query]',   // 压缩后的文件名
        algorithm: 'gzip',              // 使用gzip压缩
        minRatio: 0.8                   // 压缩率小于1才会压缩
      })
    ],
  },
  chainWebpack(config) {
    config.plugins.delete('preload') // TODO: need test
    config.plugins.delete('prefetch') // TODO: need test

    // set svg-sprite-loader
    config.module
      .rule('svg')
      .exclude.add(resolve('src/assets/icons'))
      .end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/assets/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()

    config
      .when(process.env.NODE_ENV !== 'development',
        config => {
          config
            .plugin('ScriptExtHtmlWebpackPlugin')
            .after('html')
            .use('script-ext-html-webpack-plugin', [{
            // `runtime` must same as runtimeChunk name. default is `runtime`
              inline: /runtime\..*\.js$/
            }])
            .end()
          config
            .optimization.splitChunks({
              chunks: 'all',
              cacheGroups: {
                libs: {
                  name: 'chunk-libs',
                  test: /[\\/]node_modules[\\/]/,
                  priority: 10,
                  chunks: 'initial' // only package third parties that are initially dependent
                },
                elementUI: {
                  name: 'chunk-elementUI', // split elementUI into a single package
                  priority: 20, // the weight needs to be larger than libs and app or it will be packaged into libs or app
                  test: /[\\/]node_modules[\\/]_?element-ui(.*)/ // in order to adapt to cnpm
                },
                commons: {
                  name: 'chunk-commons',
                  test: resolve('src/components'), // can customize your rules
                  minChunks: 3, //  minimum common number
                  priority: 5,
                  reuseExistingChunk: true
                }
              }
            })
          config.optimization.runtimeChunk('single'),
          {
             from: path.resolve(__dirname, './public/robots.txt'), //防爬虫文件
             to: './' //到根目录下
          }
        }
      )
  }
}

```


## compression-webpack-plugin
vuecli使用注意事项： [https://segmentfault.com/a/1190000040268844](https://segmentfault.com/a/1190000040268844)
### vue TypeError: Cannot read property ‘tapPromise‘ of undefined
原因： compression-webpack-plugin"这个版本高了
解决：
```bash
# 卸载
npm uninstall compression-webpack-plugin

# 安装
npm i -D compression-webpack-plugin@6.1.1

```
```js
// 配置
const CompressionPlugin = require('compression-webpack-plugin')

configureWebpack: (config) => {
        if (process.env.NODE_ENV === 'production') {
            // 为生产环境修改配置...
            config.mode = 'production'
            return {
                plugins: [new CompressionPlugin({
                    test: /\.js$|\.html$|\.css/, //匹配文件名
                    threshold: 10240, //对超过10k的数据进行压缩
                    deleteOriginalAssets: false //是否删除原文件
                })]
            }
        }
```
### Express响应处理
在服务器我们也要做相应的配置 如果发送请求的浏览器支持gzip，就发送给它**gzip格式的文件** 我的服务器是用express框架搭建的 只要安装一下compression就能使用
```javascript
const compression = require('compression')
app.use(compression())  // 在其他中间件使用之前调用
```
### Nginx 开启 gzip_static 功能
```nginx
# 开启和关闭gzip模式
gzip on;
# gizp压缩起点，文件大于1k才进行压缩
gzip_min_length 1k;
# 设置压缩所需要的缓冲区大小，以4k为单位，如果文件为7k则申请2*4k的缓冲区
gzip_buffers 4 16k;
# 设置gzip压缩针对的HTTP协议版本
gzip_http_version 1.1;
# gzip 压缩级别，1-9，数字越大压缩的越好，也越占用CPU时间
gzip_comp_level 2;
# 需要压缩的文件mime类型
gzip_types text/plain application/javascript application/x-javascript text/javascript text/css application/xml;
# 是否在http header中添加Vary: Accept-Encoding，建议开启
gzip_vary on;
# nginx做前端代理时启用该选项，表示无论后端服务器的headers头返回什么信息，都无条件启用压缩
gzip_proxied expired no-cache no-store private auth;
# 不启用压缩的条件，IE6对Gzip不友好，所以不压缩
gzip_disable "MSIE [1-6]\.";


location / {
    root   D:\mine-project\pc-web\dist;
    index  index.html index.htm;
    try_files  $uri $uri/ /index.html;
    add_header Cache-Control no-cache;
    add_header Content-Encoding gzip;
}
```
服务端设置响应头： content-encoding=gzip
网页gzip压缩检测： [http://tool.chinaz.com/Gzips/](http://tool.chinaz.com/Gzips/)

**gzip**
[https://blog.csdn.net/fxss5201/article/details/106535475](https://blog.csdn.net/fxss5201/article/details/106535475)
关于 [nginx](https://so.csdn.net/so/search?q=nginx&spm=1001.2101.3001.7020) 的 gzip ，可以分为两种：

1. nginx **动态压缩**，对每个请求先压缩再输出。gzip on;
2. nginx **静态压缩**，使用现成的扩展名为 .gz 的预压缩文件。gzip_static配置优先级高于gzip。开启nginx_static后，对于任何文件都会先查找是否有对应的gz文件。

另一篇 Nginx优化： [https://www.yuque.com/allblue-byynd/lisfg2/cl9b8h](https://www.yuque.com/allblue-byynd/lisfg2/cl9b8h)

## 代码压缩
```bash
npm i uglifyjs-webpack-plugin -D
```
```javascript
// vue.config.js

// 代码压缩
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

...
configureWebpack: {
  plugins: [
    // 生产环境下配置
    new UglifyJsPlugin({
      uglifyOptions: {
        compress: {
          drop_debugger: true,
          drop_console: true, //生产环境自动删除console
        },
        warnings: false,
      },
      cache: false, //是否启用文件缓存，默认缓存在node_modules/.cache/uglifyjs-webpack-plugin.目录
      sourceMap: false,
      parallel: true // 使用多进程并行运行来提高构建速度。默认并发运行数：os.cpus().length - 1。
    })
  ]
}
```

| 包大小           | 策略             |
| ---------------- | ---------------- |
| 0 KB 至 10 KB    | 合并包           |
| 10 KB 至 100 KB  | 大小合适         |
| 100 KB 至 200 KB | 核心包，重点关注 |
| 大于 200 KB      | 考虑拆包         |
| 特殊情况         | 特殊处理         |

