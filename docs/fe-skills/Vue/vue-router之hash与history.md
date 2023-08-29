# vue-router之hash与history
```javascript
const router = new VueRouter({
  // "hash" | "history" | "abstract"  默认："hash" (浏览器环境) | "abstract" (Node.js 环境)
  mode: 'history',
  routes: [...]
})
```
## 路由表里设置匹配不到路由的情况
## ![image.png](~@public/fe-skills/0023.png)
## hash与history
### Hash模式
**通过 onhashchange 方法监听hash的改变来实现**

- Hash模式是基于锚点，以及**onhashchange**事件
- URL中#后面的内容作为路径地址
- 监听hashchange事件
- 根据当前路由地址找到对应组件重新渲染
### History模式
**通过 onpopstate 方法监听history的改变来实现**

- History模式是基于HTML5中的History API
- 通过history.pushState()方法改变地址栏   IE 10 以后才支持
- 监听popstate事件
- history.replaceState()
- 根据当前路由地址找到对应组件重新渲染

![image.png](~@public/fe-skills/0024.png)
## History模式的使用

- History 需要服务器的支持
- 单页应用中，服务端不存在[http://www.testurl.com/login](http://www.testurl.com/login)这样的地址会返回找不到该页面
- 在服务端应该除了静态资源外都返回单页应用的index.html

history需要服务器支持，我们使用node或nginx
[http://localhost:8080/main/home](http://localhost:8080/main/home)

nginx处理方式
在nginx的html根目录部署一个项目，然后新开一个文件夹，部署另一个项目，nginx.config
```nginx
location / {
  root    html;
  index   index.html index.htm;
  try_ files $uri $uri/ /index.html
}
```
try_files

`$uri`:当前请求路由

这句话意思是尝试请求当前路由，如果请求不到，就返回当前目录下的index.html

### nginx root 和 alias 的区别
```nginx
location  /i/ {
 alias   /spool/w3/images/;
}
"/i/top.gif" -> "/spool/w3/images/top.gif"
# 把匹配到的路径重写, 注意要以/结尾


location  /i/ {
 root  /spool/w3;
}
"/i/top.gif" -> "/spool/w3/i/top.gif"
# 在匹配到的路径前面，增加root基础路径配置
```

配置完nginx.conf之后，重启nginx

![image.png](~@public/fe-skills/0025.png)
### 问题
我的应用部署在一个子路径（/lily/）上
访问路径： https://www.xxxx/lily/
#### 1、浏览器访问，显示空白页面，chunk加载失败
![image.png](~@public/fe-skills/0026.png)
![image.png](~@public/fe-skills/0027.png)
#### 2、浏览器直接访问 /static/目录，显示403
![image.png](~@public/fe-skills/0028.png)
#### 3、访问 /main/home，显示nginx页面
![image.png](~@public/fe-skills/0029.png)
#### 4、页面刚进入可以正常显示，刷新之后就显示404
#### 5、首页可以正常显示，刷新页面或者跳转到别的页面报错
**Uncaught SyntaxError: Unexpected token '<'**


看起来像是跟root的配置有关

解决尝试：
1.我修改了打包配置
```javascript
publicPath: IS_PROD ? '/lily/' : '/',
```
![image.png](~@public/fe-skills/0030.png)
![image.png](~@public/fe-skills/0031.png)

这样设置之后访问页面还是空白页

![image.png](~@public/fe-skills/0032.png)

## 后续问题解决，以及部署上线nginx配置，
请转另一篇：[https://www.yuque.com/allblue-byynd/izub4k/hysmk7](https://www.yuque.com/allblue-byynd/izub4k/hysmk7)

