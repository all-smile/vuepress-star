# vue实用技巧
**Vue.config.errorHandler**

1. 场景:指定组件的渲染和观察期间未捕获错误的处理函数
2. 规则: 从 2.2.0 起，这个钩子也会捕获组件生命周期钩子里的错误。同样的，当这个钩子是 undefined 时，被捕获的错误会通过 console.error 输出而避免应用崩溃 从 2.4.0 起，这个钩子也会捕获 Vue 自定义事件处理函数内部的错误了 从 2.6.0 起，这个钩子也会捕获 v-on DOM 监听器内部抛出的错误。另外，如果任何被覆盖的钩子或处理函数返回一个 Promise 链 (例如 async 函数)，则来自其 Promise 链的错误也会被处理
3. 使用
```javascript
Vue.config.errorHandler = function (err, vm, info) {
  // handle error
  // `info` 是 Vue 特定的错误信息，比如错误所在的生命周期钩子
  // 只在 2.2.0+ 可用
}
```
## Vue.config.performance
场景:监听性能
```javascript
Vue.config.performance = true
复制代码
```
只适用于开发模式和支持 performance.mark API 的浏览器上

## Vue.config.warnHandler
2.4.0 新增 1.场景:为 Vue 的运行时警告赋予一个自定义处理函数,只会在开发者环境下生效 2.用法:
```javascript
Vue.config.warnHandler = function (msg, vm, trace) {
  // `trace` 是组件的继承关系追踪
}
```

## v-pre
场景:vue 是响应式系统,但是有些静态的标签不需要多次编译,这样可以节省性能
```vue
<span v-pre>{{ this will not be compiled }}</span>   显示的是{{ this will not be compiled }}
<span v-pre>{{msg}}</span>     即使data里面定义了msg这里仍然是显示的{{msg}}
```

## v-cloak
场景:在网速慢的情况下,在使用vue绑定数据的时候，渲染页面时会出现变量闪烁 用法:这个指令保持在元素上直到关联实例结束编译。和 CSS 规则如 [v-cloak] { display: none } 一起用时，这个指令可以隐藏未编译的 Mustache 标签直到实例准备完毕
```html
// template 中
<div class="#app" v-cloak>
  <p>{{value.name}}</p>
</div>
// css 中
[v-cloak] {
display: none;
}
```
这样就可以解决闪烁,但是会出现白屏,这样可以结合骨架屏使用

## v-once
场景:有些 template 中的静态 dom 没有改变,这时就只需要渲染一次,可以降低性能开销
```html
<span v-once> 这时只需要加载一次的标签</span>
```
v-once 和 v-pre 的区别: v-once只渲染一次；v-pre不编译,原样输出

**Vue-router**
### router-view 的 key
场景:由于 Vue 会复用相同组件, 即 /page/1 => /page/2 或者 /page?id=1 => /page?id=2 这类链接跳转时, 将不在执行created, mounted之类的钩子
```html
<router-view :key="$route.fullPath"></router-view>
```
这样组件的 created 和 mounted 就都会执行

## Object.freeze
场景:一个长列表数据,一般不会更改,但是vue会做getter和setter的转换 用法:是ES5新增的特性，可以冻结一个对象，防止对象被修改 支持:vue 1.0.18+对其提供了支持，对于data或vuex里使用freeze冻结了的对象，vue不会做getter和setter的转换 注意:冻结只是冻结里面的单个属性,引用地址还是可以更改
```javascript
new Vue({
  data: {
    // vue不会对list里的object做getter、setter绑定
    list: Object.freeze([
      { value: 1 },
      { value: 2 }
    ])
  },
  mounted () {
    // 界面不会有响应,因为单个属性被冻结
    this.list[0].value = 100;
    // 下面两种做法，界面都会响应
    this.list = [
      { value: 100 },
      { value: 200 }
    ];
    this.list = Object.freeze([
      { value: 100 },
      { value: 200 }
    ]);
  }
})
```
## 调试 template
场景:在Vue开发过程中, 经常会遇到template模板渲染时JavaScript变量出错的问题, 此时也许你会通过console.log来进行调试 这时可以在开发环境挂载一个 log 函数
```javascript
// main.js
Vue.prototype.$log = window.console.log;
// 组件内部
<div>{{$log(info)}}</div>
```
## vue-loader 小技巧
### 33.1 preserveWhitespace
场景:开发 vue 代码一般会有空格,这个时候打包压缩如果不去掉空格会加大包的体积 配置preserveWhitespace可以减小包的体积
```javascript
{
  vue: {
    preserveWhitespace: false
  }
}
```





