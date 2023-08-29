# 移动端css适配布局

### 媒体查询；
### rem+js实现设置根节点的像素设置；
### 用@media实现rem适配；
### 用vw定制rem自适应布局
优点 ：移动端使用rem布局需要通过JS设置不同屏幕宽高比的font-size，结合vw单位和calc()可脱离JS的控制，vw就是当前屏幕宽度的1%

![](~@public/fe-framework/frame/0001.png)

375的设计图：
html {font-size: calc(100vw / 3.75);}  ->  100px
页面元素的宽高就是设计图的宽高 / 100 rem;
width: 3.75rem; -> 相当于宽度100%