# BEM规范

BEM分别是块（Block），元素（Element），修饰符（Modifier）

**什么是修饰符**

修饰符是改变某个块的外观的标志。要使用修饰符，可以将 --modifier 添加到块中。

假如我们要添加一个默认按钮，一个主要按钮，一个大按钮，一个小按钮，一个主要的小按钮。

## 块（Block）

是一个独立的页面组件跟其他的块区分开来，相当于网页中的组件Block封装了**行为、模板、样式和其他技术**。独立的Block可以复用，促进项目的开发。

## 元素（Element）

元素是模块Block的重要组成部分，且不能脱离模块单独的使用

元素的名称用来描述它的目的

一个完整的元素结构`block-name__element-name`，块名和元素名使用（__）双下划线分割。

```js
class="weui-tabbar">
    class="weui-tabbar__item">

    src=" "alt=""class="weui-tabbar__icon">

    class="weui-tabbar__label">
```

## 修饰符（Modifier）

Modifier是BEM的一个实体，它定义了block或element的**行为或外观**

Modifier可用可不用

Modifier本质和html的属性很相似，同一个block会因为使用Modifier而与之前看起来不一样。

-修饰符的名字与模块和元素的名字使用（_）单下划线